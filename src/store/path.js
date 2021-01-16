import { writable } from 'svelte/store';


export const INDEX = "main"
export const ABOUT = "about"
export const PROJECT = "project"
export const path = writable(INDEX);