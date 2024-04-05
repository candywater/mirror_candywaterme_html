import {
    getReadableConfigFromBackendAndUseCache,
    aboutDocFailBackUrl,
} from "@/ts/config/configReader";
import type { Readable } from "svelte/store";
import type { INewspaper } from "./INewsPaper";
import { loopNewPaperAndGetImgCache } from "./cacheImg";


let aboutDocUrl = new URL(window.location.href);
aboutDocUrl.href = window.location.href;
aboutDocUrl.search = window.location.search;
aboutDocUrl.pathname = `/cwapi/about/`;

const aboutDefaultValue: INewspaper = {
    title: "",
    issue: "",
    date: "",
    edition: "",
    headline: {
        title: "",
        text: [],
    },
    anchors: {
        terrarium: {
            href: "",
            imgsrc: "",
            caption: "",
        },
        plan: {
            href: "",
            imgsrc: "",
            captionTitle: "",
            caption: "",
        },
        hogwarts: {
            href: "",
            imgsrc: "",
            captionTitle: "",
            caption: "",
            tooltip: "",
        },
        pasta: {
            href: "",
            captionTitle: "",
            caption: "",
        },
        magazine: {
            href: "",
            captionTitle: "",
            caption: "",
        },
        style: {
            href: "",
            captionTitle: "",
            caption: "",
        },
        toggles: {
            href: "",
            captionTitle: "",
            caption: "",
        },
        menu: {
            href: "",
            captionTitle: "",
            caption: "",
        },
        social: {
            href: "",
            captionTitle: "",
            caption: "",
        },
    },
    footline: {
        href: "",
        text: "",
    },
    sidebarline: {
        title: "",
        items: {
            pie: {
                href: "",
                text: "",
            },
            captcha: {
                href: "",
                text: "",
            },
            slackui: {
                href: "",
                text: "",
            },
            workout: {
                href: "",
                text: "",
            },
        },
    },
};

export let pageData: Readable<INewspaper> = getReadableConfigFromBackendAndUseCache(
    aboutDocUrl,
    aboutDocFailBackUrl,
    aboutDefaultValue,
    loopNewPaperAndGetImgCache,
);