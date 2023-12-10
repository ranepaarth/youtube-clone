import React from 'react'

import {BiSolidVideos,GoHomeFill,MdOutlineSubscriptions} from '../Icons/Icons'
import { useAppContext } from '../routes'
import { useLocation } from 'react-router-dom'

const FixedSideBar = () => {
  const {loading} = useAppContext()
  const {pathname} = useLocation()
  // console.log(pathname)
  // if(pathname !== '/') return ""
  return (
    <div className="w-20 h-64 bg-[#0a0a0a] fixed hidden md:block xl:hidden left-0">
      {loading?"":
          <span className="flex flex-col justify-around h-full items-center text-xs cursor-pointer tracking-tighter">
            <span className="flex flex-col items-center justify-center gap-2 my-2 mx-2 py-4 hover:bg-neutral-800 w-[80%] rounded-lg">
              <p className="text-2xl"><GoHomeFill /></p>
              <p>Home</p>
            </span>
            <span className="flex flex-col items-center justify-center gap-2 my-2 py-4 hover:bg-neutral-800 w-[80%] rounded-lg">
              <p className="text-2xl"><MdOutlineSubscriptions /></p>
              <p className="">Subscriptions</p>
            </span>
            <span className="flex flex-col items-center justify-center gap-2 my-2 py-4 hover:bg-neutral-800 w-[80%] rounded-lg">
              <p className="text-2xl"><BiSolidVideos/></p>
              <p>You</p>
            </span>
          </span>
          }
        </div>
  )
}

export default FixedSideBar