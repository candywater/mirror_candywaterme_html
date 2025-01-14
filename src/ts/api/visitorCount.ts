import { xhr_put } from "../common/xmlrequest";

const COMMENT_API_URL = "/comments";
const COMMENT_API_VISITOR_COUNT = COMMENT_API_URL + "/updatevisitorcount?blogurl=";
const TIMEOUT_MILI_SECONDS = 10000;

export function put_update_visitor_count(onload_cb: (e: Event) => void) {
    var uri = new URL(document.URL).pathname;
    xhr_put(
        COMMENT_API_VISITOR_COUNT + `${uri}`,
        '',
        (e) => { }, 
        onload_cb, 
        (e) => { },
        TIMEOUT_MILI_SECONDS,
    );
}