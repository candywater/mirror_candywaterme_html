
interface INewspaper {
  title: string;
  issue: string;
  date: string;
  edition: string;
  headline: ILineItermWithTextArray;
  anchors: {
    terrarium: IAnchor;
    plan: IAnchor;
    hogwarts: IAnchor;
    pasta: IAnchor;
    magazine: IAnchor;
    style: IAnchor;
    toggles: IAnchor;
    menu: IAnchor;
    social: IAnchor;
  };
  footline: ILineItem;
  sidebarline: {
    title: string;
    items: {
      pie: ILineItem;
      captcha: ILineItem;
      slackui: ILineItem;
      workout: ILineItem;
    }
  };
}

interface IAnchor {
  href?: string;
  imgsrc?: string;
  imgCacheUrl?: string;
  imgCache?: string;
  captionTitle?: string;
  caption?: string;
  class?: string;
  tooltip?: string;
}

interface ILineItem {
  href?: string;
  imgsrc?: string;
  imgCacheUrl?: string;
  imgCache?: string;
  title?: string;
  text?: string[] | string;
}

interface ILineItermWithTextArray extends Omit<ILineItem, "text"> {
  text: string[];
}

export type {
  INewspaper,
  IAnchor,
  ILineItem,
  ILineItermWithTextArray
}