import React from "react";
import { Categories } from "../routes";


const Feed = () => {
  return (
    <section className="grid grid-cols-1">
      <Categories />
      <div className="grid grid-cols-1 px-4"></div>
    </section>
  );
};

export default Feed;
