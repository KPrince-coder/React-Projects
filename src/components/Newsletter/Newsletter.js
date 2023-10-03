import Button from '../Button/Button';
import './Newsletter.css';

const Newsletter = function () {
	return (
		<section className='newsletter'>
			<div className='newsletter__container'>
				<h2 className='section__title'>Subscribe Newsletter</h2>
				<p className='section__subtitle'>
					Financial transactions remotely using mobile
				</p>
				<form action='' className='newsletter__form'>
					<input
						type='email'
						className='newsletter__input'
						placeholder='Enter your email'
						name='email'
					/>
					<Button text='get started' />
				</form>
			</div>
		</section>
	);
};

export default Newsletter;
