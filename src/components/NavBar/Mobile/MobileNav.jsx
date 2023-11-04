import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { NavLink } from "react-router-dom";
import AppLogo from "../AppLogo";
import SearchBarDiv from "./SearchBarDiv";

const MobileNav = () => {
  const [showSearchDiv, setShowSearchDiv] = useState(false);

  const toggleSetShowSearchDiv = () => {
    setShowSearchDiv(!showSearchDiv);
    console.log(showSearchDiv);
  };
  return (
    <>
      {showSearchDiv ? (
        <SearchBarDiv toggleSetShowSearchDiv={toggleSetShowSearchDiv} />
      ) : (
        <nav className="flex justify-between items-center px-8 py-2 border-b">
          <AppLogo />
          <div className="flex items-center gap-3">
            <span
              className="p-2 hover:bg-neutral-600 rounded-full cursor-pointer"
              onKeyDown={toggleSetShowSearchDiv}
              onClick={toggleSetShowSearchDiv}
            >
              <GoSearch className="text-xl" />
            </span>
            <NavLink to="/">Feed</NavLink>
            <NavLink to="video/:id">Video</NavLink>
            <NavLink to="channel/:id">Channel</NavLink>
          </div>
        </nav>
      )}
    </>
  );
};

export default MobileNav;
