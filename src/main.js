import Router from './router.svelte'
import TestPage from './testpage.svelte'

const app = new TestPage({
	target: document.body,
	props: {
		// name: 'world'
	}
});


export default app;