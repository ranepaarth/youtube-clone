import React from 'react'

const LoadingSideBar = () => {
  return (
    <aside
      className={`w-[265px] hidden h-screen xl:block xl:fixed
      xl:top-14 xl:bottom-0
      xl:left-0 transition-all cursor-pointer`}
    >
    </aside>
  )
}

export default LoadingSideBar