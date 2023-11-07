import React from "react";
import {IoArrowBackOutline,GoSearch,BsFillMicFill} from '../../Icons/Icons'
import { useAppContext } from "../../routes";
export const SearchBarDiv = () => {
  const { toggleSearchBarDiv } = useAppContext();
  return (
    <div className="flex items-center justify-evenly py-2">
      <span
        className="text-xl hover:bg-neutral-600 p-2 rounded-full cursor-pointer"
        onClick={toggleSearchBarDiv}
        onKeyDown={toggleSearchBarDiv}
      >
        <IoArrowBackOutline />
      </span>
      <div className="flex items-center">
        <span className="rounded-l-full flex items-center" onSubmit={() => {}}>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent pl-4 pb-[0.2rem] border border-neutral-600 rounded-l-full overflow-visible h-10 w-[50vw] outline-none focus:border-blue-500"
            value=""
            onChange={() => {}}
          />
        </span>
        <button
          className="border border-neutral-600 rounded-r-full px-1 bg-neutral-600 w-16 flex items-center justify-center h-10 cursor-pointer"
          type="submit"
        >
          <GoSearch className="text-xl" />
        </button>
      </div>
      <span className="text-xl p-2 hover:bg-neutral-600 rounded-full cursor-pointer ">
        <BsFillMicFill />
      </span>
    </div>
  );
};

export default SearchBarDiv;
