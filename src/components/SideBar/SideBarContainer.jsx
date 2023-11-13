import React from "react";
import { useAppContext } from "../routes";
const SideBarContainer = () => {
  const { toggleOpenSidebar, open } = useAppContext();

  const emptyFunction = () => {
    return;
  };
  return (
    <div
      className={`fixed w-full h-screen top-0 bottom-0 right-0 bg-black ${
        open ? "bg-opacity-60 z-10" : "bg-opacity-0 -z-50"
      } transition-all`}
      onKeyDown={open ? toggleOpenSidebar : emptyFunction}
      onClick={open ? toggleOpenSidebar : emptyFunction}
    ></div>
  );
};

export default SideBarContainer;
