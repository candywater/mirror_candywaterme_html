<script lang="ts">
  // https://google.github.io/styleguide/jsguide.html
  import { xhr_get, xhr_post } from "./xmlrequest";

  const COMMENT_API_URL = "/comment";

  const COMMENT_LEN_LIMIT = 1000;

  const IE_ERROR_MSG =
    "Sorry man/woman, we do not surpport IE. Try 21st century browser.";
  const COMMENT_NUMBER_LIMIT_ERROR_MSG =
    "It has reached the limit of post today. Try post tomorrow.";
  const COMMENT_LEN_LIMIT_ERROR_MSG =
    "Your post is too large to store, please try write less.";
  const WRITE_INFO_ERROR_MSG = "At least write your name and comment, thanks.";
  const ERROR_MSG = "Some error occurs. Oops.";
  const MAINTENANCE_ERROR_MSG = "Sorry, we are in maintenance.";
  const POST_SUCCESS_MSG = "Post Success.";
  const LOST_CONNECTION = "We cannot connect to comment service. Oops";
  const DEFAULT_PLACE_HOLDER_MSG = "Write your Comment here";

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

  // ready(comment_area_html);
  import { onMount } from "svelte";
  import { FormatDate } from "../../common/common";
  import Spinner from "../common/Spinner.svelte";
  import FakePanelFill from "./FakePanel_comment.svelte";
import SpinnerFacebook from "../common/SpinnerFacebook.svelte";

  onMount(() => {
    check_if_ie();
    check_service_connection();
  });

  /**
   * not support ie
   * @private
   */
  function check_if_ie() {
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
    _disabled = bool;
  }

  function check_service_connection() {
    if (true) {
      SetAlertMsg(LOST_CONNECTION, 0);
    }
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
  function when_xhr_error() {}

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
  function get_readable_time(t: Date): string {
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
      var time = new Date(element.time);
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
   * @returns {JSON} JSON string
   * @private
   */
  function create_comment_data(comment, username, useremail): string {
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
  function insert_new_comment() {
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

    xhr_post(COMMENT_API_URL, jsondata, null, when_post_finish, when_xhr_error);
  }

  /**
   * post success
   * @param {string} data
   * @public
   */
  function when_post_finish(data: string) {
    if (data == "ok") {
      clear_comment(null);
      SetAlertMsg(POST_SUCCESS_MSG, 3000);
      var comments = document.querySelector("#comments");
      //http://youmightnotneedjquery.com/
      while (comments.firstChild) comments.removeChild(comments.firstChild);
      //reload comment area
      comment_area_html();
    } else if (data == "over100") {
      SetAlertMsg(COMMENT_NUMBER_LIMIT_ERROR_MSG);
    } else if (data == "maintenance") {
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
  function SetAlertMsg(str = "", lasttime = 3000) {
    _message_box_msg = str;
    if (str && lasttime > 0)
      setTimeout(() => {
        SetAlertMsg();
      }, lasttime);
  }

  function clear_comment(e: MouseEvent) {
    _comment_text_revert = _comment_text;
    _comment_text = "";
  }

  function revert_comment(e: MouseEvent) {
    _comment_text = _comment_text_revert;
    _comment_text_revert = "";
  }

  function clear_revert_cache() {
    _comment_text_revert = "";
    console.log(_comment_text_revert);
  }

  let _comment_text: string = "";
  let _comment_text_revert: string = "";
  let _message_box_msg: string = "";
  let _disabled: boolean = false;
  let _comment_list: {
    username: string;
    time: Date;
    comment_article: string;
  }[];
  let _placeholder_msg: string = DEFAULT_PLACE_HOLDER_MSG;
  let _comment_input_height: number;
  let _comment_input_width: number;
  /*        
  
  _comment_list = [
          {username : "ss", time: new Date(), comment_article:"sdfds"},{username : "ss", time: new Date(), comment_article:"sdfds"},
          {username : "ss", time: new Date(), comment_article:"sdfds"}
        ]
        */

  getcomments();

  async function getcomments() {
    try {
      let res = await fetch("/comments/get?=");
      if (res.ok) _comment_list = await res.json();
      else {
        _disabled = true;
      }
    } catch {
      _disabled = true;
      throw "error";
    }
  }
</script>

<div id="comment_alert">
  {#if _message_box_msg}
    {@html _message_box_msg}
  {/if}
</div>
<div
  id="comment_input_area"
  bind:clientHeight={_comment_input_height}
  bind:clientWidth={_comment_input_width}
>
  {#if _disabled}
    <FakePanelFill
      height={_comment_input_height}
      width={_comment_input_width}
    />
  {/if}
  <textarea
    name="comment"
    id=""
    cols="30"
    rows="10"
    placeholder={_placeholder_msg}
    bind:value={_comment_text}
    on:input={clear_revert_cache}
    disabled={_disabled}
  />
  <div>
    <div>
      <label for="username_input"> Nick Name:</label>
      <input type="text" name="" id="username_input" disabled={_disabled} />
    </div>
    <div>
      <label for="user_email_input">Email(Optional):</label>
      <input type="email" name="" id="user_email_input" disabled={_disabled} />
    </div>
    <div>
      <button
        class={"btn btn-outline-dark submit-btn"}
        on:click={insert_new_comment}
        disabled={_disabled}>Submit</button
      >
      {#if _comment_text_revert}
        <button
          class={"btn btn-outline-dark clear-btn"}
          on:click={revert_comment}
          disabled={_disabled}>Revert</button
        >
      {:else}
        <button
          class={"btn btn-outline-dark clear-btn"}
          on:click={clear_comment}
          disabled={_disabled}>Clear</button
        >
      {/if}
    </div>
  </div>
</div>

<div id="comments">
  {#if _comment_list && _comment_list.length > 0}
    {#each _comment_list as comment}
      <div class="comment">
        <div class="comment-header">
          <div class="thumb">
            {comment.username}
          </div>
          <div class="timestamp">
            {FormatDate(comment.time)}
          </div>
        </div>
        <div class="card">
          {comment.comment_article}
        </div>
      </div>
    {/each}
  {:else if _disabled == false}
    <div class="text-center"><SpinnerFacebook /></div>
  {/if}
</div>

<style lang="scss">
  button, input, textarea{
    font-size: 80%;
  }
</style>