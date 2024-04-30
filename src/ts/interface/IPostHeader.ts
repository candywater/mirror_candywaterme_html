export interface IPostHeader {
  layout?: string;
  title?: string;
  date?: Date;
  tags?: string | string[];
  category?: string;
  tag?: string;
  [propName: string]: any;
}
