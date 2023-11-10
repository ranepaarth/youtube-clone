import React from 'react'

import {BiSolidVideos,GoHomeFill,MdOutlineSubscriptions} from '../Icons/Icons'

const FixedSideBar = () => {
  return (
    <div className="w-20 h-fit bg-[#0a0a0a] fixed top-16 hidden md:block">
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
        </div>
  )
}

export default FixedSideBar