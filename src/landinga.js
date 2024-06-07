import React from "react";
import ReactDOM from "react-dom"
import { useNavigate } from "react-router-dom";
import './landing.scss'


const Text = ({ value }) => (
	<div className="text">
		{value.split('').map((char, i) => (
			<div className="letter" style={{ '--delay': `${i * 0.2}s` }}>
				<span className="source">{char}</span>
				<span className="shadow">{char}</span>
				<span className="overlay">{char}</span>
			</div>
		))}
	</div>
)

function Landing (){
	const navigate = useNavigate(); 

    const navigateToBook = () => {
        navigate('/book'); 
    };

	const backgroundStyle = {
		backgroundImage: 'url(./bg_image4.svg)'
	  };
    return (
        <>
        
        
			<div className="app" onClick={navigateToBook} style={backgroundStyle}>
				<Text value="Bitania's" />
				<Text value="JOURNAL" />
				<p className="para-text">
					<span>
					Welcome to my journal, a place where I document my personal
					and professional achievements. Click anywhere on the screen to start reading{' '}
					</span>
				</p>
				{/* <p className="para-text">
					Click anywhere on the screen to start reading
				</p> */}
				{/* <button className="button"> Read ! </button> */}
			</div>
         </>
        

    );
}
export default Landing;