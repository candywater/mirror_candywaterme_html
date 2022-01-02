import { writable } from "svelte/store";

export const INDEX = "main";
export const ABOUT = "about";
export const PROJECT = "project";
export const ESSAY = "essay";
export const TECH = "tech";
// export const ESSAY_PAGES = 'essaypages'
// export const TECH_PAGES = 'techpages'
// export const ESSAY_BLOG = 'essayblog'
// export const TECH_BLOG = 'techblog'
export const BLOG = "blog";
export const RANDOM = "random";

export const INDEX_PATH = "/";
export const ABOUT_PATH = "/about";
export const PROJECT_PATH = "/project";
export const ESSAY_PATH = "/blog/essay";
export const TECH_PATH = "/blog/tech";
// export const ESSAY_PAGES_PATH = "/blog/essay/pagelist";
// export const TECH_PAGES_PATH = "/blog/tech/pagelist";
// export const ESSAY_BLOG_PATH = "/blog/essay/:year/:articlepath";
// export const TECH_BLOG_PATH = "/blog/tech/:year/:articlepath";
export const BLOG_PATH = "/blog/:type/:year/:articlepath";
export const RANDOM_PATH = "/random";

export const ESSAY_URL = '/doc/essay.txt'
export const TECH_URL = '/doc/tech.txt'
export const YEAR_SUMMARY_URL = '/doc/year-summary.txt'

export let pathDict: Object = {}
pathDict[INDEX] = INDEX_PATH
pathDict[ABOUT] = ABOUT_PATH
pathDict[PROJECT] = PROJECT_PATH
pathDict[ESSAY] = ESSAY_PATH
pathDict[TECH] = TECH_PATH
// pathDict[TECH_PAGES] = TECH_PAGES_PATH
// pathDict[ESSAY_PAGES] = ESSAY_PAGES_PATH
// pathDict[ESSAY_BLOG] = TECH_BLOG_PATH
// pathDict[TECH_BLOG] = TECH_BLOG_PATH
pathDict[BLOG] = BLOG_PATH
Object.freeze(pathDict);

export let mainMenuDict : Object = {}
mainMenuDict[INDEX] = INDEX_PATH
mainMenuDict[ABOUT] = ABOUT_PATH
mainMenuDict[PROJECT] = PROJECT_PATH
mainMenuDict[ESSAY] = ESSAY_PATH
mainMenuDict[TECH] = TECH_PATH
Object.freeze(mainMenuDict)


export const path = writable(INDEX);
export default pathDict