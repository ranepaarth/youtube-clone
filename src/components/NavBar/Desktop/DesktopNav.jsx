import React from "react";
import { NavLink } from "react-router-dom";
import {SearchBar,AppLogo} from '../../routes'
import NavItemsRight from "../NavItemsRight";

const DesktopNav = () => {
  return (
    <nav className="flex items-center justify-between px-2">
      <AppLogo />
      <span>
        <SearchBar />
      </span>
      <NavItemsRight />
    </nav>
  );
};

export default DesktopNav;
