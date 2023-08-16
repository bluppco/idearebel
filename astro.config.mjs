import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import inspectUrls from "@jsdevtools/rehype-url-inspector";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://idearebel.blupp.co',
  integrations: [react(), tailwind(), mdx(), sitemap()],
  markdown: {
    rehypePlugins: [[inspectUrls, {
      selectors: ["a[href]"],
      inspectEach(url) {
        url.node.properties.target = "_blank";
      }
    }]]
  },
  redirects: {
    '/office': '/agency-contact'
  }
});