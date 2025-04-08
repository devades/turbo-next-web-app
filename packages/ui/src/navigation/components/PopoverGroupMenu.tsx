"use client";

import {
//   Button,
//   Popover,
//   PopoverButton,
  PopoverGroup,
//   PopoverPanel,
} from "@headlessui/react";
// import Link from "next/link";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { usePathname } from "next/navigation";
import { NavLinks } from "../constants/NavLinks.const";
// import AdminMenu from "./AdminMenu";
// import LoginModal from "../../modals/LoginModal";
import { useState } from "react";
import {
  ThemeState,
  useTheme,
} from "../../hooks/useTheme";
// import { useAuth } from "@/app/(common)/_hooks/useAuth";
// import { AuthState } from "@/app/(common)/_interfaces/auth.interface";

const PopoverGroupMenu = (props: {
  tag: "header" | "footer";
}) => {
  const { tag } = props;
  const { theme }: ThemeState = useTheme();
//   const { user }: AuthState = useAuth();
//   const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <LoginModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
      /> */}
      <PopoverGroup
        className={`${theme} hidden lg:flex lg:gap-x-12 flex flex-row flex-no-wrap`}>
        {NavLinks.public.map((link:any) => {
          return (
            <div
              key={link.name}
              className="flex flex-row flex-nowrap">
       
                  {!link.subLinks && (
                    <a
                      href={link.href}
                      className={
                        // ((link.name !== "Home" &&
                        //   pathname.startsWith(link.href)) ||
                        // (pathname === "/" &&
                        //   link.name === "Home")
                        //   ? "border-b-2 "
                        //   : "border-b-0 ") +
                        "text-sm/6 flex flex-row flex-no-wrap pb-1 outline-none font-semibold subpixel-antialiased text-zinc-900 dark:text-gray-200 font-sans"
                      }>
                      {link.name}
                    </a>
                  )
    
              }
            </div>
          );
        })}

        {/* TODO Base Header Popoover DRY see AdminMenu too */}
        {/* {user &&
          NavLinks.private.map((link: any) => (
            <Popover
              key={link.name}
              className="relative flex flex-row">
              <PopoverButton
                className={
                  (pathname.startsWith(link.href)
                    ? "border-b-2 "
                    : "border-b-0 ") +
                  "text-sm/6 pb-1 flex flex-row items-center outline-none font-semibold subpixel-antialiased text-zinc-900 dark:text-gray-200 font-sans"
                }>
                {link.name}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-5 flex-none text-zinc-900 dark:text-white outline-none"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className={
                  (tag === "header"
                    ? `top-full mt-4`
                    : `bottom-full mb-4`) +
                  ` absolute -left-8 z-10 w-screen max-w-[200px] overflow-hidden bg-gray-200
               ring-1 shadow-lg ring-gray-900/5 dark:ring-indigo-600/45 dark:shadow-indigo-600/35 transition data-closed:translate-y-1 data-closed:opacity-0 
              data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in`
                }>
                <div className="bg-gray-100">
                  {link.subLinks?.length &&
                    link.subLinks.map((item:any) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 p-4 text-sm/6 bg-gray-100 dark:bg-zinc-900 border-b-2 border-b-white dark:border-b-gray-800 hover:bg-gray-200 dark:hover:bg-zinc-900/95">
                        <div className="flex-auto">
                          <PopoverButton
                            as={Link}
                            href={item.href}
                            className="block font-semibold text-gray-900 dark:text-gray-300">
                            {item.name}
                            <span className="absolute inset-0" />
                          </PopoverButton>
                        </div>
                      </div>
                    ))}
                </div>
              </PopoverPanel>
            </Popover>
          ))}

        {user?.id && <AdminMenu user={user} tag={tag} />} */}
      </PopoverGroup>
    </>
  );
};
export default PopoverGroupMenu;
