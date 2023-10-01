import './Button.css';

const Button = function ({ text, color, type = 'primary' }) {
	return (
		<button
			type='button'
			className={`btn btn--${type}${color ? `-${color}` : ''}`}
		>
			{text}
		</button>
	);
};

export default Button;
