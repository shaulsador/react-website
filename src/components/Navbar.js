import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const navClick = () => setClick(!click);
	const closeMenuClick = () => setClick(false);
	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};
	useEffect(showButton, []);

	window.addEventListener('resize', showButton);
	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='/' className='navbar-logo' onClick={closeMenuClick}>
						<i className='fas fa-globe-americas'></i> Xiaotian Agency
					</Link>
					<div className='menu-icon' onClick={navClick}>
						<i
							className={click ? 'fas fa-ellipsis-h' : 'fas fa-align-justify'}
						></i>
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link className='nav-links' to='/' onClick={closeMenuClick}>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className='nav-links'
								to='/product'
								onClick={closeMenuClick}
							>
								Product
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-links' to='/about' onClick={closeMenuClick}>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className='nav-links-mobile'
								to='/signup'
								onClick={closeMenuClick}
							>
								Sing Up
							</Link>
						</li>
					</ul>
					{button && (
						<Button child='SIGN UP' buttonStyle='btn--outline'></Button>
					)}
				</div>
			</nav>
		</>
	);
}

export default Navbar;
