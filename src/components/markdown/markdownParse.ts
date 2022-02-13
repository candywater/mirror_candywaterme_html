import { marked } from "marked";
import { cleanUrl, escape } from "marked/src/helpers";
import type { IHeaderPair } from "../../interface/IHeaderPair";

marked.setOptions({
  breaks: true,
});

export var HeaderList: IHeaderPair[] = [];

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
    let out = `<a href="${escape(href)}" class=""`; //after:content-['↗']
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  },
};

marked.use({ renderer });

export function markdownParse(content) {
  HeaderList = [];
  return marked.parse(content);
}
