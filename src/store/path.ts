import { writable } from "svelte/store";

export const INDEX = "main";
export const ABOUT = "about";
export const PROJECT = "project";
export const ESSAY = "essay";
export const TECH = "tech";
export const BLOG = "blog";
export const RANDOM = "random";

export const INDEX_PATH = "/";
export const ABOUT_PATH = "/about";
export const PROJECT_PATH = "/project";
export const ESSAY_PATH = "/blog/essay";
export const TECH_PATH = "/blog/tech";
export const BLOG_PATH = "/blog";
export const RANDOM_PATH = "/random";

export let pathDict: Object = {}
pathDict[INDEX] = INDEX_PATH
pathDict[ABOUT] = ABOUT_PATH
pathDict[PROJECT] = PROJECT_PATH
pathDict[ESSAY] = ESSAY_PATH
pathDict[TECH] = TECH_PATH
pathDict[BLOG] = BLOG_PATH
pathDict[RANDOM] = RANDOM_PATH
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