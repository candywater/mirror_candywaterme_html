/**
 * XMLHttpReq Get
 * @param {String} uri
 * @param {Function} onprogress_cb
 * @param {Function} onload_cb
 * @param {Function} onerror_cb
 * @param {Int32} timeout
 */
export function xhr_get(
  uri,
  onprogress_cb,
  onload_cb,
  onerror_cb,
  timeout = 10000
) {
  let req = {
    method: "GET",
    uri: uri,
    timeout: timeout,
  };

  let xhr = new XMLHttpRequest();
  xhr.timeout = req.timeout; //can not wait for more than 3 seconds!!
  xhr.responseType = "text";
  xhr.open(req.method, req.uri, true);
  xhr.onprogress = function () {
    if (onprogress_cb) onprogress_cb();
  };
  xhr.onload = function (res: any) {
    if (onload_cb) onload_cb(res.target.responseText);
    console.log("success");
  };
  xhr.onerror = onerror_cb;
  xhr.send(null);
}

/**
 * XMLHttpReq post
 * @param {String} uri
 * @param {JSON} data
 * @param {Function} onprogress_cb
 * @param {Function} onload_cb
 * @param {Function} onerror_cb
 * @param {Int32} timeout
 */
export function xhr_post(
  uri,
  data,
  onprogress_cb,
  onload_cb,
  onerror_cb,
  timeout = 10000
) {
  let req = {
    method: "POST",
    uri: uri,
    timeout: timeout,
  };

  let xhr = new XMLHttpRequest();
  xhr.timeout = req.timeout; //can not wait for more than 3 seconds!!
  xhr.responseType = "text";
  xhr.open(req.method, req.uri, true);
  //https://stackoverflow.com/questions/25695778/sending-xmlhttprequest-with-formdata
  // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // xhr.setRequestHeader("Content-Type", "multipart/form-data");
  xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  xhr.onprogress = function () {
    if (onprogress_cb) onprogress_cb();
  };
  xhr.onload = function (res: any) {
    if (onload_cb) onload_cb(res.target.responseText);
    console.log("success");
  };
  xhr.onerror = onerror_cb;
  xhr.send(data);
}