import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Video.css';

function Video() {
	return (
		<div className='hero-container'>
			<video src='videos\video.mp4' autoPlay loop muted></video>
			<h1>Culture</h1>
			<p>Ready for a new adventure?</p>
			<div className='hero-btns'>
				<Button
					className='btns'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
					child='Learn More'
				></Button>
				<Button
					className='btns'
					buttonStyle='btn--primary'
					buttonSize='btn--large'
					child='Get Started'
				>
					<i className='far fa-play-circle'></i>
				</Button>
			</div>
		</div>
	);
}

export default Video;
