export interface ISiteInfo {
  title?: string;
  author?: string;
  email?: string;
  github_username?: string;
  twitter_username?: string;
  description?: string;
  time?: Date;
  [propName: string]: any;
}
