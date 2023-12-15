// https://google.github.io/styleguide/jsguide.html
import { xhr_get, xhr_post } from "../common/xmlrequest";
import {
    IE_ERROR_MSG,
    COMMENT_NUMBER_LIMIT_ERROR_MSG,
    COMMENT_LEN_LIMIT_ERROR_MSG,
    WRITE_INFO_ERROR_MSG,
    ERROR_MSG,
    MAINTENANCE_ERROR_MSG,
    POST_SUCCESS_MSG,
    LOST_CONNECTION,
    DEFAULT_PLACE_HOLDER_MSG
} from "../config/comment";
import { writable } from "svelte/store";

const COMMENT_API_URL = "/comments";
const COMMENT_API_GET_SINGLE_PAGE = COMMENT_API_URL + "/getforblog?blogurl=";
const COMMENT_API_POST_SINGLE_COMMENT = COMMENT_API_URL + "/post";

const COMMENT_LEN_LIMIT = 1000;
const TIMEOUT_MILI_SECONDS = 10000;

const COMMENT_HTML = `  
<div class="comment">
  <div class="thumb">
    tomm cat
  </div>
  <div class="card">
    test comment
  </div>
</div>
`;

export const _message_box_msg = writable<string>("");
export const _disabled = writable<boolean>(false);
export const _comment_list = writable<{
    authorName: string;
    createdate: Date;
    commentbody: string; 
}[]>([]);

export const _placeholder_msg: string = DEFAULT_PLACE_HOLDER_MSG;



/**
 * not support ie
 * @private
 */
export function check_if_ie() {
    if (
        navigator.userAgent.indexOf("MSIE") >= 0 ||
        !!navigator.userAgent.match(/Trident.*rv\:11\./)
    ) {
        SetAlertMsg(IE_ERROR_MSG);
        set_all_component_disable(true);
    }
    // console.log(navigator.userAgent)
}


function set_all_component_disable(bool: boolean) {
    _disabled.set(bool);
}

function check_service_connection() {
    if (_disabled) {
        SetAlertMsg(LOST_CONNECTION, 0);
    }
}

/**
 * Get all info From DB
 * @private
 */
export function get_comments_and_reload_comment_area() {
    var uri = new URL(document.URL).pathname;
    xhr_get(
        COMMENT_API_GET_SINGLE_PAGE + `${uri}`,
        loading_comment,
        draw_comments,
        when_xhr_error,
        TIMEOUT_MILI_SECONDS
    );
}

// todo
function when_xhr_error() {
    _disabled.set(true);
    check_service_connection();
}

/**
 * loading comment
 * @public
 */
function loading_comment() {
    var loading_spin: any = document.createElement("div");
    loading_spin.className = "lds-dual-ring";
    loading_spin.style = "margin:0 auto; display: flex;";
    var article = document.querySelector("article[class='post']");
    article?.appendChild(loading_spin);
}

/**
 * remove spinner
 * @private
 */
function remove_spinner() {
    var spinner = document.querySelectorAll(".lds-dual-ring");
    spinner.forEach((val) => {
        val.parentNode.removeChild(val);
    });
}

/**
 *
 * @param {Date} t
 * @private
 */
function get_readable_time(t: Date): string {
    return t.toUTCString();
}

/**
 * draw comment area
 * @param {string} html
 * @private
 */
function draw_comments(comment_list) {
    remove_spinner();
    try {
        comment_list = JSON.parse(comment_list);
    } catch (e) {
        return;
    }
    // console.log(comment_list)
    if (comment_list?.length && comment_list?.length > 0)
        comment_list?.forEach(draw_comment);
}

function draw_comment(element) {
    var username = element.authorName;
    var comment_article = element.commentbody;
    var time = new Date(element.createdate);
    let timestamp = get_readable_time(time);

    var comment_node = document.createElement("div");
    comment_node.className = "comment";
    comment_node.innerHTML = `
  <div class="comment-header">
    <div class="thumb">
      ${username}
    </div>
    <div class="timestamp">
      ${timestamp}
    </div>
  </div>
  <div class="card">
    ${comment_article}
  </div>
`;
    var article = document.querySelector("#comments");
    article.appendChild(comment_node);
}

/**
 * check input data
 * @param {string} comment
 * @param {string} username
 * @private
 */
function input_check(comment: string, username: string, useremail: string) {
    if (comment.length >= COMMENT_LEN_LIMIT) {
        SetAlertMsg(COMMENT_LEN_LIMIT_ERROR_MSG, 3000);
        return false;
    }
    if (comment.length <= 0 || username.length <= 0) {
        SetAlertMsg(WRITE_INFO_ERROR_MSG, 3000);
        return false;
    }
    return true;
}

/**
 * create data to send
 * @param {string} comment
 * @param {string} username
 * @param {string} useremail
 * @returns {string} JSON string
 * @private
 */
function create_comment_data(
    comment: string,
    username: string,
    useremail: string
): string {
    var uri = new URL(document.URL);
    let url = uri.pathname;
    var fdata = {
        commentbody: comment,
        authorName: username,
        authoremailaddress: useremail,
        blogurl: url,
    };
    return JSON.stringify(fdata);
}

/**
 * 用户插入新的comment
 */
export function insert_new_comment() {
    var comment = (<HTMLTextAreaElement>(
        document.querySelector("#comment_input_area > textarea")
    )).value.trim();
    var username = (<HTMLInputElement>(
        document.querySelector("#username_input")
    )).value.trim();
    var useremail = (<HTMLInputElement>(
        document.querySelector("#user_email_input")
    )).value.trim();

    if (!input_check(comment, username, useremail)) return;
    var jsondata = create_comment_data(comment, username, useremail);

    xhr_post(COMMENT_API_POST_SINGLE_COMMENT, jsondata, null, when_post_finish, when_xhr_error);
}

/**
 * post success
 * @param {string} data
 * @public
 */
function when_post_finish(data: string) {
    if (data.toLowerCase() == "ok") {
        //clear_comment();
        (<HTMLTextAreaElement>(
            document.querySelector("#comment_input_area > textarea")
        )).value = "";
        SetAlertMsg(POST_SUCCESS_MSG, 3000);
        var comments = document.querySelector("#comments");
        //http://youmightnotneedjquery.com/
        while (comments.firstChild) comments.removeChild(comments.firstChild);
        //reload comment area
        get_comments_and_reload_comment_area();
    } else if (data.toLowerCase() == "over100") {
        SetAlertMsg(COMMENT_NUMBER_LIMIT_ERROR_MSG);
    } else if (data.toLowerCase() == "maintenance") {
        SetAlertMsg(MAINTENANCE_ERROR_MSG, 10000);
    } else {
        SetAlertMsg(ERROR_MSG, 10000);
    }
}

/**
 *
 * @param {string} str
 * @param {Number} lasttime ms
 */
function SetAlertMsg(str: string = "", lasttime: number = 3000) {
    _message_box_msg.set(str);
    if (str && lasttime > 0)
        setTimeout(() => {
            SetAlertMsg();
        }, lasttime);
}


/*        
  
  _comment_list = [
    {
      "authorName": "candywater",
      "commentbody": "所以说这一切3",
      "createdate": "2022-12-22T05:07:45.51684+00:00"
    },
    {
      "authorName": "candywater",
      "commentbody": "lala land",
      "createdate": "2022-12-22T07:11:05.953155+00:00"
    },
    {
      "authorName": "candywater",
      "commentbody": "lala land2",
      "createdate": "2022-12-22T07:11:12.533285+00:00"
    }
  ]
        */

