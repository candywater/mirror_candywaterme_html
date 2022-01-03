export interface IFrontMatter {
    attributes?: IPostHeader;
    body?: string;
}
export interface IPostHeader {
    layout?: string;
    title?: string;
    date?: Date;
    tags?: string | string[];
}