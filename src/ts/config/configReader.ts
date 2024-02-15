import { BLOG_SRC_URL, DOC_SRC_URL } from "../config/path";

const aboutDocUrl = DOC_SRC_URL + `/config/about/index.json`
const resumeDocUrl = DOC_SRC_URL + `/config/resume/index.json`

function readJson(url: string) {
    return fetch(url).then(response => response.json())
}

export const aboutConfig = readJson(aboutDocUrl)
export const resumeConfig = readJson(resumeDocUrl)

