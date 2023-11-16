import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { BiCheck } from "react-icons/bi";
import { PiThumbsUpThin } from "react-icons/pi";
import { useAppContext } from "../routes";
import LoadingVideoDetailFooter from "../LoadingSkeleton/LoadingVideoDetailFooter";

const VideoDetailsFooter = ({
  title,
  avatar,
  channelName,
  subscribers,
  likes,
  verified,
}) => {
  const {loading} = useAppContext()
  if(loading) return <LoadingVideoDetailFooter />
  return (
    <>
      <h2 className="text-xl mx-6 lg:mx-2 font-medium">{title}</h2>
      <div className="flex flex-col md:flex-row md:justify-between grow w-full mx-6 lg:mx-2 transition-all gap-3">
        <span className="avatar+channel+subscribers flex items-center gap-3">
          <img src={avatar} className="avatar w-12 h-12 rounded-full" />
          <span className="channel+subscriber flex flex-col font-medium">
            <span className="flex gap-2 items-center">
              <p>{channelName}</p>
              <p className="bg-neutral-400 text-black rounded-full text-sm">
                {verified && <BiCheck />}
              </p>
            </span>
            <small className="text-white/40 capitalize">{subscribers}</small>
          </span>
          <span className="font-medium flex gap-5 h-10">
            <button className="border py-2 px-4 rounded-full hover:bg-neutral-700 border-neutral-700">
              Join
            </button>
            <button className="bg-white text-neutral-800 px-3 rounded-full hover:bg-white/90">
              Subscribe
            </button>
          </span>
        </span>
        <span className="flex bg-neutral-800 items-center rounded-full w-fit h-fit md:mr-12">
          <button className="text-2xl  capitalize hover:bg-neutral-700 py-2 rounded-l-full px-4">
            <span className="flex items-center gap-2">
              <PiThumbsUpThin />
              <p className="font-medium text-base">{abbreviateNumber(likes)}</p>
            </span>
          </button>
          <p className="h-6 border-r border-white/[0.4]"></p>
          <button className="text-2xl capitalize hover:bg-neutral-700 py-2 rounded-l-full px-4 rotate-180">
            <PiThumbsUpThin />
          </button>
        </span>
      </div>
    </>
  );
};

export default VideoDetailsFooter;
