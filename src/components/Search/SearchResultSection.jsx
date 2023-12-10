import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { BiCheck } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { FixedSideBar } from "../routes";
const SearchResultSection = ({ result }) => {
  // console.log(result);
  return (
    <>
      <FixedSideBar />
      <div className="mt-16 mb-4 md:mt-16 mx-4 md:ml-24 xl:ml-56 min-w-fit">
        {result.map((item, index) => {
          if (item?.type !== "video") return false;
          return (
            <NavLink to={`/video/${item?.video?.videoId}`}>
              <div className="flex items-start gap-4 my-3">
                <figure key={index} className="w-[50%] max-w-[350px]">
                  <img
                    src={item?.video?.thumbnails[0].url}
                    alt=""
                    className="w-full rounded-lg aspect-video hover:rounded-none"
                  />
                </figure>
                <div className="w-[40%] md:w-[60%] lg:w-[90%] grow flex flex-col">
                  <p className="line-clamp-2 font-medium text-lg w-[80%]">
                    {item?.video?.title}
                  </p>
                  <span className="text-xs flex gap-2 font-medium text-neutral-400">
                    <p>{abbreviateNumber(item?.video?.stats?.views, 1)}</p>
                    <p>•</p>
                    <p>{item?.video?.publishedTimeText}</p>
                  </span>
                  <span className="flex gap-2 text-xs items-center font-medium my-3 text-neutral-400">
                    <span className="flex items-center h-6 w-6 overflow-hidden rounded-full">
                      <img
                        src={item?.video?.author?.avatar[0]?.url}
                        alt=""
                        className="h-full w-full object-cover "
                      />
                    </span>
                    <p className="w-[30%] line-clamp-1 md:w-fit">
                      {item?.video?.author?.title}
                    </p>
                    <p className="flex items-baseline bg-neutral-400 text-black rounded-full">
                      {item?.video?.author?.badges[0]?.type ===
                        "VERIFIED_CHANNEL" && <BiCheck />}
                    </p>
                  </span>
                  <p className="text-xs line-clamp-2 text-neutral-400">
                    {item?.video?.descriptionSnippet}
                  </p>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default SearchResultSection;
