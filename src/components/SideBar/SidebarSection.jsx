import React from "react";
import Item from "../NavBar/CategoryCarousel/Item";
import { AppLogo, SideBarNavigation, useAppContext } from "../routes";
const SidebarSection = ({isXl}) => {
  const { open } = useAppContext();
  return (
    <aside
      className={`bg-[#0a0a0a] w-[250px] p-2 h-fit absolute z-50 top-0 ${
        open ? "left-0" : "-left-full"
      }
      xl:translate-x-full
       transition-all [transition-duration:300ms] [transition-timing-function:ease-in-out]`}
    >
      <span className="fixed w-60 top-0"><AppLogo /></span>
      <SideBarNavigation />
      <span className="flex flex-col overflow-y-auto mt-16 gap-3 sidebar">
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
        <Item  Item={'Home'}/>
        <Item  Item={'Subscriptions'}/>
      </span>
    </aside>
  );
};

export default SidebarSection;
