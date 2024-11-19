import { IoPlayCircleOutline } from 'react-icons/io5';
import { useRef, useState, useEffect } from 'react';
import c from './VideoSection.module.css';

export default function VideoSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const videoRef = [useRef(null), useRef(null)];




  useEffect(() => {
    // Loop through all refs in the array

    videoRef.forEach((ref) => {
      const video = ref.current;
      console.log(video);
      if (video) {
        // Ensure the first frame is displayed
        video.currentTime = 0.1;

        const handleLoadedData = () => {
          video.currentTime = 0.1;
        };

        const handleSeeked = () => {
          setPosterLoaded(true);
        };

        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('seeked', handleSeeked);

        return () => {
          video.removeEventListener('loadeddata', handleLoadedData);
          video.removeEventListener('seeked', handleSeeked);
        };
      }
    });
  }, [videoRef]);

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
        <div className={c.item}>
          <video
            ref={videoRef[0]}
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
          <video
            ref={videoRef[0]}
            // controls
            muted
            playsInline
            src="https://firebasestorage.googleapis.com/v0/b/charter-8fd79.appspot.com/o/video2.mp4?alt=media&token=a0a557ef-47f7-45b7-bf4d-80492a73e616"
            poster="/poster-video2.jpg"
            type="video/mp4"
            preload="auto"
            style={{ width: '300px', height: '300px', objectFit: 'cover' }}
            onClick={() => play(videoRef[0], 0)}
          />
          {isVideoPlaying && posterLoaded && (
            <div
              className={c.iconContainer}
              onClick={() => {
                play(videoRef[0], 0);
              }}>
              {(playingIndex === 0  && isVideoPlaying)? '' : <IoPlayCircleOutline size={80} />}
            </div>
          )}
        </div>

        <div className={c.item}>
          <video
            ref={videoRef[1]}
            muted
            src="/video3.mp4"
            poster="/poster-video3.jpg"
            type="video/mp4"
            controls={playingIndex === 1}
            playsInline={true}
            preload="auto"
            style={{ width: '300px', height: 'auto' }}
          />
          <div
            className={c.iconContainer}
            onClick={() => {
              play(videoRef[1], 1);
            }}>
            {playingIndex === 1 ? '' : <IoPlayCircleOutline size={80} />}
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