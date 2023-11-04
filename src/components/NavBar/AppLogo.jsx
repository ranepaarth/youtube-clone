import React from 'react'
import Logo from "../../assets/youtube-icon-svgrepo-com.svg";
import { Link } from 'react-router-dom';
const AppLogo = () => {
  return (
    <Link
    to="/"
    className='flex items-center gap-1'
  >
    <img src={Logo} alt="logo" />
    <span className='text-xl font-bold tracking-tight md:block md:visible'
    >
      YouTube
    </span>
  </Link>
  )
}

export default AppLogo