import Router from "./html/index.svelte";

document.body.innerHTML = "";
const app = new Router({
  target: document.body,
  props: {
    // name: 'world'
  },
});

export default app;
