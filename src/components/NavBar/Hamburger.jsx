import React from "react";
import { FiMenu } from "react-icons/fi";
import { useAppContext } from "../routes";
const Hamburger = () => {
    const {toggleOpenSidebar} = useAppContext()
  return (
    <span
      className="mr-2 text-2xl text-neutral-300 rounded-full p-2 hover:bg-neutral-600"
      onKeyDown={toggleOpenSidebar}
      onClick={toggleOpenSidebar}
    >
      <FiMenu />
    </span>
  );
};

export default Hamburger;
