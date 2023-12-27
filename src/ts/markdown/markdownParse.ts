import { marked } from "marked";
import { cleanUrl, escape } from "./helpers";
import type { IHeaderPair } from "../interface/IHeaderPair";

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

    return `<figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
    <a href="#">
      <img class="rounded-lg" src="${href}" alt="${text}">
    </a>
    <figcaption class="absolute px-4 text-lg text-white bottom-6">
        <p>${title}</p>
    </figcaption>
  </figure>`
  },
};

marked.use({ renderer });

export function markdownParse(content) {
  HeaderList = [];
  return marked.parse(content);
}
