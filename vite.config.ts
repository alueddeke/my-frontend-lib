import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig(({ command, mode }) => {
  const isLibBuild = mode === "lib";

  return {
    plugins: [react(), dts()],
    build: isLibBuild
      ? {
          lib: {
            entry: "src/index.ts",
            name: "MyFrontendLib",
            formats: ["es", "cjs"],
            fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
          },
          rollupOptions: {
            external: ["react", "react-dom"],
            output: {
              globals: {
                react: "React",
                "react-dom": "ReactDOM",
              },
              assetFileNames: (assetInfo) => {
                if (assetInfo.name === "index.css") return "index.css";
                return assetInfo.name;
              },
            },
          },
        }
      : {
          outDir: "dist",
          emptyOutDir: true,
        },
    optimizeDeps: {
      include: ["react", "react-dom"],
    },
  };
});
