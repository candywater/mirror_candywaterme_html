<script lang="ts">
  import { FormatDate } from "@/ts/common/common";
  import CommentUnusable from "./comment_unavailable.svelte";
  import SpinnerFacebook from "../common/icons/SpinnerFacebook.svelte";
  import { onMount } from "svelte";
  import {
    insert_new_comment,
    check_if_ie,
    get_comments_and_reload_comment_area,
  } from "@/ts/comments/comments";
  import {
    _message_box_msg,
    _disabled,
    _comment_list,
    _placeholder_msg,
  } from "@/ts/comments/comments";

  onMount(() => {
    check_if_ie();
    get_comments_and_reload_comment_area();
  });

  let _comment_text: string = "";
  let _comment_text_revert: string = "";

  function clear_comment() {
    _comment_text_revert = _comment_text;
    _comment_text = "";
  }

  function revert_comment() {
    _comment_text = _comment_text_revert;
    _comment_text_revert = "";
  }

  function clear_revert_cache() {
    _comment_text_revert = "";
    //console.log(_comment_text_revert);
  }

</script>

<div id="comment_alert" class="normal-case">
  {#if $_message_box_msg}
    {@html $_message_box_msg}
  {/if}
</div>
<div id="comment_input_area">
  {#if $_disabled}
    <CommentUnusable />
  {:else}
    <textarea
      name="comment"
      id=""
      cols="30"
      rows="10"
      placeholder={_placeholder_msg}
      bind:value={_comment_text}
      on:input={clear_revert_cache}
      disabled={$_disabled}
    />
    <div>
      <div>
        <label for="username_input"> Nick Name:</label>
        <input type="text" name="" id="username_input" disabled={$_disabled} />
      </div>
      <div>
        <label for="user_email_input">Email(Optional):</label>
        <input
          type="email"
          name=""
          id="user_email_input"
          disabled={$_disabled}
        />
      </div>
      <div>
        <button
          class={"btn btn-outline-dark submit-btn"}
          on:click={insert_new_comment}
          disabled={$_disabled}>Submit</button
        >
        {#if _comment_text_revert}
          <button
            class={"btn btn-outline-dark clear-btn"}
            on:click={revert_comment}
            disabled={$_disabled}>Revert</button
          >
        {:else}
          <button
            class={"btn btn-outline-dark clear-btn"}
            on:click={clear_comment}
            disabled={$_disabled}>Clear</button
          >
        {/if}
      </div>
    </div>
  {/if}
</div>

<div id="comments">
  {#if $_comment_list && $_comment_list.length >= 0}
    {#each $_comment_list as comment}
      <div class="comment">
        <div class="comment-header">
          <div class="thumb">
            {comment.authorName}
          </div>
          <div class="timestamp">
            {FormatDate(comment.createdate)}
          </div>
        </div>
        <div class="card">
          {comment.commentbody}
        </div>
      </div>
    {/each}
  {:else if $_disabled == false}
    <div class="text-center"><SpinnerFacebook /></div>
  {/if}
</div>

<style lang="scss">
  button,
  input,
  textarea {
    font-size: 85%;
  }
</style>
