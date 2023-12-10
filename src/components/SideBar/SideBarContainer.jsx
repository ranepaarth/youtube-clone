import React from "react";
import { useLocation } from "react-router-dom";
import { AppLogo, SideBarSection, useAppContext } from "../routes";
const SideBarContainer = () => {
  const { toggleOpenSidebar, open } = useAppContext();

  const emptyFunction = () => {
    return;
  };
  const { pathname } = useLocation();
  const pageName = pathname.split("/").filter((item) => item !== "");
  // console.log(open, pathname)
  return (
    <>
      <div
        className={`fixed w-full h-screen top-0 bottom-0 right-0 bg-black ${
          open ? "bg-opacity-60 z-20" : "bg-opacity-0 -z-50"
        } transition-all`}
        onKeyDown={open ? toggleOpenSidebar : emptyFunction}
        onClick={open ? toggleOpenSidebar : emptyFunction}
      ></div>
      {pageName[0] == "video" ? (
        <div className={open?"block ":"hidden"}>
          <div className="fixed top-0 z-20 bg-[#0a0a0a] w-fit p-2"><AppLogo /></div>
          <SideBarSection />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SideBarContainer;
