// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@devades/tailwind-config";

const config: Pick<Config, "content" | "presets" | "safelist"> = {
  content: [
    "@repo/ui/*.{js,ts,jsx,tsx,mdx}", 
    "@repo/ui/**/*.{js,ts,jsx,tsx,mdx}", 
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./src/app/*.{js,ts,jsx,tsx,mdx}"
  ],
  // TODO!! Add Safelist to @devades/tailwind-config in addition to sharedConfig.
  // At least those that are theme based colors and text and spacing and so on.
  // If the source page didn't use the styles and they are used in design system component
  // the styles won't be loaded due to tailwind performance
  safelist: [
    'bg-zinc-900',
    'border-zinc-900',
    'text-3xl',
    'lg:text-4xl',
  ],
  presets: [sharedConfig],
};

export default config;