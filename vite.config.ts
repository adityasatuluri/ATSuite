import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(),{
      name: "custom-server-plugin",
      configureServer(server) {
          // server is a ViteDevServer instance
          server.middlewares.use((req, res, next) => {
              console.log(`Incoming: ${req.url}`);
              next();
          });
      },
  },],
});

