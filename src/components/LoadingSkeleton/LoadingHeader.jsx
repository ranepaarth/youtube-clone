import React from "react";
import { FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { SearchBar } from "../routes";
const LoadingHeader = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="min-w-full flex items-center justify-between px-2">
        <span className="px-2 text-2xl cursor-pointer">
          <FiMenu />
        </span>
        <div className="block max-sm:hidden">
          <SearchBar />
        </div>
        <span className="flex items-center gap-3 px-2">
          <p className="p-4 rounded-full bg-neutral-600 cursor-pointer animate-pulse"></p>
          <p className="p-4 rounded-full bg-neutral-600 cursor-pointer animate-pulse"></p>
          <p className="p-4 rounded-full bg-neutral-600 cursor-pointer animate-pulse"></p>
        </span>
      </nav>

      {pathname !== "/" ? (
        ""
      ) : (
        <>
          <hr className="border-white/[0.15]" />
          <div className="w-full h-14"></div>
          <hr className="border-white/[0.15]" />
        </>
      )}
    </>
  );
};

export default LoadingHeader;
