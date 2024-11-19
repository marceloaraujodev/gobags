import { IoPlayCircleOutline } from 'react-icons/io5';
import { useRef, useState, useEffect } from 'react';
import c from './VideoSection.module.css';

export default function VideoSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState([false, false]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRef = [useRef(null), useRef(null)];
  const canvasRef = [useRef(null), useRef(null)];

  // Function to capture a video frame and draw it on the canvas
  function drawFrame(videoElement, canvasElement) {
    if (videoElement && canvasElement) {
      const ctx = canvasElement.getContext('2d');
      canvasElement.width = videoElement.videoWidth;
      canvasElement.height = videoElement.videoHeight;
      ctx.drawImage(
        videoElement,
        0,
        0,
        canvasElement.width,
        canvasElement.height
      );
    }
  }
  // Play/Pause logic
  function play(videoRef, canvasRef, index) {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video) {
      if (video.paused) {
        video.play().catch((err) => console.error(err));
        setIsVideoPlaying((prevState) => {
          const updatedState = [...prevState];
          updatedState[index] = true;
          return updatedState;
        });
        setPlayingIndex(index);
        // Hide canvas when video starts
        if (canvas) canvas.style.display = 'none';
      } else {
        video.pause();
        setIsVideoPlaying((prevState) => {
          const updatedState = [...prevState];
          updatedState[index] = false;
          return updatedState;
        });
        setPlayingIndex(null);
        // Redraw frame when video pauses
        if (canvas) {
          drawFrame(video, canvas);
          canvas.style.display = 'block';
        }
      }
    }
  }

  useEffect(() => {
    // Draw the initial frame onto the canvas when the video is loaded
    videoRef.forEach((ref, index) => {
      const video = ref.current;
      const canvas = canvasRef[index]?.current;

      if (video && canvas) {
        video.addEventListener('loadeddata', () => drawFrame(video, canvas));
      }
    });
  }, []);

  return (
    <div className={c.cont} id="videos">
      <div className={c.items}>
        {/* Video 1 (Static Video without canvas) */}
        <div className={c.item}>
          <video
            className={c.roundedVideo}
            playsInline={true}
            autoPlay
            loop
            muted
            preload="auto"
            style={{ width: '300px', height: '300' }}>
            <source src="/video1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Video 2 (With Canvas) */}
        <div className={c.item}>
          <canvas ref={canvasRef[0]} className={c.canvas}></canvas>
          <video
            ref={videoRef[0]}
            muted
            controls={isVideoPlaying ? playingIndex === 0 : null}
            src="/video2.mp4"
            type="video/mp4"
            playsInline={true}
            preload="auto"
            style={{ width: '300px', height: '300' }}
          />
          <div
            className={c.iconContainer}
            onClick={() => {
              play(videoRef[0], canvasRef[0], 0);
            }}>
            {isVideoPlaying[0] ? null : <IoPlayCircleOutline size={80} />}
          </div>
        </div>

        {/* Video 3 (With Canvas) */}
        <div className={c.item}>
          <canvas ref={canvasRef[1]} className={c.canvas}></canvas>
          <video
            ref={videoRef[1]}
            muted
            src="/video3.mp4"
            type="video/mp4"
            controls={playingIndex === 1}
            playsInline={true}
            preload="auto"
            style={{ width: '300px', height: '300' }}
          />
          <div
            className={c.iconContainer}
            onClick={() => {
              play(videoRef[1], canvasRef[1], 1);
            }}>
            {isVideoPlaying[1] ? null : (
              <IoPlayCircleOutline size={80} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className={c.item}>
          <video
            ref={videoRef[0]}
            className={c.video}
            playsInline
            controls={playingIndex !== 0} 
            onClick={() => play(videoRef[0], 0)}
            preload="metadata"
          >
            <source src="/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isVideoPlaying && playingIndex !== 0 && (
            <IoPlayCircleOutline
              className={c.playIcon}
              onClick={() => play(videoRef[0], 0)}
            />
          )}
        </div> */
}
