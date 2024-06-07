import React from "react";
import { useEffect,useRef } from "react";
import HTMLFlipBook from "react-pageflip";
// import videojs from "video.js";
// import VideoJS from "./video";
// import VideoPlayer from "./video";
import collegeRecImage from "./college_rec_image.png"
import "./book.scss"

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="page" ref={ref}>
             {/* <h1>Page Header </h1>  */}
             <p>{props.children}</p> 
            {/* <p className="page_number">Page number: {props.number}</p>    */}
        </div>
    );
});



// const Page1= React.forwardRef((props, ref) => {
//     // const refPlayer = useRef(null);

//     // const videoJsOptions = {
//     //   fluid:true,
//     //   fill:true,
//     //   autoplay: false,
//     //   controls: true,
//     //   responsive: true,
//     //   fluid: true,
//     //   sources: [
//     //     {
//     //       src: './AMPE.mp4',
//     //       type: 'video/mp4'
//     //     }
//     //   ]
//     // };

//     const videoOptions = {
//         autoplay: false, // Autoplay is generally not allowed on YouTube videos
//         controls: true,
//         src: 'https://youtu.be/7lX_CDjRN0M?si=RNyI7mxSs1utkGbp'
       
//     };
  
//     // const handlePlayerReady = (player) => {
//     //   refPlayer.current = player;
  
//     //   // You can handle player events here, for example:
//     //   player.on('waiting', () => {
//     //     videojs.log('player is waiting');
//     //   });
  
//     //   player.on('dispose', () => {
//     //     videojs.log('player will dispose');
//     //   });
//     // };

//     return (
//         <div className="page_1" ref={ref}> 
//             <VideoPlayer options={videoOptions} onReady={() => console.log('Video is ready!')} className="video_player"/>           
//             {/* <p>{props.children}</p> */}
//             {/* <VideoJS options={videoJsOptions} onReady={handlePlayerReady} /> */}
//             {/* <p className="page_number">{props.number}</p> */}
//         </div>
//     );
// });



const Page1 = React.forwardRef((props, ref) => {
    const handleImageClick = () => {
        window.open('https://www.youtube.com/watch?v=7lX_CDjRN0M?si=RNyI7mxSs1utkGbp', '_blank');
    };

    return (
        <div className="page_1" ref={ref}>
            <img
                src= {collegeRecImage}
                alt="Click to open YouTube"
                onClick={handleImageClick}
                className="image_player"                
            />
        </div>
    );
});


const Page2 = React.forwardRef((props, ref) => {
    return (
        <div className="page_2" ref={ref}>
            {/* <h1>Page Header</h1>
            <p>{props.children}</p>
            <p className="page_number">Page number: {props.number}</p> */}
        </div>
    );
});

const Page3 = React.forwardRef((props, ref) => {
    return (
        <div className="page_3" ref={ref}>
            {/* <h1>Page Header</h1>
            <p>{props.children}</p>
            <p className="page_number">Page number: {props.number}</p> */}
        </div>
    );
});

const Page4 = React.forwardRef((props, ref) => {
    return (
        <div className="page_4" ref={ref}>
            {/* <h1>Page Header</h1>
            <p>{props.children}</p>
            <p className="page_number">Page number: {props.number}</p> */}
        </div>
    );
});

const Page5 = React.forwardRef((props, ref) => {
    return (
        <div className="page_5" ref={ref}>
            {/* <h1>Thank you for reading</h1> */}
            {/* <p>{props.children}</p>
            <p className="page_number">Page number: {props.number}</p> */} 
        </div>
    );
});

const CoverPage = React.forwardRef((props, ref) => {
    return (
        <div className="cover" ref={ref}>
            {/* <h1>Thank you for reading</h1> */}
            {/* <p>{props.children}</p>
            <p className="page_number">Page number: {props.number}</p> */} 
        </div>
    );
});

const ThankyouPage = React.forwardRef((props, ref) => {
    return (
        <div className="thankyou_page" ref={ref}>
            {/* <h1>Thank you for reading</h1> */}
            {/* <p>{props.children}</p>
            <p className="page_number">Page number: {props.number}</p> */} 
        </div>
    );
});


const EndPage= React.forwardRef((props, ref) => {
    return (
        <div className="end" ref={ref}>
            {/* <h1>Thank you for reading</h1> */}
            {/* <p>{props.children}</p>
            <p className="page_number">Page number: {props.number}</p> */} 
        </div>
    );
});





function Book(props) {

    return (
        <>
        
        <HTMLFlipBook width={600} height={550}  startZIndex={1000} maxShadowOpacity={10} showCover={true}className="book-container">
            <CoverPage />
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
            <ThankyouPage />
            <EndPage />
            {/* <Page>Thank you for reading</Page> */}

        </HTMLFlipBook>
       
        </>
       
    );
}

export default Book;