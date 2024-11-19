import { IoPlayCircleOutline } from 'react-icons/io5';
import { useRef, useState } from 'react';
import c from './VideoSection.module.css';

export default function VideoSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRef = [useRef(null), useRef(null)]


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
            video.play().catch(err => console.error(err));
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
    <div className={c.cont} id='videos'>
      <div className={c.items}>

      <div className={c.item}>
          <video
            ref={videoRef[0]}
            className={c.video}
            playsInline
            controls={playingIndex !== 0} // Show controls only when not playing manually
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
        </div>

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

        {/* <div className={c.item}>
          <video
            ref={videoRef[0]}
            muted
            controls={isVideoPlaying? playingIndex === 0 : null}
            src="/video2.mp4"
            type="video/mp4"
            playsInline={true}
            preload="auto"
            style={{ width: '300px', height: '300px' }}
          />
          <div className={c.iconContainer} onClick={() => {
            play(videoRef[0], 0);
          }}>
            {playingIndex === 0 ? '' : <IoPlayCircleOutline size={80} />}
          </div>
        </div> */}

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
