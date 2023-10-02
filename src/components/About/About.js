import Button from './../Button/Button';
import AccountImg from './../../assets/images/image 18.png';
import FundImg from './../../assets/images/Group 6.png';
import CardImg from './../../assets/images/image 22.png';
import PlayStoreImg from './../../assets/images/play_store.png';
import AppStoreImg from './../../assets/images/app_store.png';

import './About.css';

const features = [
	{
		id: 1,
		title: 'AtomBank App for Your Easy',
		subtitle:
			'The best place to transact and save money. More organized finances no longer a discourse. Enjoy the life you want, without wasting time on unnecessary financial matters',
		img: AccountImg,
		alt_message: 'Phone with AtomBank account',
		link: [
			{ img: PlayStoreImg, alt: 'Play Store' },
			{ img: AppStoreImg, alt: 'App Store' },
		],
	},
	{
		id: 2,
		title: 'AtomBank for the Future',
		subtitle:
			"All conveniences are at hand. It's time to go ahead and make dreams come true one by one. Open, manage and withdraw competitive interest savings without going to the bank.",
		img: FundImg,
		alt_message: 'Phone with AtomBank fund',
		link: ['learn more'],
	},
	{
		id: 3,
		title: 'Customable Debit Card',
		subtitle:
			'Choose a debit card design that suits you. Practically withdraw cash and transact worldwide.',
		img: CardImg,
		alt_message: 'AtomBank debit cards',
		link: ['learn more'],
	},
];

const About = function () {
	return (
		<section className='about'>
			{features.map(feature => (
				<AboutItem
					key={feature.id}
					title={feature.title}
					subtitle={feature.subtitle}
					imgSrc={feature.img}
					altMessage={feature.alt_message}
					button={
						feature.link.length > 1 ? (
							feature.link.map(btn => (
								<figure
									className='about__img-btn'
									key={++features.length}
								>
									<img src={btn.img} alt={btn.alt} />
								</figure>
							))
						) : (
							<Button
								text={feature.link[0]}
								color={'green'}
								arrow={'\u279E'}
								type={'link'}
							/>
						)
					}
				/>
			))}
		</section>
	);
};

const AboutItem = function ({ imgSrc, altMessage, title, subtitle, button }) {
	return (
		<section className='about__feature'>
			<figure className='about__img'>
				<img src={imgSrc} alt={altMessage} />
			</figure>
			<div className='about__text'>
				<h2 className='about__title'>
					{title.startsWith('Atom') ? <Logo title={title} /> : title}
				</h2>
				<p className='about__subtitle'>{subtitle}</p>
				<div className='about__btn'>{button}</div>
			</div>
		</section>
	);
};

const Logo = function ({ title }) {
	const splitTitle = title.replace('AtomBank', '');
	return (
		<>
			<span className='logo-name'>
				<strong className='logo-name--bold'>Atom</strong>Bank
			</span>
			{splitTitle}
		</>
	);
};

export default About;
