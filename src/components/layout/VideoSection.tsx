import React from "react";

const VideoSection: React.FC = () => {
  return (
    <section className="relative z-10 mx-4 mt-20 flex min-h-screen items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="relative h-0 overflow-hidden rounded-lg pb-[56.25%] shadow-lg">
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src="https://www.youtube.com/embed/your-video-id"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Introduction Video"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
