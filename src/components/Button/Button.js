import './Button.css';

const Button = function ({ text, color, arrow, type = 'primary' }) {
	return (
		<button
			type='button'
			className={`btn btn--${type}${color ? `-${color}` : ''}`}
		>
			<span className='btn__text'>{text}</span>

			<span className='btn__arrow'> {arrow || ''}</span>
		</button>
	);
};

export default Button;
