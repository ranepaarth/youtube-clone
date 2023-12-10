import React from "react";
import { AppLogo, SideBarNavItem, useAppContext } from "../routes";

import { useNavigate } from "react-router-dom";
import { categories } from "./SideBarNav/NavItemList.jsx";
import LoadingSideBar from "../LoadingSkeleton/LoadingSideBar";

const SidebarSection = () => {
  const { loading,open, selectCategory, setSelectCategory } = useAppContext();
  const navigate = useNavigate();
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategory(name);
      case "home":
        return setSelectCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };
  // console.log(pageName)
  if(loading) return <LoadingSideBar />
  return (
    <aside
      className={`bg-[#0a0a0a] fixed top-0 left-0 bottom-0 w-fit ${open?"z-20 translate-x-[0px]":"-translate-x-[270px]"}  z-0 transition-all xl:top-14 xl:translate-x-[-16px] cursor-pointer overflow-visible`}
    >
      <span className="xl:hidden block sticky top-0 ml-2 bg-neutral-950">
        <AppLogo />
      </span>
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.title}>
              <SideBarNavItem
                text={item.type === "home" ? "home" : item.title}
                icon={item.icon}
                action={() => {
                  clickHandler(item.title, item.type);
                  navigate("/");
                }}
                className={`${
                  selectCategory === item.title
                    ? "bg-white/[0.15] hover:bg-neutral-400/[0.6]"
                    : ""
                }`}
              />
              {item.divider && <hr className="my-2 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-2 border-white/[0.2]" />
        <div className="text-white opacity-50 text-[12px]">
          TechieTube &copy; 2023{" "}
        </div>
      </div>
    </aside>
  );
};

export default SidebarSection;
