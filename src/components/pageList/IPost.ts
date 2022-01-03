import type { IPostHeader } from "./IFrontMatter";

export interface IPostSummary extends IPostHeader {
    summary?: string;
    url?: string;
}