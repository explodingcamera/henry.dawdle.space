import { defineConfig, squooshImageService } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://henry.dawdle.space",
	integrations: [sitemap()],
	vite: {
		css: { transformer: "lightningcss" },
	},
	image: {
		service: squooshImageService(),
	},
});
