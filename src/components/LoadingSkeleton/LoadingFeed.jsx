import React from 'react'
import {LoadingSideBar,LoadingFeedSection} from '../routes'
const LoadingFeed = () => {
  return (
    <main className='flex flex-row items-start justify-center gap-1 h-screen md:ml-20 xl:ml-[16.5rem] max-sm:mt-32 mt-36  xl:w-[calc(100%-265px)] md:mx-0 max-sm:mx-2'>
        <LoadingSideBar />
        <LoadingFeedSection />
    </main>
  )
}

export default LoadingFeed