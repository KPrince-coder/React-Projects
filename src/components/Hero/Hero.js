import Button from '../Button/Button';
import Image from './../../assets/images/image 23.png';
import './Hero.css';

const Hero = function () {
	return (
		<section className='hero'>
			<section className='hero__text'>
				<p className='hero__title'>
					Easy Way to Save your Money with{' '}
					<span className='hero__logo-name'>
						<strong className='hero__logo-name--bold'>Atom</strong>
						Bank.
					</span>
				</p>
				<p className='hero__subtitle'>
					The best place to transact and save money. We make all
					payments easier and simpler. Receive and send payment funds
					without cash.
				</p>
				<div className='hero__btn-container'>
					<Button text={'Download Now'} type={'primary'} />
					<div className='hero__link'>
						<Button
							type={'link'}
							color={'grey'}
							text={'see how it works'}
							arrow={'\u279E'}
						/>
						{/* TODO: redirect link  */}
					</div>
				</div>
			</section>
			<section className='hero__img'>
				<img src={Image} alt='AtomBank on different screen sizes' />
			</section>
		</section>
	);
};

export default Hero;
