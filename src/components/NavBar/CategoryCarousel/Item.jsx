import React from 'react'

const Item = ({Item}) => {
  return (
    <span className='tab px-3 py-1 bg-neutral-800 hover:bg-[#545454] rounded-md whitespace-nowrap [transition-duration:300ms] [transition-timing-function:ease]'>{Item}</span>
  )
}

export default Item