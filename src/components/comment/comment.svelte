<div id="comment_alert" />
<div id="comment_input_area">
  <textarea
    name="comment"
    id=""
    cols="30"
    rows="10"
    placeholder="Write your Comment here"
  />
  <div>
    <div>
      <label for="username_input"> Nick Name:</label>
      <input type="text" name="" id="username_input" />
    </div>
    <div>
      <label for="user_email_input">Email(Optional):</label>
      <input type="email" name="" id="user_email_input" />
    </div>
    <div>
      <button
        class="btn btn-outline-dark submit-btn"
        onclick="insert_new_comment()">Submit</button
      >
      <button class="btn btn-outline-dark clear-btn" onclick="clear_comment()"
        >Clear</button
      >
    </div>
  </div>
</div>

<div id="comments" />
