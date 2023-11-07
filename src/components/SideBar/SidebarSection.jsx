import React from "react";
import { AppLogo, SideBarNavigation } from "../routes";
const SidebarSection = () => {
  return (
    <aside className="bg-neutral-950 w-[250px] p-2 h-screen fixed z-50 top-0">
      <AppLogo />
      <SideBarNavigation />
    </aside>
  );
};

export default SidebarSection;
