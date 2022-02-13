import Router from "./router.svelte";
import TestPage from "./testpage.svelte";

document.body.innerHTML = "";
const app = new Router({
  target: document.body,
  props: {
    // name: 'world'
  },
});

export default app;
