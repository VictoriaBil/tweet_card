import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["web"],
      polyfills: ["es.promise", "es.symbol"],
      fallback: {
        entry: "/tweet_card/main.js",
        html: "/tweet_card/index.html",
        dist: "dist",
      },
    }),
  ],
  base: "/tweet_card/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/tweet_card/",
//   resolve: {
//     alias: {
//       "@": "/src",
//     },
//   },
// });
