import React from "react";
import SuggestionVideoCard from "./SuggestionVideoCard";
import { useAppContext } from "../routes";

const RelatedVideos = ({ relatedVideo }) => {
  const {loading} = useAppContext()
  if(loading) return
  return <div className="lg:w-[400px] xl:w-[500px] mx-6 my-2 lg:mt-0">{relatedVideo?.contents?.map((item,index) => {
    if(item.type == 'video') return <SuggestionVideoCard key={index} video={item?.video}/>
  })}</div>;
};

export default RelatedVideos;
