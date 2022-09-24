import type { IPostHeader } from "./IPostHeader";

export interface IPostSummary extends IPostHeader {
  summary?: string;
  url?: string;
}
