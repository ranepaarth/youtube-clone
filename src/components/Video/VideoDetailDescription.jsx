import React, { useState } from 'react'
import { abbreviateNumber } from "js-abbreviation-number";
import { useAppContext } from '../routes';
const VideoDetailDescription = ({description,views}) => {
  const {loading} = useAppContext()
    const [height, setHeight] = useState(false);
    const toggleDescriptionHeight = () => {
        setHeight(!height);
        console.log('clicked')
      };
      if(loading) return
  return (
    <div
            className={`mx-6 lg:mx-2 bg-neutral-700 rounded-lg px-5 py-2 mb-2 ${
              height ? "overflow-visible cursor-default" : "overflow-hidden h-20 hover:bg-neutral-600 cursor-pointer"
            } relative`}
          >
            <span className="font-semibold">
              {abbreviateNumber(views)} views
            </span>
            <span className="font-medium">
              {description?.map((item,index) => {
                return <p key={index}>{item}</p>;
              })}
            </span>
            <p
              className="absolute bottom-0  cursor-pointer right-2 bg-gradient-to-l from-90% pl-2 from-neutral-700 focus:bg-neutral-600 font-semibold transition-all"
              onKeyDown={ toggleDescriptionHeight}
              onClick={ toggleDescriptionHeight}
            >
              {height?"Show Less":"...More"}
            </p>
          </div>
  )
}

export default VideoDetailDescription