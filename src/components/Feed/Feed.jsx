import React from "react";
import { Categories, FeedMainSection, SideBarSection } from "../routes";

const Feed = () => {
  return (
    <>
      <div className="fixed top-14 left-0 right-0">
        <Categories />
      </div>
      <div className={`flex flex-row h-full mt-16 md:mx-0 max-sm:mx-2`}>
        <SideBarSection />
        <FeedMainSection />
      </div>
    </>
  );
};

export default Feed;

// bg-neutral-900 md:bg-neutral-700 lg:bg-neutral-600 xl:bg-neutral-400
