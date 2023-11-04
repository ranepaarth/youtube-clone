import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Feed</NavLink>
      <NavLink to="video/:id">Video</NavLink>
      <NavLink to="channel/:id">Channel</NavLink>
      <NavLink to="search/:searchTerm">Search</NavLink>
    </div>
  );
};

export default Navbar;
