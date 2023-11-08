import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SideBarContainer, useAppContext } from "../components/routes";

const RootLayout = () => {
  const {open} = useAppContext()
  return (
    <div>
      <Navbar />
      <div>
        <SideBarContainer/>
      </div>
      <main>{<Outlet />}</main>
    </div>
  );
};

export default RootLayout;
