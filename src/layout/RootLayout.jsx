import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SideBarContainer, useAppContext } from "../components/routes";

const RootLayout = () => {
  const {open} = useAppContext()
  return (
    <div>
      <Navbar />
      <div className={open?"block":"hidden"}>
        <SideBarContainer/>
      </div>
      <main className="p-5 md:px-10 lg:px-14 xl:px-20">{<Outlet />}</main>
    </div>
  );
};

export default RootLayout;
