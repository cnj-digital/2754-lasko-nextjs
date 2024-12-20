"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Chevron from "../Icons/Chevron";
import cx from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages } from "@/data/general";

export default function LangMenu({ className }: { className?: string }) {
  const pathname = usePathname();
  const currentLang = pathname?.split("/")[1];
  const lang =
    currentLang === "en" || currentLang === "si" ? currentLang : "si";

  return (
    <Menu as="div" className={cx(" group z-10 relative ", className)}>
      <MenuButton className="text-white rounded-xl group-data-[open]:bg-opacity-50  lg:bg-black lg:bg-opacity-30 hover:bg-opacity-50 hover:text-gray-300 lg:px-6 py-2 flex items-center justify-between lg:gap-2 font-medium ">
        <span className="flex-shrink-0 font-semibold uppercase lg:font-medium text-2xl lg:text-xl min-w-8 lg:min-w-0">
          {lang}
        </span>
        <Chevron className="text-white group-data-[open]:-rotate-90 transition-transform size-6 rotate-90" />
      </MenuButton>
      <MenuItems
        modal={false}
        className="absolute mt-2 overflow-hidden rounded-xl text-xl -left-3 lg:left-auto lg:right-0 divide-y-1 divide-white w-[100px] lg:w-[142px]"
      >
        {languages.map((language) => (
          <MenuItem key={language}>
            <Link
              href={`/${language}`}
              className={cx(
                "block text-white px-4 py-2 bg-black uppercase bg-opacity-50 lg:bg-opacity-30 text-2xl lg:text-xl hover:bg-opacity-50 border-b-white border-opacity-50 w-full text-left font-medium",
                language === lang ? " lg:bg-opacity-50 pointer-events-none" : ""
              )}
            >
              {language}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
