import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utils/api";
import { useAppContext } from "../routes";
import VideoDetailCard from "./VideoDetailCard";
import VideoDetailDescription from "./VideoDetailDescription";
import VideoDetailsFooter from "./VideoDetailsFooter";
import RelatedVideos from "./RelatedVideos";

const VideoDetail = () => {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { id } = useParams();
  const { setLoading, loading } = useAppContext();

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchData(`video/details/?id=${id}`).then((res) => {
      // console.log(res);
      setVideo(res);
    });
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  };

  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchData(`video/related-contents/?id=${id}`).then((res)=>{
      console.log(res)
      setRelatedVideo(res);
    })
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const description = video?.description
    .split("\n")
    .filter((item) => item !== " " || item !== "");
  return (
    <section className="mt-20 lg:ml-20 mx-4 flex h-[calc(100%-56px)] justify-center">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row lg:items-start bh-neutral-600">
        <div className="flex flex-col gap-3 lg:w-[calc(100%-500px)] xl:w-[calc(100%-400px)]">
          <VideoDetailCard id={id}/>
          <VideoDetailsFooter
            id={id}
            avatar={video?.author?.avatar[0]?.url}
            subscribers={video?.author?.stats?.subscribersText}
            title={video?.title}
            channelName={video?.author?.title}
            likes={video?.stats?.likes}
            verified={video?.author?.badges[0]?.type}
          />
          <VideoDetailDescription
            description={description}
            views={video?.stats?.views}
          />
        </div>
        <RelatedVideos relatedVideo={relatedVideo}/>
      </div>
    </section>
  );
};

export default VideoDetail;
