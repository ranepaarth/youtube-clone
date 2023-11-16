import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";
import VideoLength from "../Feed/VideoLength";
const SuggestionVideoCard = ({ video }) => {
  // console.log(video)
  return (
    <Link to={`/video/${video?.videoId}`}>
      <article className="flex items-start mb-2 gap-3">
        <div className="h-28 lg:w-72 rounded-xl aspect-video flex relative">
          <img
            src={video?.thumbnails[0]?.url}
            alt=""
            className="aspect-video w-full rounded-xl hover:rounded-none transition-all [transition-duration:400ms] p-[0.02rem] hover:p-0"
          />
         <VideoLength lengthSeconds={video?.lengthSeconds}/>
        </div>
        <div className="flex lg:text-sm w-[65%] lg:w-[80%]">
          <span className="flex flex-col font-medium">
            <div className="flex items-center justify-between">
              <p className="line-clamp-2">{video?.title}</p>
            </div>
            <span className="text-sm lg:text-xs text-neutral-500">
              <span className="flex items-center gap-2">
                <p>{video?.author?.title}</p>
                <p className="flex items-baseline bg-neutral-400 text-black rounded-full">
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BiCheck />
                  )}
                </p>
              </span>
              <span className="flex items-center gap-[0.15rem]">
                {video?.stats?.views < 10000 ? (
                  <p className="capitalize">
                    {abbreviateNumber(video?.stats?.views, 1, {
                      symbols: ["", "K", "M", "G", "T", "P", "E"],
                      padding: false,
                    })}{" "}
                    views
                  </p>
                ) : (
                  <p className="capitalize">
                    {abbreviateNumber(video?.stats?.views, { padding: false })}{" "}
                    views
                  </p>
                )}

                <p>•</p>
                <p>{video?.publishedTimeText}</p>
              </span>
            </span>
          </span>
        </div>
      </article>
    </Link>
  );
};

export default SuggestionVideoCard;
