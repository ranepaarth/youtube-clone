import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useAppContext } from "../../routes";
import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { BsFillMicFill } from "react-icons/bs";
const SearchBar = () => {
  const { toggleSearchBarDiv,fetchSelectedCategoryData } = useAppContext();
  let [searchQuery,setSearchQuery] = useState('')
  const navigate = useNavigate()

  const searchQueryHandler = (event) => {
    if((event?.key === 'Enter' || event === 'searchButton') && searchQuery.length > 0) {
      fetchSelectedCategoryData(searchQuery)
      navigate(`/search/${searchQuery}`)
      toggleSearchBarDiv()
      setSearchQuery('')
      console.log(event)
    }
  }
  return (
    <div className="flex items-center justify-evenly py-2">
      <span
        className="text-xl hover:bg-neutral-600 p-2 rounded-full cursor-pointer md:hidden block"
        onClick={toggleSearchBarDiv}
        onKeyDown={toggleSearchBarDiv}
      >
        <IoArrowBackOutline />
      </span>
      <div className="group flex items-center">
        <span className="rounded-l-full flex items-center" onSubmit={() => {}}>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent pl-4 pb-[0.2rem] border border-neutral-600 rounded-l-full overflow-visible h-10 w-[50vw] md:w-[30vw] outline-none focus:border-blue-500"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </span>
        <button
          className="border border-neutral-600 rounded-r-full px-1 bg-neutral-600 w-16 flex items-center justify-center h-10 cursor-pointer"
          type="submit"
          onClick={searchQueryHandler}
        >
          <GoSearch className="text-xl" />
        </button>
      </div>
      <span className="text-xl p-2 hover:bg-neutral-600 rounded-full cursor-pointer md:hidden block">
        <BsFillMicFill />
      </span>
    </div>
  );
};

export default SearchBar;
