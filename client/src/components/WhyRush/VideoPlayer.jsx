import React from "react";

function VideoPlayer() {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/dhYj56bpG04?si=_woTRV2YpBZRUC7C"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  );
}

export default VideoPlayer;
