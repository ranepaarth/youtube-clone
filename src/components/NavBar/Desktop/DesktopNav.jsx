import React from "react";
import { NavLink } from "react-router-dom";
import {SearchBar,AppLogo} from '../../routes'

const DesktopNav = () => {
  return (
    <nav className="flex items-center justify-between px-2">
      <AppLogo />
      <span>
        <SearchBar />
      </span>
      <div className="flex items-center gap-x-8 pr-4">
        <NavLink to="/">Feed</NavLink>
        <NavLink to="video/:id">Video</NavLink>
        <NavLink to="channel/:id">Channel</NavLink>
      </div>
    </nav>
  );
};

export default DesktopNav;
