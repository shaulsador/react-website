import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
	return (
		<div className='cards'>
			<h1>Go viral and spread ... the word!</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='images\img-11.jpg'
							text='How to become the next super influencer?'
							label='Adventure'
							path='/about'
						/>
						<CardItem
							src='images\img-12.jpg'
							text='Offering exclusive services customized just for you!'
							label='Luxury'
							path='/about'
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src='images\img-13.jpg'
							text='Let us know about your needs and we are here to help!'
							label='Question'
							path='/about'
						/>
						<CardItem
							src='images\img-14.jpg'
							text='Improve your networking skills like a pro!'
							label='Practice'
							path='/about'
						/>
						<CardItem
							src='images\img-15.jpg'
							text='Challenge yourself and never give up!'
							label='Advice'
							path='/signup'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
