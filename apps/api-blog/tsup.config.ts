import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entryPoints: ["src/*.ts", "src/api/*.ts"],
  clean: true,
  format: ["cjs"],
  ...options,
}));
