import React from "react";
import { SideBarSection, useAppContext } from "../routes";
const SideBarContainer = () => {
  const { toggleOpenSidebar } = useAppContext();
  return (
    <>
      <section
        className="fixed w-full h-screen top-0 bottom-0 right-0 bg-opacity-60 bg-black z-10"
        onKeyDown={toggleOpenSidebar}
        onClick={toggleOpenSidebar}
      ></section>
      <SideBarSection />
    </>
  );
};

export default SideBarContainer;
