"use client";

import {Navigation} from "../navigation/components/Navigation";
import { useTheme } from "../hooks/useTheme";

export function Header() {
  const { theme } = useTheme();
  console.log(theme)

  return (
    <div>
      <header
        className={
          (theme === "dark"
            ? `border-zinc-800 bg-zinc-900`
            : `bg-gray-100/90`) +
          ` px-2 backdrop-blur-lg border-b py-0 fixed top:0 left:0 right:0 z-10 w-[100%] opacity-90`
        }>
        <Navigation tag="header" />
      </header>
    </div>
  );
}
