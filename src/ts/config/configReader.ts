import { BLOG_SRC_URL, DOC_SRC_URL } from "../config/path";
import { readable } from "svelte/store";

const resumeDocFailBackUrl = DOC_SRC_URL + `/config/resume/index.json`;
const aboutDocFailBackUrl = DOC_SRC_URL + `/config/about/index.json`
const projectDocFailBackUrl = DOC_SRC_URL + `/config/project/index.json`
const indexDocFailBackUrl = DOC_SRC_URL + `/config/index.json`

function getReadableConfigFromBackend(url: URL, failbackConfigUrl: string, defaultValue: any) {
    return readable(defaultValue, (set) => {
        readConfigText(url)
            .then((configUrl) => {
                if(configUrl.endsWith(".json") === false){throw new Error("config url is not json") }
                readConfigJson(configUrl).then((data) => {
                    set(data);
                })
            })
            .catch((ex) => {
                console.log(ex)
                readConfigJson(failbackConfigUrl).then((data) => {
                    set(data);
                })
            });

        return () => set(defaultValue);
    });
}

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

function readConfigText(url: URL) {
    return fetch(url).then(response => response.text())
}

export {
    getReadableConfig,
    getReadableConfigFromBackend,
    resumeDocFailBackUrl,
    aboutDocFailBackUrl,
    projectDocFailBackUrl,
    indexDocFailBackUrl
}
