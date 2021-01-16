import { writable } from 'svelte/store';


export const INDEX = "index"
export const ABOUT = "about"
export const PROJECT = "project"
export const path = writable(INDEX);