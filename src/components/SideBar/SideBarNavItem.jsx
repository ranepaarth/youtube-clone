import React from 'react'

const SideBarNavItem = ({icon,text,className,action}) => {
  return (
    <span className={'flex items-center gap-5 px-3 py-2 hover:bg-[#161616] rounded-md [transition-timing-function:ease] [transition-duration:300ms] hover:bg-white/[0.15]' + className} onClick={action} onKeyDown={action}>
      <p className='text-xl'>{icon}</p>
      <p className='capitalize'>{text}</p>
    </span>
  )
}

export default SideBarNavItem