function loadBackgroundColor() {
    let classname = localStorage.getItem("candy_background_setting");
    if (classname) {
        const bodyElement = document.querySelector("body");
        if (bodyElement) {
            bodyElement.className = classname;
        }
    }
}

export { loadBackgroundColor };