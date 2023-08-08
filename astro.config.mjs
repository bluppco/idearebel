import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import inspectUrls from "@jsdevtools/rehype-url-inspector";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), react()],
  markdown: {
    rehypePlugins: [[inspectUrls, {
      selectors: ["a[href]"],
      inspectEach(url) {
        url.node.properties.target = "_blank";
      }
    }]]
  }
});