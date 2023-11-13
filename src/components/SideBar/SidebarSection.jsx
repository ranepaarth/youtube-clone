import React from "react";
import { AppLogo, SideBarNavItem, useAppContext } from "../routes";

import { useNavigate } from "react-router-dom";
import { categories } from "./SideBarNav/NavItemList.jsx";

const SidebarSection = ({ isXl }) => {
  const { open, selectCategory, setSelectCategory } = useAppContext();
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
  return (
    <aside
      className={`bg-[#0a0a0a] w-fit absolute h-full overflow-y-auto lg:block lg:fixed
      lg:top-14 
      lg:bottom-0 ${open?"md:absolute md:top-0 md:bottom-0 md:left-0 md:translate-x-[-16px] md:z-20 px-3":""}
      translate-x-[-269px] lg:translate-x-[-16px] transition-all cursor-pointer`}
    >
      <span className="lg:hidden block sticky top-0 ml-2">
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
