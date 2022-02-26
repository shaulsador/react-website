import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const STYLE = ['btn--primary', 'btn--outline'];
const SIZE = ['btn--medium', 'btn--large'];

export const Button = ({ child, type, onClick, buttonStyle, buttonSize }) => {
	const checkStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
	const checkSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
	return (
		<Link to='/signup' className='btn-mobile'>
			<button
				className={`btn ${checkStyle} ${checkSize}`}
				onClick={onClick}
				type={type}
			>
				{child}
			</button>
		</Link>
	);
};
