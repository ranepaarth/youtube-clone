import React from "react";
import { AppLogo, SideBarNavigation, useAppContext } from "../routes";
const SidebarSection = () => {
  const {open} = useAppContext()
  return (
    <aside className={`bg-[#0a0a0a] w-[250px] p-2 h-screen fixed z-50 top-0 ${open? "left-0":"-left-full"} transition-all [transition-duration:300ms] [transition-timing-function:ease-in-out]`}>
      <AppLogo />
      <SideBarNavigation />
    </aside>
  );
};

export default SidebarSection;
