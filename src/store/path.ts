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


export default {
    INDEX : INDEX_PATH,
    ABOUT : ABOUT_PATH,
    PROJECT : PROJECT_PATH,
    ESSAY : ESSAY_PATH,
    TECH : TECH_PATH,
    BLOG : BLOG_PATH,
    RANDOM : RANDOM_PATH,
}