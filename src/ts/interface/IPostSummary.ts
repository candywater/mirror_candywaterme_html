import type { IPostHeader } from "./IPostHeader";

export interface IPostSummary extends IPostHeader {
  summary?: string;
  summaryList?: string[];
  url?: string;
}
