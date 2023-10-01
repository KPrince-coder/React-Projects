import './Button.css';

const Button = function ({ text, type = 'primary' }) {
	return (
		<button type='button' className={`btn btn--${type}`}>
			{text}
		</button>
	);
};

export default Button;
