import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  output:"server",

  adapter:node({
      mode:"standalone"
  }),

  security: {
    allowedDomains: [
      {
        protocol: "https",
        hostname: "clients.lola-brouart.fr"
      }
    ]
  },

});
