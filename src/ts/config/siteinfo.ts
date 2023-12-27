import type { ISiteInfo, ICommentConfig } from "../interface/ISiteInfo";
import { writable, derived } from 'svelte/store';

export var SiteInfo = writable<ISiteInfo>({
  title: "candywaters",
  author: "candywater",
  github_username: "candywater",
  twitter_username: "",
  description: "",
  time: new Date(),
});

export var CommentConfigs = writable<ICommentConfig> ({
  githubOauthClientId: "93f02305cc81e51edfd4",
})
