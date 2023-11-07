import React from "react";
import { Navbar } from "../components/routes";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="p-5 md:px-10 lg:px-14 xl:px-20">{<Outlet />}</main>
    </div>
  );
};

export default RootLayout;
