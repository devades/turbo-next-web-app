"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
// import BrandMenu from "./BrandMenu";
import PopoverGroupMenu from "./PopoverGroupMenu";
// import LogInLogOut from "./LogInLogOut";
// import MobileMenu from "./MobileMenu";
// import { PageWidth } from "../../constants/PageGlobal.const";
// import ToggleSwitch from "../../ToggleSwitch.component";
import {
  ThemeState,
  useTheme,
} from "../../hooks/useTheme";

type Props = {
  tag: "header" | "footer";
};
export function Navigation({ tag }: Props) {
  const { theme }: ThemeState = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  return (
    <div className={theme + ` flex`}>
      <nav
        aria-label="Global"
        // max-w-[${PageWidth}]
        className={`mx-auto flex flex-row w-full items-center justify-between py-4`}>
            <div className="flex max-w-[1250px]">
        {/* <BrandMenu /> */}
        <div className="flex lg:hidden">
          {/* <ToggleSwitch /> */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`inline-flex items-center justify-center rounded-md p-2 text-zinc-900 dark:text-white`}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="size-6"
            />
          </button>
        </div>

        <div className="hidden lg:flex lg:justify-between">
          <PopoverGroupMenu tag={tag} />
        </div>

        {/* <div className="hidden lg:flex  lg:justify-end">
          <ToggleSwitch />
          <LogInLogOut />
        </div> */}
        </div>
      </nav>

      {/* <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      /> */}
    </div>
  );
};
