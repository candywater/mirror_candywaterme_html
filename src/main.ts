import Router from "./router.svelte";
import TestPage from "./Testpage.svelte";

const app = new Router({
  target: document.body,
  props: {
    // name: 'world'
  },
});

export default app;
