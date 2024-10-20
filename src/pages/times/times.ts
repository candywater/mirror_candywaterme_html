import App from "./html/index.svelte";

document.body.innerHTML = "";
const app = new App({
  target: document.body,
  props: {
    // name: 'world'
  },
});

export default app;
