import React from "react";
import { Categories } from "../routes";

const Feed = () => {
  return (
    <section className="grid grid-cols-1 h-[200vh] px-4 py-2 w-full ">
      <div className="">
        <div className="fixed top-14 left-0 right-0">
          <Categories />
        </div>
        <div className="md:ml-16 mt-16">feed</div>
      </div>
    </section>
  );
};

export default Feed;

// bg-neutral-900 md:bg-neutral-700 lg:bg-neutral-600 xl:bg-neutral-400
