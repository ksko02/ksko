import Head from './Header.svelte';
import App from './App.svelte';
import App2 from './App2.svelte';


const head = new Head({
	target: document.body,
	props: {
		name: 'world'
	}
});

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

const app2 = new App2({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;