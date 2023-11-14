import React from "react";
import { Link } from "react-router-dom";
import { Hamburger, Logo } from "../routes";
const AppLogo = () => {
  return (
    <div className="flex items-center">
      <Hamburger />
      <Link to="/" className="flex items-center p-2 gap-2 bg-[#0a0a0a]">
        <span className="flex items-center gap-1">
          <img src={Logo} alt="TechieTube" />
          <span className="text-xl font-bold tracking-[-0.08rem] md:block md:visible">
            TechieTube
          </span>
        </span>
      </Link>
    </div>
  );
};

export default AppLogo;
