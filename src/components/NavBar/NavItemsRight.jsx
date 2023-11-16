import React from "react";
import { GoSearch } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../routes";
const NavItemsRight = () => {
  const { toggleSearchBarDiv } = useAppContext();
  return (
    <div className="flex items-center gap-3 px-2 right-0 md:pr-4 text-xl transition-all">
      <span
        className="p-2 hover:bg-neutral-600 rounded-full cursor-pointer block md:hidden"
        onKeyDown={toggleSearchBarDiv}
        onClick={toggleSearchBarDiv}
      >
        <GoSearch />
      </span>
      <span className="p-2 cursor-pointer hover:bg-neutral-700 rounded-full">
        <span>
          <RiVideoAddLine />
        </span>
      </span>
      <span className="p-2 cursor-pointer hover:bg-neutral-700 rounded-full">
        <IoMdNotificationsOutline />
      </span>
      <span className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center border-slate-100 cursor-pointer "><p>P</p></span>
    </div>
  );
};

export default NavItemsRight;
