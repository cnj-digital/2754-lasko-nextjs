import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Chevron from "../Icons/Chevron";
import cx from "classnames";

export default function LangMenu({ className }: { className?: string }) {
  return (
    <Menu
      as="div"
      className={cx(
        "  lg:bg-black lg:bg-opacity-30 hover:bg-opacity-50 rounded-xl relative ",
        className
      )}
    >
      <MenuButton className="text-white hover:text-gray-300 lg:px-6 py-2 flex items-center justify-between gap-1 lg:gap-2 font-medium ">
        <span className="flex-shrink-0 font-semibold lg:font-medium text-2xl lg:text-xl min-w-8">
          SI
        </span>
        <Chevron className="text-white transition-transform size-6 rotate-90" />
      </MenuButton>
      <MenuItems
        modal={false}
        className="absolute mt-2 overflow-hidden rounded-xl text-xl -left-3 lg:right-0 divide-y-1 w-[100px] lg:w-[142px]"
      >
        <MenuItem>
          <button className="block text-white px-4 py-2 border-b bg-black bg-opacity-50 lg:bg-opacity-30 text-2xl lg:text-xl hover:bg-opacity-50 border-b-white border-opacity-50 w-full text-left font-medium">
            SI
          </button>
        </MenuItem>
        <MenuItem>
          <button className="block text-white px-4 py-2 bg-black bg-opacity-50 lg:bg-opacity-30 text-2xl lg:text-xl hover:bg-opacity-50 border-b-white border-opacity-50 w-full text-left font-medium">
            EN
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
