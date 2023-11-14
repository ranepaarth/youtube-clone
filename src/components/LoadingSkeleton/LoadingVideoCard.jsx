import React from "react";

const LoadingVideoCard = () => {
  return (
    <article className="flex flex-col mb-8 w-full h-full cursor-pointer">
      <div className="h-full max-sm:h-60 w-full bg-neutral-600 rounded-xl aspect-video  animate-pulse anima"></div>
      <div className="flex items-start gap-3 mt-3">
        <span className="p-5 rounded-full bg-neutral-600 animate-pulse anima"></span>
        <div className="flex flex-col font-medium gap-2 w-full">
          <span className="w-[90%] h-6  bg-neutral-600 rounded-sm animate-pulse anima">{}</span>
          <span className="bg-neutral-600 h-6 rounded-sm w-[75%] animate-pulse anima"></span>
        </div>
      </div>
    </article>
  );
};

export default LoadingVideoCard;
