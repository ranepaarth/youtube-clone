import React, { useEffect } from "react";
import { VideoCard, useAppContext } from "../routes";
import { useLocation } from "react-router-dom";

const FeedMainSection = () => {
  const { loading, searchResults } = useAppContext();
  // console.log(searchResults);
  let {pathname} = useLocation();
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  });
  return (
    <section className="mt-16 md:mx-0  md:w-[calc(100%-80px)] md:ml-[4.5rem] xl:ml-[12rem] grow w-[calc(100%-250px)] h-full overflow-y-scroll  bg-[#0a0a0a]">
      <div className="grid max-sm:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {!loading &&
          searchResults.map((item) => {
            return item.type !== "video" ? (
              false
            ) : (
              <VideoCard key={item?.video?.title} video={item?.video} />
            );
          })}
      </div>
    </section>
  );
};

export default FeedMainSection;
