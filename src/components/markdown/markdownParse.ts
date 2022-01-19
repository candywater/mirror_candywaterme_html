import { marked } from "marked";

marked.setOptions({
  breaks: true,
});

const renderer = {
  heading(text, level) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    console.log(text, level)

    return `
            <h${level}>
              <a name="${escapedText}" class="anchor" href="#${escapedText}">
                <span class="header-link"></span>
              </a>
              <span>${text}</span>              
            </h${level}>`;
  },
};

marked.use({renderer})

export function markdownParse(content) {
  return marked.parse(content);
}
