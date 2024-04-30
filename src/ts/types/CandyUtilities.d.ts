declare module "CandyUtilities" {
  declare namespace Image {
    function urlToDataURL(url: String, callback: Function);
    function fileReaderToDataURL(arrayBuffer: Blob, callback: Function);
    function imgDomToDataURL(imgSelector: String, callback: Function);
    function imgUrlToDataURL(imgUrl: string, callback: Function);

    export {
      urlToDataURL,
      fileReaderToDataURL,
      imgDomToDataURL,
      imgUrlToDataURL,
    };
  }
}
