"use client";

import { ThemeState, useTheme } from "../../hooks/useTheme";

export function BrandMenu() {
  const { theme }: ThemeState = useTheme();
  return (
    <div className={theme + ` flex flex-col max-w-md`}>
      <a href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="h-8 w-auto"
        />
        {/* <div
          className={`flex flex-col flex-wrap items-center justify-center 
        py-3 px-3 rounded-lg bg-white dark:bg-zinc-900 border dark:border-zinc-800 mr-32`}>
          <p className="text-[.65rem] font-medium text-gray-400 text-center text-nowrap font-sans">
            Solutions Architect | Software Engineering
          </p>
          <p className="text-[.65rem]  text-gray-400">
            <span className="font-bold text-gray-300">
              ©
            </span>
            <span className="pl-1 font-sans">
              Lara Sweeney 2025
            </span>
          </p>
        </div> */}
      </a>
    </div>
  );
};
