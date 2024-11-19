import { IoPlayCircleOutline } from 'react-icons/io5';
import { useRef, useState } from 'react';
import c from './VideoSection.module.css';

export default function VideoSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRef = [useRef(null), useRef(null)];

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

  function play(videoRef, index) {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play().catch((err) => console.error(err));
        setPlayingIndex(index);
        setIsVideoPlaying(true);
      } else {
        video.pause();
        setPlayingIndex(null);
        setIsVideoPlaying(false);
      }
    }
  }

  return (
    <div className={c.cont} id="videos">
      <div className={c.items}>
        {/* <div className={c.item}>
          <video
            className={c.roundedVideo}
            playsInline={true}
            autoPlay
            loop
            muted
            preload="auto"
            style={{ width: '300px', height: 'auto' }}>
            <source
              src="/video1.mp4"
              type="video/mp4"
            />
          </video>
        </div> */}

        <div className={c.item}>
          <video
            ref={videoRef[0]}
            controls
            muted
            playsInline
            src="https://firebasestorage.googleapis.com/v0/b/charter-8fd79.appspot.com/o/video2.mp4?alt=media&token=a0a557ef-47f7-45b7-bf4d-80492a73e616"
            type="video/mp4"
            preload="metadata"
            style={{ width: '300px', height: '300px', objectFit: 'cover' }}
            onClick={() => play(videoRef[0], canvasRef[0], 0)}
          />
          <div
            className={c.iconContainer}
            onClick={() => {
              play(videoRef[0], 0);
            }}>
            {playingIndex === 0 ? '' : <IoPlayCircleOutline size={80} />}
          </div>
        </div>

        <video
          playsInline
          muted
          controls
          preload="metadata"
          >
          <source
            src="https://video.wixstatic.com/video/113b92_ff87c096baf1408995c1596e4f5936a5/480p/mp4/file.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* <div className={c.item}>
          <video
            ref={videoRef[1]}
            muted
            src="/video3.mp4"
            type="video/mp4"
            controls={playingIndex === 1}
            playsInline={true}
            preload="auto"
            style={{ width: '300px', height: 'auto' }}
          />
          <div className={c.iconContainer} onClick={() => {
            play(videoRef[1], 1);
          }}>
            {playingIndex === 1 ? '' : <IoPlayCircleOutline size={80} />}
          </div>
        </div> */}
      </div>
    </div>
  );
}
