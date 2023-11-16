import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import React from "react";
const VideoLength = ({ lengthSeconds }) => {
  const videoLength = (lengthSeconds) => {
    momentDurationFormatSetup(moment);
    if (lengthSeconds >= 3600)
      return moment.duration(lengthSeconds, "seconds").format();
    return moment.duration(lengthSeconds, "seconds").format();
    // return 25
  };
  return (
    <div className="absolute bottom-2 right-2 bg-black/80 py-1 px-2 text-white text-xs rounded-md">
      {videoLength(lengthSeconds)}
    </div>
  );
};

export default VideoLength;
