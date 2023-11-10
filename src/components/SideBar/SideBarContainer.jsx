import React from "react";
import { SideBarSection, useAppContext } from "../routes";
const SideBarContainer = () => {
  const { toggleOpenSidebar, open } = useAppContext();

  const emptyFunction = () => {return}
  return (
    <>
      <section
        className={`fixed w-full h-screen top-0 bottom-0 right-0 bg-black ${
          open ? "bg-opacity-60 z-10" : "bg-opacity-0 -z-50"
        } [transition-property:] [transition-duration:200ms] [transition-timing-function:ease-in-out]`}
        onKeyDown={open ? toggleOpenSidebar : emptyFunction}
        onClick={open ? toggleOpenSidebar : emptyFunction}
      ></section>
      <SideBarSection />
    </>
  );
};

export default SideBarContainer;
