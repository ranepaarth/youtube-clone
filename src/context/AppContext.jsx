import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [showSearchDiv, setShowSearchDiv] = useState(false);

  const toggleOpenSidebar = () => {
    setOpen(!open);
  };

  const toggleSearchBarDiv = () => {
    setShowSearchDiv(!showSearchDiv)
  };
  return (
    <AppContext.Provider value={{ open, toggleOpenSidebar ,toggleSearchBarDiv,showSearchDiv}}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
