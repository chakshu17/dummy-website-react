import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

function Button({ children, type, onClick, buttonStyle, buttonSize }) {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];
	const checkButtonSIze = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];
	return (
		<div>
			<Link to="/" className="btn-mobile">
				<buttton
					className={`btn ${checkButtonStyle} ${checkButtonSIze}`}
					onClick={onClick}
					type={type}
				>
					{children}
				</buttton>
			</Link>
		</div>
	);
}

export default Button;
