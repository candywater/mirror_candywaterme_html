/**
 * "https://cdn.jsdelivr.net/npm/aes-js@3.1.2/index.min.js"
 * 
 * "https://bun.sh/guides/binary/arraybuffer-to-blob"
 */


/**
 * 
 * @param {string} url 
 * @param {string} key 
 * @param {number} ctrCount 
 * @param {(imgDataUrl : Uint8Array)=>{}} callback eg: 'img'
 * @returns base64string
 */
export async function decryptImg(url, key, ctrCount, callback) {


    var encryptedArray = await (await fetch(url)).arrayBuffer();
    var encryptedBytes = new Uint8Array(encryptedArray)
    var keyBytes = getShareKeyBytes(key)
    var decryptedBytes = decryptBytes(encryptedBytes, keyBytes, parseInt(ctrCount))

    var blob = new Blob([decryptedBytes])
    fileReaderToDataURL(blob, callback)
}

/**
 * sample
 * @param url 
 * @param key 
async function decryptedBase64Img(url, key, CTRCount){
    var encryptedArray = await (await fetch(url)).arrayBuffer();
    var encryptedBytes = new Uint8Array(encryptedArray)
    
    var keyBytes = getShareKeyBytes(key)
    const decryptedBytes = decryptBytes(encryptedBytes, keyBytes, CTRCount)

    var base64 = bytes2String(decryptedBytes);

    var image = new Image();
    image.src = "data:image/jpg;base64," +  base64
    document.querySelector('img').replaceWith(image);
}
*/

/**
 * callback sample
 * (bytes) => {
            var image = new Image();
            image.src = bytes
            document.querySelector('img').replaceWith(image);
        }
 */

/**
 * 
 * @param {string} key 
 * @returns string
 */
function getShareKeyBytes(key) {
    var keyBytes = string2Bytes("00000000000000000000000000000000");
    keyBytes.forEach((value, index) => { keyBytes[index] = 0 })
    var keyStringBytes = string2Bytes(key);
    keyStringBytes.forEach((value, index) => { keyBytes[index] = (value - '0') })
    return keyBytes;
}

/**
 * 
 * @param {Uint8Array} file 
 * @param {Uint8Array} keyBytes
 * @returns Buffer
 */
function decryptBytes(file, keyBytes, ctrCount) {
    var aesCtr = new aesjs.ModeOfOperation.ctr(keyBytes, new aesjs.Counter(ctrCount));
    var encryptedBytes = aesCtr.decrypt(file);
    return encryptedBytes;
}

/**
 * 
 * @param {Uint8Array} file 
 * @param {Uint8Array} keyBytes
 * @param {number} CTRCount
 * @returns Buffer
 */
function encryptBytes(file, keyBytes, CTRCount) {
    var aesCtr = new aesjs.ModeOfOperation.ctr(keyBytes, new aesjs.Counter(CTRCount));
    var encryptedBytes = aesCtr.encrypt(file);
    return encryptedBytes;
}

/**
 * 
 * @param {string} string 
 * @returns Uint8Array
 */
function string2Bytes(string) {
    return aesjs.utils.utf8.toBytes(string);
}

/**
 * @param {Uint8Array} bytes 
 * @returns string
 */
function bytes2String(bytes) {
    aesjs.utils.utf8.fromBytes(bytes)
}

/**
 * https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript
 * @param {string} url 
 * @param {Function} callback 
 */
function toDataURLviaXHR(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}

/**
 * @param {Blob} arrayBuffer
 * @param {Function} callback
 * @returns base64text
 */
function fileReaderToDataURL(arrayBuffer, callback) {
    var reader = new FileReader();
    reader.onloadend = function () {
        callback(reader.result);
    }
    reader.readAsDataURL(arrayBuffer);
}