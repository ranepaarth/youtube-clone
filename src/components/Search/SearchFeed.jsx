import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utils/api";
import { Categories, SideBarSection, useAppContext } from "../routes";
import SearchResultSection from "./SearchResultSection";
const SearchFeed = () => {
  const { loading, setLoading,searchResults } = useAppContext();
  const [result, setResult] = useState([]);
  const {searchTerm} = useParams();
console.log(searchTerm)
  const fetchSearchResult = () => {
    setLoading(false);
    fetchData(`search/?q=${searchTerm}`).then((res) => {
      setResult(res.contents);
      console.log(res)
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  };

  useEffect(() => {
    fetchSearchResult();
  }, [searchTerm]);
  return (
    <>
      <div className="fixed md:top-14 left-0 right-0 z-10">
        <Categories />
      </div>
      <div className={`flex flex-row h-full mt-12 md:mx-0 max-sm:mx-2 bg-neutral-800`}>
        <SideBarSection />
        <SearchResultSection result={result}/>
      </div>
    </>
  );
};

export default SearchFeed;
