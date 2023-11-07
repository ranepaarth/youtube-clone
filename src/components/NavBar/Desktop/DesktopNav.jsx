import React from "react";
import { NavLink } from "react-router-dom";
import {SearchBar,AppLogo} from '../../routes'

const DesktopNav = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-2 bg-neutral-900">
      <AppLogo />
      <NavLink to="search/:searchTerm">
        <SearchBar />
      </NavLink>
      <div className="flex items-center gap-x-8">
        <NavLink to="/">Feed</NavLink>
        <NavLink to="video/:id">Video</NavLink>
        <NavLink to="channel/:id">Channel</NavLink>
      </div>
    </nav>
  );
};

export default DesktopNav;
