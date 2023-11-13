import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [showSearchDiv, setShowSearchDiv] = useState(false);
  const [progress,setProgress] = useState(0)
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategory, setSelectCategory] = useState(false);

  const toggleOpenSidebar = () => {
    setOpen(!open);
  };

  const toggleSearchBarDiv = () => {
    setShowSearchDiv(!showSearchDiv);
  };

  useEffect(() => {
    fetchSelectedCategoryData(selectCategory);
  },[selectCategory]);
  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchData(`search/?q=${query}`).then(({contents}) => {
      console.log(contents);
      setSearchResults(contents)
    });
    setLoading(false);
  };
  return (
    <AppContext.Provider
      value={{
        open,
        toggleOpenSidebar,
        toggleSearchBarDiv,
        showSearchDiv,
        progress,
        setProgress,
        loading,
        setLoading,
        searchResults,
        setSelectCategory,
        selectCategory,
        fetchSelectedCategoryData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
