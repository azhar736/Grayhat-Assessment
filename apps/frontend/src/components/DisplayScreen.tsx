// src/components/DisplayScreen.tsx
import React, { useEffect, useState } from "react";
import { videoService } from "../services/videoService";

const DisplayScreen: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>("");

  useEffect(() => {
    console.log("Use Effect Running");
    const fetchVideo = async () => {
      try {
        const response = await videoService.getLatestVideo();
        console.log("response is ...", response);
        setVideoUrl(response);
      } catch (error) {
        console.error("Failed to fetch the video:", error);
      }
    };

    fetchVideo();
  }, []);

  return (
    <div>
      {videoUrl ? (
        <video
          src={videoUrl}
          controls
          onLoadedData={(e) => console.log("Video is ready to play")}
          onError={(e) => console.log("Error when loading video", e)}
        />
      ) : (
        <p>No video available.</p>
      )}
    </div>
  );
};

export default DisplayScreen;
