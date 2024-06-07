// import React, { useEffect, useRef } from 'react';
// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';

// const VideoJS = (props) => {
//   const refVideo = useRef(null);
//   const refPlayer = useRef(null);
//   const { options, onReady } = props;

//   useEffect(() => {
//     // Make sure Video.js player is only initialized once
//     if (!refPlayer.current) {
//       // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
//       const videoElement = document.createElement('video-js');

//       videoElement.classList.add('vjs-big-play-centered');
//       refVideo.current.appendChild(videoElement);

//       const player = (refPlayer.current = videojs(videoElement, options, () => {
//         console.log('player is ready');
//         onReady && onReady(player);
//       }));

//       refPlayer.current = player;


//       // You could update an existing player in the `else` block here
//       // on prop change, for example:
//     } else {
//       const player = refPlayer.current;

//       player.autoplay(options.autoplay);
//       player.src(options.sources);
//     }
//   }, [options, refVideo]);

//   useEffect(() => {
//     const player = refPlayer.current;

//     return () => {
//       if (player && !player.isDisposed()) {
//         player.dispose();
//         refPlayer.current = null;
//       }
//     };
//   }, [refPlayer]);

//   const containerStyle = {
//     width: '400px',
//     // height: '80px',
//     // marginTop: '10%',
//     // marginLeft: '24.5%',  
//     right: 0,

//   };

//   return (
//     <div data-vjs-player style={containerStyle}>
//       <div ref={refVideo} />
//     </div>
//   );
// };

// export default VideoJS;






// import React, { useEffect, useRef } from 'react';
// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';
// import 'videojs-youtube'; // Import the YouTube plugin

// const VideoPlayer = ({ options, onReady,className }) => {
//     const videoRef = useRef(null);
//     const playerRef = useRef(null);

//     useEffect(() => {
//         // Make sure Video.js player is only initialized once
//         if (!playerRef.current) {
//             const videoElement = videoRef.current;
//             if (!videoElement) return;

//             // Initialize the Video.js player with YouTube tech
//             playerRef.current = videojs(videoElement, {
//                 ...options,
//                 techOrder: ['youtube'], // Specify 'youtube' first in tech order
//                 youtube: {
//                     iv_load_policy: 1 // Hide annotations by default
//                 },
//                 sources: [{
//                     type: 'video/youtube',
//                     src: options.src
//                 }]
//             }, () => {
//                 console.log('player is ready');
//                 onReady && onReady(playerRef.current);
//             });
//         }

//         // Forcefully add class to the video.js container after initialization
//         const videoContainer = videoRef.current.parentNode;
//         if (videoContainer && className) {
//             videoContainer.classList.add(className);
//         }

//         // Cleanup function to destroy player on component unmount
//         return () => {
//             if (playerRef.current) {
//                 playerRef.current.dispose();
//                 playerRef.current = null;
//             }

//             // Optionally remove the class when the component unmounts
//             if (videoContainer && className) {
//                 videoContainer.classList.remove(className);
//             }


//         };
//     }, [options, onReady]);

//     return (
//         <div data-vjs-player>
//             <video ref={videoRef} className="video-js" />
//         </div>
//     );
// };

// export default VideoPlayer;

