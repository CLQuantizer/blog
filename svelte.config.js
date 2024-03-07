import { preprocessMeltUI, sequence } from '@melt-ui/pp'
import {vitePreprocess} from "@sveltejs/vite-plugin-svelte";
import adapter from '@sveltejs/adapter-auto';

const config = {
	// ... other svelte config options
	kit: {
		adapter: adapter()
	},
	preprocess: sequence([
		// ... other preprocessors
		preprocessMeltUI() // add to the end!
	])

}

export default config
