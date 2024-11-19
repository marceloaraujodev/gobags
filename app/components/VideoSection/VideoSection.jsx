import { IoPlayCircleOutline } from 'react-icons/io5';
import { useRef, useState } from 'react';
import c from './VideoSection.module.css';

export default function VideoSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRef = [useRef(null), useRef(null)]


  function play(videoRef, index){
    if(videoRef.current){
      if(videoRef.current.paused){
        videoRef.current.play();
        setPlayingIndex(index);
        setIsVideoPlaying(true);
      }else{
        videoRef.current.pause();
        setPlayingIndex(null);
        setIsVideoPlaying(false);
      }
    }
  }

  return (
    <div className={c.cont} id='videos'>
      <div className={c.items}>
        <div className={c.item}>
          <video
            className={c.roundedVideo}
            playsInline
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
        </div>
        <div className={c.item}>
          <video
            ref={videoRef[0]}
            muted
            controls={playingIndex === 0}
            src="/video2.mp4"
            type="video/mp4"
            playsInline
            preload="auto"
            style={{ width: '300px', height: '300px' }}
          />
          <div className={c.iconContainer} onClick={() => {
            play(videoRef[0], 0);
          }}>
            {playingIndex === 0 ? '' : <IoPlayCircleOutline size={80} />}
          </div>
        </div>

        <div className={c.item}>
          <video
            ref={videoRef[1]}
            muted
            src="video3.mp4"
            type="video/mp4"
            controls={playingIndex === 1}
            playsInline
            preload="auto"
            style={{ width: '300px', height: 'auto' }}
          />
          <div className={c.iconContainer} onClick={() => {
            play(videoRef[1], 1);
          }}>
            {playingIndex === 1 ? '' : <IoPlayCircleOutline size={80} />}
          </div>
        </div>
      </div>
    </div>
  );
}
