import { useEffect, useRef, useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import c from "./VideoSection.module.css";

export default function VideoSection() {
  const [playingIndex, setPlayingIndex] = useState(null);

  const videoRef1 = useRef(null);
  const canvasRef1 = useRef(null);

  const videoRef2 = useRef(null);
  const canvasRef2 = useRef(null);
console.log(playingIndex);
  // Function to capture a video frame and draw it on the canvas
  function drawFrame(videoElement, canvasElement) {
    if (videoElement && canvasElement) {
      const ctx = canvasElement.getContext("2d");
      canvasElement.width = videoElement.videoWidth;
      canvasElement.height = videoElement.videoHeight;
      ctx.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
    }
  }

  // Play/Pause logic
  function play(videoRef, canvasRef, index) {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video) {
      if (video.paused) {
        video.play().catch((err) => console.error(err));
        setPlayingIndex(index);
        // Hide canvas when video starts
        if (canvas) canvas.style.display = "none";
      } else {
        video.pause();
        setPlayingIndex(null);
        // Redraw frame when video pauses
        if (canvas) {
          drawFrame(video, canvas);
          canvas.style.display = "block";
        }
      }
    }
  }

  useEffect(() => {
    // Draw the initial frame onto the canvas for each video when loaded
    if (videoRef1.current && canvasRef1.current) {
      videoRef1.current.addEventListener("loadeddata", () =>
        drawFrame(videoRef1.current, canvasRef1.current)
      );
    }

    if (videoRef2.current && canvasRef2.current) {
      videoRef2.current.addEventListener("loadeddata", () =>
        drawFrame(videoRef2.current, canvasRef2.current)
      );
    }
  }, []);

  return (
    <div className={c.cont} id="videos">
      <div className={c.items}>
        {/* Video 1 */}
        <div className={c.item}>
          <video
          className={c.roundedVideo}
          loop={true}
          autoPlay={true}
          muted
          playsInline
          src="/video1.mp4"
          poster="/poster-video1.jpg"
          type="video/mp4"
          preload="auto"
          style={{ width: '300px', height: '300px', objectFit: 'cover' }}
          />

        </div>
        <div className={c.item}>
          {/* <canvas ref={canvasRef1} className={c.canvas}></canvas> */}
          <video
            ref={videoRef1}
            muted
            // autoPlay
            controls={playingIndex === 0}
            src="/video2.mp4"
            poster="/poster-video2.jpg"
            preload="auto"
            playsInline
            style={{ width: "300px", height: "auto" }}
          />
          <div
            className={c.iconContainer}
            onClick={() => play(videoRef1, canvasRef1, 0)}
          >
            {playingIndex === 0 ? "" : <IoPlayCircleOutline size={80} />}
          </div>
        </div>

        {/* Video 2 */}
        <div className={c.item}>
          {/* <canvas ref={canvasRef2} className={c.canvas}></canvas> */}
          <video
            ref={videoRef2}
            muted
            controls={playingIndex === 1}
            src="/video3.mp4"
            poster="/poster-video3.jpg"
            preload="auto"
            playsInline
            style={{ width: "300px", height: "auto" }}
          />
          <div
            className={c.iconContainer}
            onClick={() => play(videoRef2, canvasRef2, 1)}
          >
            {playingIndex === 1 ? "" : <IoPlayCircleOutline size={80} />}
          </div>
        </div>
      </div>
    </div>
  );
}


// function play(videoRef, index){
//   if(videoRef.current){
//     if(videoRef.current.paused){
//       videoRef.current.play();
//       setPlayingIndex(index);
//       setIsVideoPlaying(true);
//     }else{
//       videoRef.current.pause();
//       setPlayingIndex(null);
//       setIsVideoPlaying(false);
//     }
//   }
// }


{/* <video
className={c.roundedVideo}
loop={true}
autoPlay={true}
muted
playsInline
src="/video1.mp4"
poster="/poster-video1.jpg"
type="video/mp4"
preload="auto"
style={{ width: '300px', height: '300px', objectFit: 'cover' }}
/> */}