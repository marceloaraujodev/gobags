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
              src="https://video.wixstatic.com/video/113b92_04956996717e4419bb985a29d1bcb596/360p/mp4/file.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className={c.item}>
          <video
            ref={videoRef[0]}
            controls={isVideoPlaying ? true : false}
            src="https://video.wixstatic.com/video/113b92_ff87c096baf1408995c1596e4f5936a5/480p/mp4/file.mp4"
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
            src="https://video.wixstatic.com/video/113b92_16e42514afb04c34882f61b365c417c0/480p/mp4/file.mp4"
            controls={isVideoPlaying ? true : false}
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
