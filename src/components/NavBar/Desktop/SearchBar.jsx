import React from "react";
import { GoSearch } from "react-icons/go";
const SearchBar = () => {
  return (
    <div className="flex rounded-l-full">
      <span className="rounded-l-full" onSubmit={() => {}}>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent pl-4 pb-[0.2rem] border border-neutral-600 rounded-l-full outline-none overflow-visible h-10 w-[30vw] lg:w-[40vw]"
          onChange={() => {}}
        />
      </span>
      <span className=" text-2xl border border-neutral-600 rounded-r-full px-1 bg-neutral-600 w-16 flex items-center justify-center h-10">
        <GoSearch />
      </span>
    </div>
  );
};

export default SearchBar;
