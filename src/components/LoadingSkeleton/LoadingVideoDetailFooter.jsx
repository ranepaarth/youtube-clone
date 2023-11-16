import React from 'react'

const LoadingVideoDetailFooter = () => {
  return (
    <footer className='flex flex-col mx-12 lg:mx-6 gap-3 animate-pulse'>
        <div className='bg-neutral-700 rounded-full w-[80%] h-6'>
        </div>
        <div className='flex justify-between items-center'>
            <span className='bg-neutral-700 h-6 w-[40%] rounded-full'></span>
            <div className='flex gap-6'>
                <p className='h-6 w-6 bg-neutral-700 rounded-full'></p>
                <p className='h-6 w-6 bg-neutral-700 rounded-full'></p>
                <p className='h-6 w-6 bg-neutral-700 rounded-full'></p>
            </div>
        </div>
        <hr className='border-neutral-700 my-2'/>
        <div className='flex items-center justify-between'>
            <span className='flex items-start gap-4'>
                <p className='w-12 h-12 bg-neutral-700 rounded-full'></p>
                <span className='flex flex-col gap-2'>
                    <p className='w-60 h-6 bg-neutral-700 rounded-full'></p>
                    <p className='w-60 h-6 bg-neutral-700 rounded-full'></p>
                </span>
            </span>
            <span className='w-32 h-10 bg-neutral-700 rounded-xl'></span>
        </div>
    </footer>
  )
}

export default LoadingVideoDetailFooter