import { writable } from 'svelte/store';


export const INDEX = "main"
export const ABOUT = "about"
export const PROJECT = "project"
export const ESSAY = "essay"
export const TECH = "tech"
export const RANDOM = "random"
export const path = writable(INDEX);


export const ESSAY_PATH = "/blog/essay"
export const TECH_PATH = "/blog/tech"
export const PROJECT_PATH = "/project"
export const ABOUT_PATH = "/about"
export const RANDOM_PATH = "/random"
export const INDEX_PATH = "/"