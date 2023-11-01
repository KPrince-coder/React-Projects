import LogoWhite from './../../assets/images/logo-white.png';
import Facebook from './../../assets/images/FacebookLogo.svg';
import Instagram from './../../assets/images/InstagramLogo.svg';

import './Footer.css';

const Footer = function () {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__items'>
					<figure className='footer__logo'>
						<a href='#header'>
							<img src={LogoWhite} alt='AtomBank logo' />
						</a>
					</figure>
					<div className='footer__address'>
						<section className='footer__item'>
							<h4 className='footer__title'>Location</h4>
							<p className='footer__subtitle'>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit.
							</p>
						</section>
						<section className='footer__item'>
							<h4 className='footer__title'>Contact</h4>
							<p className='footer__subtitle'>
								Customer Service 0812-1234-5034
							</p>
						</section>
						<section className='footer__social-links'>
							<div className='footer__social-link'>
								<img src={Facebook} alt='Facebook logo' />
								<span className='social-link__text'>
									@atombank
								</span>
							</div>
							<div className='footer__social-link'>
								<img src={Instagram} alt='Instagram logo' />
								<span className='social-link__text'>
									@atombank
								</span>
							</div>
						</section>
					</div>
				</div>
				{/* <hr className='footer__line' /> */}
				<div className='footer__copyright'>
					<p>
						Built by Anointing &copy;
						{new Date().getFullYear()}
					</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
