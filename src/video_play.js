import VideoPlayer from "./video";


function App1() {
    const videoOptions = {
        autoplay: false, // Autoplay is generally not allowed on YouTube videos
        controls: true,
        src: 'https://www.youtube.com/watch?v=EiNiSFIPIQE'
    };

    return (
        <div className="App">
            <h1>Video.js with YouTube</h1>
            <VideoPlayer options={videoOptions} onReady={() => console.log('Video is ready!')} />
        </div>
    );
}

export default App1;

