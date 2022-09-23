import { writable } from "svelte/store";

export const INDEX = "main";
export const ABOUT = "about";
export const PROJECT = "project";
export const ESSAY = "essay";
export const TECH = "tech";
export const BLOG = "blog";
export const YEAR_SUMMARY = "year-summary";
export const BLOG_OTHER = "other";
export const RANDOM = "random";

export const INDEX_PATH = "/";
export const ABOUT_PATH = "/about";
export const PROJECT_PATH = "/project";
export const ESSAY_PATH = "/blog/essay";
export const TECH_PATH = "/blog/tech";
export const YEAR_SUMMARY_PATH = "/blog/year-summary";
export const BLOG_PATH = "/blog/:type/:year/:articlepath";
export const BLOG_OTHER_PATH = "/blog/:type/*";
export const RANDOM_PATH = "/random";

export const ESSAY_URL = "/doc/_info/essay.json";
export const TECH_URL = "/doc/_info/tech.json";
export const OTHER_URL = "/doc/_info/other.json";
export const YEAR_SUMMARY_URL = "/doc/_info/year-summary.json";

export const ESSAY_INDEX_URL = "/doc/_info/essay.txt";
export const TECH_INDEX_URL = "/doc/_info/tech.txt";
export const OTHER_INDEX_URL = "/doc/_info/other.txt";
export const YEAR_SUMMARY_INDEX_URL = "/doc/_info/year-summary.txt";

export const DOC_SRC_URL = "/doc";
export const BLOG_SRC_URL = "/blog";

export let pathDict: Object = {};
pathDict[INDEX] = INDEX_PATH;
pathDict[ABOUT] = ABOUT_PATH;
pathDict[PROJECT] = PROJECT_PATH;
pathDict[ESSAY] = ESSAY_PATH;
pathDict[TECH] = TECH_PATH;
pathDict[BLOG] = BLOG_PATH;
pathDict[BLOG_OTHER] = BLOG_OTHER_PATH;
pathDict[YEAR_SUMMARY] = YEAR_SUMMARY_PATH;
Object.freeze(pathDict);

export let mainMenuDict: Object = {};
mainMenuDict[INDEX] = INDEX_PATH;
mainMenuDict[ABOUT] = ABOUT_PATH;
mainMenuDict[PROJECT] = PROJECT_PATH;
mainMenuDict[ESSAY] = ESSAY_PATH;
mainMenuDict[TECH] = TECH_PATH;
Object.freeze(mainMenuDict);

export const path = writable(INDEX);
export const CurrentPage = writable("");
export default pathDict;
