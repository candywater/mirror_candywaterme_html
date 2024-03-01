import type { IPostSummary } from "@/ts/interface/IPostSummary";
import type { IResultItem } from "@/ts/interface/IResultItem";

const SEARCH_NO_ITEM: string = "No Result";

function search(key: string, content_list: IPostSummary[]) {
    var _res_list: IResultItem[] = [];
    for (const [_key, value] of Object.entries(content_list)) {
        if (existKey(value.title, key)) {
            addSearchItem(value.title, value.url, value.title, _res_list);
        }
        if (existKey(value.summary, key)) {
            addSearchItem(value.summary, value.url, value.title, _res_list);
        }
        if (existKey(value.tags?.toString(), key)) {
            addSearchItem(value.tags?.toString(), value.url, value.title, _res_list),
                value.title;
        }
        if (existKey(value.tag, key)) {
            addSearchItem(value.tag, value.url, value.title, _res_list);
        }
        if (existKey(value.date?.toString(), key)) {
            // let date = new Date(key);
            // if (date && value.date == date)
            addSearchItem(value.date?.toString(), value.url, value.title, _res_list);
        }
        if (_res_list.length > 5) {
            addSearchItem("...", "", "", _res_list);
            break;
        }
    }
    if (_res_list.length == 0 && key) {
        addSearchItem(SEARCH_NO_ITEM, "", "", _res_list);
    }
    return _res_list;
    // console.log(_res_list);
}

function existKey(search: string | undefined, key: string): boolean {
    if (!search) { return false; }
    if (search && key && search.toLowerCase().includes(key.toLowerCase())) {
        return true;
    }
    return false;
}

function addSearchItem(value: string | undefined, url: string | undefined, title: string | undefined, _res_list: IResultItem[]) {
    if (!value || !url || !title) { return _res_list; }
    let duplicate = false;
    _res_list.forEach((element) => {
        if (element.url == url) duplicate = true;
    });
    if (duplicate) return;
    _res_list.push({
        result: value,
        url: url,
        title: title,
    });

    return _res_list;
}

export { search }