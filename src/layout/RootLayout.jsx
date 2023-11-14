import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  FixedSideBar,
  Navbar,
  SideBarContainer,
  useAppContext,
  LoadingHeader
} from "../components/routes";

import LoadingBar from "react-top-loading-bar";

const RootLayout = () => {
  const { loading, open, progress, setProgress } = useAppContext();
  const { pathname } = useLocation();
  console.log(loading);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-[#0a0a0a] select-none z-10">
        {loading ? <LoadingHeader /> : <Navbar setProgress={setProgress} />}
        <div className="xl:hidden block">
         <FixedSideBar />
        </div>
      </div>
      <LoadingBar color="red" height="2px" progress={progress} />
      <div>
        <SideBarContainer />
      </div>
      {pathname === "/" || pathname === "/video" ? (
        <main className="mx-2 scroll-smooth overflow-y-hidden">
          {<Outlet setProgress={setProgress} />}
        </main>
      ) : (
        <main className="">{<Outlet />}</main>
      )}
    </>
  );
};

export default RootLayout;
