import React from "react";
import { RiVideoAddLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { GoSearch } from "../../Icons/Icons";
import { AppLogo, SearchBar, useAppContext } from "../../routes";
import NavItemsRight from "../NavItemsRight";

const MobileNav = () => {
  const { toggleSearchBarDiv, showSearchDiv } = useAppContext();
  // console.log(toggleSearchBarDiv)
  return (
    <>
      {showSearchDiv ? (
        <SearchBar />
      ) : (
        <nav className="flex w-full justify-between items-center px-2 ">
          <AppLogo />
          {/* <div className="flex items-center gap-3 px-2 right-0">
            <span
              className="p-2 hover:bg-neutral-600 rounded-full cursor-pointer"
              onKeyDown={toggleSearchBarDiv}
              onClick={toggleSearchBarDiv}
            >
              <GoSearch className="text-xl" />
            </span>
            <NavLink to="/">
              <span>
                <RiVideoAddLine className="text-xl" />
              </span>
            </NavLink>
            <NavLink to="video/:id">Video</NavLink>
            <NavLink to="channel/:id">Channel</NavLink>
          </div> */}
          <NavItemsRight />
        </nav>
      )}
    </>
  );
};

export default MobileNav;
