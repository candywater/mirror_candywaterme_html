import { BLOG_SRC_URL, DOC_SRC_URL } from "../config/path";
import { readable } from "svelte/store";

const aboutDocUrl = DOC_SRC_URL + `/config/about/index.json`
const resumeDocUrl = DOC_SRC_URL + `/config/resume/index.json`
const projectDocUrl = DOC_SRC_URL + `/config/project/index.json`
const indexDocUrl = DOC_SRC_URL + `/config/index.json`


function getReadableConfig(url: string, defaultValue: any) {
    return readable(defaultValue, (set) => {
        readConfigJson(url).then((data) => {
            set(data);
        });

        return () => set(defaultValue);
    });
}

function readConfigJson(url: string) {
    return fetch(url).then(response => response.json())
}

export {
    getReadableConfig,
    aboutDocUrl,
    resumeDocUrl,
    projectDocUrl,
    indexDocUrl
}
