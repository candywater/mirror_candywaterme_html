import { Image as CandyImage } from "CandyUtilities";
import { pageData } from "../ts/newsReader";
import type { INewspaper } from "./INewsPaper";

// let cacheImg = (imgUrl: string | undefined, imgCacheUrl: string | undefined) => {
//     if (localStorage.getItem(imgCacheUrl ?? "")) {
//         return;
//     }
//     if (imgUrl && imgUrl !== "" && imgCacheUrl && imgCacheUrl !== "") {
//         console.log("start to add cache for", imgCacheUrl);
//         CandyImage.imgUrlToDataURL(imgCacheUrl, (dataUrl: string) => {
//             localStorage.setItem(imgCacheUrl ?? "", dataUrl);
//             console.log("finished to add cache for", imgCacheUrl);
//         });
//     }
// }

let cacheImg = (imgUrl: string | undefined, imgCacheUrl: string | undefined) => {
    openDB()
        .then((db: IDBDatabase) => {
            return new Promise((resolve, reject) => {
                if (!imgUrl || !imgCacheUrl) return resolve(() => { });
                CandyImage.imgUrlToDataURL(imgCacheUrl, (dataUrl: string) => {
                    addDataToDB(db, { imgUrl: imgUrl ?? "", imgCacheUrl: dataUrl ?? "" })
                    console.log("start caching for", imgCacheUrl);
                    resolve(()=>{})
                });
            }
            )
        })
        .catch((error) => {
            console.error(error);
        });
}


const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("CandyImgs", 1);

        request.onerror = (event) => {
            reject("Error opening database");
        };

        request.onsuccess = (event) => {
            const db = event.target.result;
            resolve(db);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            const objectStore = db.createObjectStore("Imgs", { keyPath: "imgUrl" });

            objectStore.transaction.oncomplete = (event) => {
                // Store values in the newly created objectStore.
                // const transaction = db.transaction("Imgs", "readwrite");
                // const objectStore = transaction.objectStore("Imgs");
                // objectStore.add({ imgUrl: "string", imgCacheUrl: "string" });
            };

        };
    });
};

const addDataToDB = (db: IDBDatabase, data: { imgUrl: string, imgCacheUrl: string }) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["Imgs"], "readwrite");
        const objectStore = transaction.objectStore("Imgs");
        const request = objectStore.add(data);
        request.onerror = (event) => {
            reject("Error adding data to database");
        };
        request.onsuccess = (event) => {
            resolve("Data added to database", data?.imgUrl);
        };
    });
}

const getDataFromDB = (db: IDBDatabase) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["Imgs"], "readonly");
        const objectStore = transaction.objectStore("Imgs");
        const request = objectStore.getAll();
        request.onerror = (event) => {
            reject("Error retrieving data from database");
        };
        request.onsuccess = (event) => {
            const data = event.target.result;
            resolve(data);
        };
    });
};


const getSingleDataFromDB = (db: IDBDatabase, imgUrl: string) => {
    return new Promise<string>((resolve, reject) => {
        if (!imgUrl) return resolve("");
        const transaction = db.transaction(["Imgs"], "readonly");
        const objectStore = transaction.objectStore("Imgs");
        // const index = objectStore.index("imgUrl");
        // const request = index.get(imgUrl);
        const request = objectStore.get(imgUrl);
        request.onerror = (event) => {
            reject("Error retrieving data from database");
        };
        request.onsuccess = (event) => {
            const data = event.target.result;
            // console.log(data);
            resolve(data?.imgCacheUrl);
        };
    });
}


async function loopNewPaperAndGetImgCache(data: INewspaper, set: (data: INewspaper) => void) {
    // console.log(data)
    let cacheCount = 0;

    let db = await openDB();
    for (let anchor in data.anchors) {
        const anchorKey = anchor as keyof typeof data.anchors;
        let imgsrc = data.anchors[anchorKey]?.imgsrc;
        let imgCache = await getSingleDataFromDB(db, imgsrc);
        if (imgCache) {
            cacheCount++;
            data.anchors[anchorKey].imgCache = imgCache
        };
    }

    let imgsrc = data.footline.imgsrc;
    let imgCache = await getSingleDataFromDB(db, imgsrc);
    if (imgCache) {
        cacheCount++;
        data.footline.imgCache = imgCache;
    }

    for (let item in data.sidebarline.items) {
        const itemKey = item as keyof typeof data.sidebarline.items;
        let imgsrc = data.sidebarline.items[itemKey].imgsrc;
        let imgCache = await getSingleDataFromDB(db, imgsrc);
        if (imgCache) {
            cacheCount++;
            data.sidebarline.items[itemKey].imgCache = imgCache;
        }
    }

    set(await data);

    // console.log(await data);
    console.log("used cache for", cacheCount, "imgs");
    loopCacheNewsPaper(data);
}

async function loopCacheNewsPaper(data: INewspaper) {
    for (let anchor in data.anchors) {
        const anchorKey = anchor as keyof typeof data.anchors;
        !data.anchors[anchorKey].imgCache && cacheImg(
            data.anchors[anchorKey].imgsrc ?? "",
            data.anchors[anchorKey].imgCacheUrl ?? "",
        );
    }
    !data.footline.imgCache && cacheImg(data.footline.imgsrc ?? "", data.footline.imgCacheUrl ?? "");
    for (let item in data.sidebarline.items) {
        const itemKey = item as keyof typeof data.sidebarline.items;
        !data.sidebarline.items[itemKey].imgCache && cacheImg(
            data.sidebarline.items[itemKey].imgsrc ?? "",
            data.sidebarline.items[itemKey].imgCacheUrl ?? "",
        );
    }
}


export { cacheImg, openDB, addDataToDB, getDataFromDB, loopNewPaperAndGetImgCache }
