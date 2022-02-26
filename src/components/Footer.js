import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
	return (
		<div className='footer-container'>
			<section className='footer-subscription'>
				<p className='footer-subscription-heading'>JOIN NOW</p>
				<p className='footer-subscription-text'>Get the best deals we offer!</p>
				<div className='input-areas'>
					<form className='footer-email-form'>
						<input
							type='email'
							name='email'
							className='footer-input'
							placeholder='Enter Your Email'
						/>
						<Button buttonStyle='btn--outline' child='Subscribe'></Button>
					</form>
				</div>
			</section>
			<div className='footer-links'>
				<div className='footer-link-wrapper'>
					<div className='footer-link-items'>
						<h2>About Us</h2>
						<Link to='/about'>How it works</Link>
						<Link to='/about'>Testimonials</Link>
						<Link to='/about'>Careers</Link>
						<Link to='/about'>Terms of Service</Link>
					</div>
					<div class='footer-link-items'>
						<h2>Contact Us</h2>
						<Link to='/'>Contact</Link>
						<Link to='/'>Support</Link>
						<Link to='/'>Destinations</Link>
						<Link to='/'>Sponsorships</Link>
					</div>
				</div>
				<div className='footer-link-wrapper'>
					<div class='footer-link-items'>
						<h2>Videos</h2>
						<Link to='/'>Submit Video</Link>
						<Link to='/'>Ambassadors</Link>
						<Link to='/'>Agency</Link>
						<Link to='/'>Influencer</Link>
					</div>
					<div class='footer-link-items'>
						<h2>Social Media</h2>
						<Link to='/'>Instagram</Link>
						<Link to='/'>Facebook</Link>
						<Link to='/'>Youtube</Link>
						<Link to='/'>Twitter</Link>
					</div>
				</div>
			</div>
			<section className='social-media'>
				<div className='social-media-wrap'>
					<div className='footer-logo'>
						<Link className='social-logo' to='/'>
							<i className='fas fa-globe-americas'></i> Xiaotian Influence
						</Link>
					</div>
					<small className='website-rights'>Xiaotian © 2021</small>
					<div className='social-icons'>
						<Link
							to='/'
							target='_blank'
							className='social-icon-link facebook'
							aria-label='facebook'
						>
							<i className='fab fa-facebook-f'></i>
						</Link>
						<Link
							class='social-icon-link instagram'
							to='/'
							target='_blank'
							aria-label='Instagram'
						>
							<i class='fab fa-instagram' />
						</Link>
						<Link
							class='social-icon-link youtube'
							to='/'
							target='_blank'
							aria-label='Youtube'
						>
							<i class='fab fa-youtube' />
						</Link>
						<Link
							class='social-icon-link twitter'
							to='/'
							target='_blank'
							aria-label='Twitter'
						>
							<i class='fab fa-twitter' />
						</Link>
						<Link
							class='social-icon-link linkedin'
							to='/'
							target='_blank'
							aria-label='LinkedIn'
						>
							<i class='fab fa-linkedin' />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
