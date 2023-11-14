import React from "react";
import {LoadingVideoCard} from "../routes";

const LoadingFeedSection = () => {
  return (
    <section className="w-full h-full text-black grow overflow-scroll scroll-smooth">
      <div className="grid max-sm:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {[...Array(20).keys()].map((i) => {
          return <LoadingVideoCard key={i}/>;
        })}
      </div>
    </section>
  );
};

export default LoadingFeedSection;
