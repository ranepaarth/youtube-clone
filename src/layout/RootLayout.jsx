import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SideBarContainer, useAppContext } from "../components/routes";

import LoadingBar from "react-top-loading-bar";

const RootLayout = () => {
  const {open,progress,setProgress} = useAppContext()
  return (
    <div>
      <Navbar setProgress={setProgress}/>
      <LoadingBar color="red" height='2px' progress={progress}/>
      <div>
        <SideBarContainer/>
      </div>
      <main>{<Outlet setProgress={setProgress}/>}</main>
    </div>
  );
};

export default RootLayout;
