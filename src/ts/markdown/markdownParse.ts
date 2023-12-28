import { marked } from "marked";
import { cleanUrl, escape } from "./helpers";
import type { IHeaderPair } from "../interface/IHeaderPair";
import { removeSpecialCharsInUrl } from "../common/common";

marked.setOptions({
  breaks: true,
});

export var HeaderList: IHeaderPair[] = [];

//https://marked.js.org/using_pro#renderer
const renderer = {
  heading(text, level) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");
    HeaderList.push({ text, level });
    return `
            <h${level}>
              <a name="${escapedText}" class="anchor " href="#${escapedText}">
                <span class="header-link"></span>
              </a>
              <span>${text}</span>              
            </h${level}>`;
  },
  link(href: string, title: string, text: string) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = `<a href="${escape(href, null)}" class=""`; //after:content-['↗']
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  },
  image(href: string, title: string, text: string) {
    if (href.endsWith("aes")) {
      return `<figure class="relative max-w-sm transition-all filter transition-opacity hover:opacity-90">
      <img class="rounded-lg" src="#" alt="${text}" title="${title}" id="${removeSpecialCharsInUrl(href)}">
      <figcaption class="absolute px-4 text-lg text-white bottom-6 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <p>${text}</p>
      </figcaption>
    </figure>`
    }
    //https://stackoverflow.com/questions/70504047/how-to-have-a-bordered-text-in-tailwind
    return `<figure class="relative max-w-sm transition-all filter transition-opacity hover:opacity-90">
    <img class="rounded-lg" src="${href}" alt="${text}" title="${title}">
    <figcaption class="absolute px-4 text-lg text-white bottom-6 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <p>${text}</p>
    </figcaption>
  </figure>`
  },
};

marked.use({ renderer });

export function markdownParse(content) {
  HeaderList = [];
  return marked.parse(content);
}
