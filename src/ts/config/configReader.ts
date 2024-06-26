import { BLOG_SRC_URL, DOC_SRC_URL } from "../config/path";
import { readable } from "svelte/store";

const resumeDocFailBackUrl = DOC_SRC_URL + `/config/resume/index.json`;
const aboutDocFailBackUrl = DOC_SRC_URL + `/config/about/index.json`;
const projectDocUrl = DOC_SRC_URL + `/config/project/index.json`;
const indexDocUrl = DOC_SRC_URL + `/config/index.json`;

function getReadableConfigFromBackendAndUseCache(
  url: URL,
  failbackConfigUrl: string,
  defaultValue: any,
  cacheCallback: (data: any, set: (data: any) => void) => void,
) {
  return readable(defaultValue, (set) => {
    readConfigText(url)
      .then((configUrl) => {
        if (configUrl.endsWith(".json") === false) {
          throw new Error("config url is not json");
        }
        readConfigJson(configUrl).then((data) => {
          cacheCallback(data, set);
        });
      })
      .catch((ex) => {
        console.log(ex);
        readConfigJson(failbackConfigUrl).then((data) => {
          cacheCallback(data, set);
        });
      });

    return () => set(defaultValue);
  });
}

function getReadableConfigFromBackend(
  url: URL,
  failbackConfigUrl: string,
  defaultValue: any,
) {
  return readable(defaultValue, (set) => {
    readConfigText(url)
      .then((configUrl) => {
        if (configUrl.endsWith(".json") === false) {
          throw new Error("config url is not json");
        }
        readConfigJson(configUrl).then((data) => {
          set(data);
        });
      })
      .catch((ex) => {
        console.log(ex);
        readConfigJson(failbackConfigUrl).then((data) => {
          set(data);
        });
      });

    return () => set(defaultValue);
  });
}

function getReadableConfig(url: string, defaultValue: any) {
  return readable(defaultValue, (set) => {
    readConfigJson(url).then((data) => {
      set(data);
    });

    return () => set(defaultValue);
  });
}

function readConfigJson(url: string) {
  return fetch(url).then((response) => response.json());
}

function readConfigText(url: URL) {
  return fetch(url).then((response) => response.text());
}

export {
  getReadableConfig,
  getReadableConfigFromBackend,
  getReadableConfigFromBackendAndUseCache,
  resumeDocFailBackUrl,
  aboutDocFailBackUrl,
  projectDocUrl,
  indexDocUrl,
};
