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
  heading(text: string, level: number) {
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
      <img class="rounded-lg" src="#" alt="${text}" title="${title}" id="${removeSpecialCharsInUrl(
        href,
      )}">
      <figcaption class="absolute px-4 text-lg text-white bottom-6 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <p>${text}</p>
      </figcaption>
    </figure>`;
    }
    //https://stackoverflow.com/questions/70504047/how-to-have-a-bordered-text-in-tailwind
    return `<figure class="relative max-w-sm transition-all filter transition-opacity hover:opacity-90">
    <img class="rounded-lg" src="${href}" alt="${text}" title="${title}">
    <figcaption class="absolute px-4 text-lg text-white bottom-6 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <p>${text}</p>
    </figcaption>
  </figure>`;
  },
  code(code: string, language: string) {
    return `<pre><code class="language-html block whitespace-pre overflow-x-auto">${escape(code, true)}</code></pre>`;
  },
  tablerow(content: string) {
    return `<tr class="bg-white text-gray-900 border-b">${content}</tr>`;
  },
  tablecell(content: string, flags: { header: boolean; align: "center" | "left" | "right" | null }) {
    const type = flags.header ? "th" : "td";
    // const attributes = flags.header ? `  scope="col" class="px-6 py-3 pd-2"` : ` class="px-6 py-4 pd-2"`;
    const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
    return `${tag}${content}</${type}>\n`;
  },
  //https://flowbite.com/docs/components/tables/
  table(header: string, body: string) {
    return `<div class="relative overflow-x-auto  ">
      <table class="w-full text-sm text-left rtl:text-right">
        <thead class="text-xs uppercase">${header}</thead>
        <tbody>${body}</tbody>
      </table>
    </div>
    `;
  },
};

marked.use({ renderer });

export function markdownParse(content: string) {
  HeaderList = [];
  return marked.parse(content);
}
