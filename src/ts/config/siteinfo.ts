import type { ISiteInfo } from "../interface/ISiteInfo";
import { writable, derived } from 'svelte/store';

export var SiteInfo = writable<ISiteInfo>({
  title: "candywaters",
  author: "candywater",
  github_username: "candywater",
  twitter_username: "",
  description: "",
  time: new Date(),
});
