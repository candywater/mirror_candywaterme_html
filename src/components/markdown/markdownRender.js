
import {marked} from 'marked'

marked.setOptions({
    breaks: true,
});

export function markdownParse(content){
    return marked.parse(content)
}