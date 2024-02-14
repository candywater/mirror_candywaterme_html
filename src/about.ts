import App from "./pages/about/html/index.svelte";

document.body.innerHTML = "";
const app = new App({
  target: document.body,
  props: {
    // name: 'world'
  },
});

export default app;
