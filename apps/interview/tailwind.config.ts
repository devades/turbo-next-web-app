// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@devades/tailwind-config";

const config: Pick<Config, "content" | "presets" | "safelist"> = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  // TODO!! Add Safelist to @devades/tailwind-config in addition to sharedConfig.
  // At least those that are theme based colors and text and spacing and so on.
  // If the source page didn't use the styles and they are used in design system component
  // the styles won't be loaded due to tailwind performance
  safelist: [
    "backdrop-blur-lg",
    "bg-black",
    "bg-black/50",
    "bg-gray-100/90",
    "bg-white",
    "bg-white/10",
    "bg-white/20",
    "bg-zinc-900",
    "border-b",
    "border-zinc-800",
    "border-zinc-900",
    "cursor-pointer",
    "data-[checked]:bg-white/20",
    "data-[focus]:outline-1",
    "data-[focus]:outline-white",
    "duration-200",
    "ease-in-out",
    "fixed",
    "focus:outline-none",
    "group",
    "group-data-[checked]:translate-x-5",
    "h-6",
    "h-7",
    "inline-block",
    "left:0",
    "lg:hidden",
    "lg:text-4xl",
    "max-w-[1250px]",
    "opacity-90",
    "outline-1",
    "outline-none",
    "outline-white",
    "px-2",
    "py-0",
    "relative",
    "right:0",
    "ring-0",
    "shadow-lg",
    "size-4",
    "size-5",
    "size-6",
    "text-3xl",
    "top:0",
    "transition",
    "transition-colors",
    "translate-x-0",
    "translate-x-1",
    "translate-x-3",
    "translate-x-4",
    "translate-x-5",
    "w-10",
    "w-11",
    "w-9",
    "w-[100%]",
    "w-full",
    "w-screen",
    "z-10",
  ],
  presets: [sharedConfig],
};

export default config;
