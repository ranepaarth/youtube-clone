import React from "react";
import ReactPlayer from "react-player";
import { useAppContext } from "../routes";
import LoadingVideoDetailCard from "../LoadingSkeleton/LoadingVideoDetailCard";
const VideoDetailCard = ({id}) => {
  const { loading } = useAppContext();
  if(loading) return <LoadingVideoDetailCard />
  return (
      <article className="flex flex-col rounded-xl mb-2 mx-6 lg:mx-2 overflow-y-auto aspect-video grow">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          width="100%"
          height="100%"
          style={{ borderRadius: "20px" }}
          playing
          muted
        />
      </article>
  );
};

export default VideoDetailCard;

