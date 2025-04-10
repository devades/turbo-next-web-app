"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import LogInLogOut from "./LogInLogOut";
import { ThemeState, useTheme } from "@repo/ui/hooks/useTheme";
import {BrandMenu} from "@repo/ui/navigation/components/BrandMenu";
import {ToggleDarkModeSwitch} from "@repo/ui/navigation/components/ToggleDarkModeSwitch";

type Props = {
  tag: "header" | "footer";
};

const Navigation = ({ tag }: Props) => {
  const { theme }: ThemeState = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  return (
    <div className={theme + ` flex w-full`}>
      <nav
        aria-label="Global"
        className={`mx-auto flex w-full max-w-[1250px] items-center justify-between py-4`}>
        <BrandMenu />
        <div className="flex lg:hidden">
          <ToggleDarkModeSwitch />
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
          {/* <PopoverGroupMenu tag={tag} /> */}
        </div>

        <div className="hidden lg:flex lg:justify-end gap-2">
            
          <ToggleDarkModeSwitch />
          <div className="ml-0 lg:ml-6">
          <LogInLogOut />
          </div>
        </div>
      </nav>

      {/* <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      /> */}
    </div>
  );
};
export default Navigation;
