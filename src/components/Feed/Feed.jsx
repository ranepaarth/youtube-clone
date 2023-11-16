import React from "react";
import { Categories, FeedMainSection, SideBarSection, useAppContext } from "../routes";
import LoadingFeed from "../LoadingSkeleton/LoadingFeed";

const Feed = () => {
  const {loading}  = useAppContext()
  if(loading) return <LoadingFeed />
  return (
    <>
      <div className="fixed top-12 md:top-14 left-0 right-0 z-10">
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
