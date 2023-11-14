import React from "react";
import { FiMenu } from "react-icons/fi";
import { useAppContext } from "../routes";
import { useLocation } from "react-router-dom";
const Hamburger = () => {
    const {toggleOpenSidebar} = useAppContext()
    const {pathname} = useLocation()
    const pageName = pathname.split("/").filter(item=>item!=="")
  return (
    <span
      className={`mr-2 text-2xl text-neutral-300 rounded-full p-2 hover:bg-neutral-600  block cursor-pointer ${pageName[0] == 'video' ?"block":""} ${pathname == '/'?"xl:hidden":"block"}`}
      
      onKeyDown={toggleOpenSidebar}
      onClick={toggleOpenSidebar}
    >
      <p className={``}><FiMenu /></p>
    </span>
  );
};

export default Hamburger;
