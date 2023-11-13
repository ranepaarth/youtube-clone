import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  FixedSideBar,
  Navbar,
  SideBarContainer,
  useAppContext,
} from "../components/routes";

import LoadingBar from "react-top-loading-bar";

const RootLayout = () => {
  const { open, progress, setProgress } = useAppContext();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-[#0a0a0a] select-none z-10">
        <Navbar setProgress={setProgress} />
        <div className="lg:hidden block">
          <FixedSideBar />
        </div>
      </div>
      <LoadingBar color="red" height="2px" progress={progress} />
      <div>
        <SideBarContainer />
      </div>
      {/* <main className="h-[200vh] mt-32 mx-3 mb-3 md:ml-28 px-6  bg-neutral-800 ">{<Outlet setProgress={setProgress} />}</main> */}
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
