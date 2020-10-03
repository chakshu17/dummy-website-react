import React from "react";
import Button from "../Button/Button";
import "./Herosection.css";
import "../../App.css"
function HeroSection() {
	return (
		<div className="hero-container">
     
			{/* <video src="public\videos\video-1.mp4" autoPlay loop muted /> */}
			<h1> Adventure Awaits</h1>
			<p>What are you waiting For ? </p>
			<div className="hero-btns">
				<Button
					className="btns"
					buttonStyle="btn--outline"
					buttonSize="btn--large"
				>
					Get Started
				</Button>
 
				<Button
					className="btns"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
				>
					Watch Trailer <i className="fa fa-play-circle" />
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
