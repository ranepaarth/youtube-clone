import React from "react";
import { AppLogo, SideBarNavItem, useAppContext } from "../routes";

import { useNavigate } from "react-router-dom";
import { categories } from "./SideBarNav/NavItemList.jsx";
import LoadingSideBar from "../LoadingSkeleton/LoadingSideBar";

const SidebarSection = ({ isXl }) => {
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
  if(loading) return <LoadingSideBar />
  return (
    <aside
      className={`bg-[#0a0a0a] w-fit fixed top-0 left-0 bottom-0 h-full overflow-y-auto xl:block xl:fixed
      xl:top-14 xl:bottom-0 ${open?"fixed top-0 bottom-0 left-0 translate-x-[-16px] z-20 px-3 h-screen":""}
      translate-x-[-300px] xl:translate-x-[-16px] transition-all cursor-pointer`}
    >
      <span className="xl:hidden block sticky top-0 ml-2">
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
