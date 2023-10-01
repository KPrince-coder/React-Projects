import SecurityImg from './../../assets/images/security.png';
import AccountImg from './../../assets/images/account.png';
import './Security.css';

const details = [
	{
		id: 1,
		img: SecurityImg,
		altMessage: 'Account image',
		title: 'Fast and secure cashless payments',
		subtitle:
			'Pay with AtomBank app, online, and in stores, and get added speed security',
	},
	{
		id: 2,
		img: AccountImg,
		altMessage: 'Secure payment images',
		title: 'Control over your account',
		subtitle:
			'Your bank account lets you easily lock your card in the app. and later reorder it with a tap of a button.',
	},
];

const Security = function () {
	return (
		<section className='security'>
			{details.map(item => (
				<SecurityInfo
					imgSrc={item.img}
					key={item.id}
					title={item.title}
					subtitle={item.subtitle}
					altMessage={item.altMessage}
				/>
			))}
		</section>
	);
};

const SecurityInfo = function ({ title, subtitle, imgSrc, altMessage }) {
	return (
		<section className='security-info'>
			<div className='security-info__item'>
				<figure className='security-info__img'>
					<img src={imgSrc} alt={altMessage} />
				</figure>
				<div className='security-info__text'>
					<p className='security-info__title'>{title}</p>
					<p className='security-info__subtitle'>{subtitle}</p>
				</div>
			</div>
		</section>
	);
};

export default Security;
