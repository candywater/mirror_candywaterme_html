// https://google.github.io/styleguide/jsguide.html
import { xhr_get, xhr_post } from "./xmlrequest";

const COMMENT_API_URL = "/comment";

const COMMENT_LEN_LIMIT = 1000;

const IE_ERROR_MSG =
  "Sorry man/woman, we do not surpport IE. Try 21st century browser.";
const COMMENT_NUMBER_LIMIT_ERROR_MSG =
  "It has reached the limit of post today. Try post tomorrow.";
const COMMENT_LEN_LIMIT_ERROR_MSG = "Your post is too large to store, please try write less.";
const WRITE_INFO_ERROR_MSG = "At least write your name and comment, thanks.";
const ERROR_MSG = "Something error occurs. Oops.";
const MAINTENANCE_ERROR_MSG = "Sorry, we are in maintenance.";
const POST_SUCCESS_MSG = "Post Success.";

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
check_if_ie();
check_service_connection();
// ready(comment_area_html);

global.insert_new_comment = insert_new_comment;
global.clear_comment = clear;

/**
 * not support ie
 * @private
 */
function check_if_ie() {
  if (
    navigator.userAgent.indexOf("MSIE") >= 0 ||
    !!navigator.userAgent.match(/Trident.*rv\:11\./)
  ) {
    AddAlertMsg(IE_ERROR_MSG);
    (<HTMLTextAreaElement>document.querySelector("#comment_input_area > textarea")).disabled = true;
    (<HTMLInputElement>document.querySelector("#username_input")).disabled = true;
    (<HTMLInputElement>document.querySelector("#user_email_input")).disabled = true;
    var btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll("#comment_input_area button");
    for (var i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
    }
  }
  // console.log(navigator.userAgent)
}

function check_service_connection(){

}


/**
 * Get all info From DB
 * @private
 */
function comment_area_html() {
  var uri = new URL(document.URL);
  let url = uri.pathname;
  xhr_get(
    COMMENT_API_URL + `?getAll=${url}`,
    loading_comment,
    draw_comment,
    when_xhr_error
  );
}

// todo
function when_xhr_error() {

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
  article.appendChild(loading_spin);
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
 * @param {*} t
 * @private
 */
function get_readable_time(t) {
  return t.toUTCString();
}

/**
 * draw comment area
 * @param {string} html
 * @public
 */
function draw_comment(comment_list) {
  remove_spinner();
  try {
    comment_list = JSON.parse(comment_list);
  } catch (e) {
    return;
  }
  // console.log(comment_list)
  comment_list.forEach((element) => {
    var username = element.username;
    var comment_article = element.comment;
    var timestamp = new Date(element.time);
    timestamp = get_readable_time(timestamp);

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
  });
}

/**
 * check input data
 * @param {string} comment
 * @param {string} username
 * @param {string} useremail
 * @private
 */
function input_check(comment, username, useremail) {
  if (comment.length >= COMMENT_LEN_LIMIT) {
    AddAlertMsg(COMMENT_LEN_LIMIT_ERROR_MSG, 3000);
    return false;
  }
  if (comment.length <= 0 || username.length <= 0) {
    AddAlertMsg(WRITE_INFO_ERROR_MSG, 3000);
    return false;
  }
  return true;
}

/**
 * create data to send
 * @param {string} comment
 * @param {string} username
 * @param {string} useremail
 * @returns {JSON} JSON string
 * @private
 */
function create_comment_data(comment, username, useremail) {
  var uri = new URL(document.URL);
  let url = uri.pathname;
  var fdata = {
    comment: comment,
    username: username,
    useremail: useremail,
    uri: url,
  };
  return JSON.stringify(fdata);
}

/**
 * 用户插入新的comment
 */
export function insert_new_comment() {
  var comment = (<HTMLTextAreaElement>document
    .querySelector("#comment_input_area > textarea"))
    .value.trim();
  var username = (<HTMLInputElement>document.querySelector("#username_input")).value.trim();
  var useremail = (<HTMLInputElement>document.querySelector("#user_email_input")).value.trim();

  if (!input_check(comment, username, useremail)) return;
  var jsondata = create_comment_data(comment, username, useremail);

  xhr_post(
    COMMENT_API_URL,
    jsondata,
    null,
    when_post_finish,
    when_xhr_error
  );
}

/**
 * post success
 * @param {string} data
 * @public
 */
function when_post_finish(data) {
  if (data == "ok") {
    clear();
    AddAlertMsg(POST_SUCCESS_MSG, 3000);
    var comments = document.querySelector("#comments");
    //http://youmightnotneedjquery.com/
    while (comments.firstChild) comments.removeChild(comments.firstChild);
    //reload comment area
    comment_area_html();
  } else if (data == "over100") {
    AddAlertMsg(COMMENT_NUMBER_LIMIT_ERROR_MSG);
  } else if (data == "maintenance") {
    AddAlertMsg(MAINTENANCE_ERROR_MSG, 10000);
  } else {
    AddAlertMsg(ERROR_MSG, 10000);
  }
}

/**
 *
 * @param {string} str
 * @param {Number} lasttime ms
 */
function AddAlertMsg(str = "", lasttime = 0) {
  var msgbox = document.querySelector("#comment_alert");
  if (!str) {
    msgbox.innerHTML = "";
    return;
  }
  msgbox.innerHTML = str;
  if (lasttime > 0)
    setTimeout(() => {
      AddAlertMsg();
    }, lasttime);
}

/**
 * 用户点击清理按钮
 * @param {boolean} all
 */
export function clear(all = false) {
  AddAlertMsg();
  (<HTMLInputElement>document.querySelector("#comment_input_area > textarea")).value = "";
  if (all) {
    (<HTMLInputElement>document.querySelector("#username_input")).value = "";
    (<HTMLInputElement>document.querySelector("#user_email_input")).value = "";
  }
}
