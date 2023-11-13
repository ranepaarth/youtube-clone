import React from "react";
import { BiCheck } from "react-icons/bi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";

import {abbreviateNumber} from 'js-abbreviation-number'

const VideoCard = ({ video }) => {
  // console.log(video)
  return (
    <article className="flex flex-col  mb-8 gap-3">
      <Link to={`/video/${video?.videoId}`}>
        <div className="h-fit">
          <img
            src={video?.thumbnails[0]?.url}
            alt=""
            className="aspect-video w-full rounded-xl hover:rounded-none transition-all [transition-duration:400ms] p-[0.02rem] hover:p-0"
          />
        </div>
        <div className="flex items-start gap-3 mt-3">
          <span className="flex items-center h-10 w-10 overflow-hidden rounded-full">
            <img
              src={video?.author?.avatar[0]?.url}
              alt=""
              className="h-full w-full object-cover "
            />
          </span>
          <span className="flex flex-col font-medium">
            <div className="flex items-center justify-between">
              <p className="line-clamp-2 w-60">{video?.title}</p>
            </div>
            <span className="text-sm text-neutral-500">
              <span className="flex items-center gap-2 mt-1">
                <p>{video?.author?.title}</p>
                <p className="flex items-baseline bg-neutral-400 text-black rounded-full">
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" &&
                    <BiCheck />
                  }
                </p>
              </span>
              <span className="flex items-center gap-[0.15rem]">
                {video?.stats?.views<10000 ? <p className="capitalize">{abbreviateNumber(video?.stats?.views,1,{symbols:["", "K", "M", "G", "T", "P", "E"],padding:false})} views</p>:<p className="capitalize">{abbreviateNumber(video?.stats?.views,{padding:false})} views</p>}
                
                <p>•</p>
                <p>{video?.publishedTimeText}</p>
              </span>
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
};

export default VideoCard;
/*<span className="text-xl p-1 rounded-full hover:bg-neutral-700" ><HiOutlineDotsVertical className=""/></span> */
