import { writable } from "svelte/store";

export const INDEX = "main";
export const ABOUT = "about";
export const PROJECT = "project";
export const ESSAY = "essay";
export const TECH = "tech";
export const BLOG = "blog";
export const RANDOM = "random";
export const path = writable(INDEX);

export const INDEX_PATH = "/";
export const ABOUT_PATH = "/about";
export const PROJECT_PATH = "/project";
export const ESSAY_PATH = "/blog/essay";
export const TECH_PATH = "/blog/tech";
export const BLOG_PATH = "/blog";
export const RANDOM_PATH = "/random";

const pathdict: Object = {}
pathdict[INDEX] = INDEX_PATH
pathdict[ABOUT] = ABOUT_PATH
pathdict[PROJECT] = PROJECT_PATH
pathdict[ESSAY] = ESSAY_PATH
pathdict[TECH] = TECH_PATH
pathdict[BLOG] = BLOG_PATH
pathdict[RANDOM] = RANDOM_PATH

export default pathdict