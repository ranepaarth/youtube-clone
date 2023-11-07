import React from "react";
import { Link } from "react-router-dom";
import { Logo, Hamburger } from '../routes'
const AppLogo = () => {
  
  return (
    <Link to="/" className="flex items-center gap-2">
      <Hamburger />
      <span className="flex items-center gap-1">
        <img src={Logo} alt="TechieTube" />
        <span className="text-xl font-bold tracking-[-0.08rem] md:block md:visible">
          TechieTube
        </span>
      </span>
    </Link>
  );
};

export default AppLogo;
