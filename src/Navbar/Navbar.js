import logoBlack from './../assets/images/logo-black.png';
import Button from './../Button/Button';
import './Navbar.css';

const menuItems = ['service', 'features', 'pricing', 'about us'];

const Navbar = function () {
	return (
		<header className='header' id='header'>
			<nav className='navbar'>
				<div className='navbar__logo'>
					<a href='#header'>
						<img
							src={logoBlack}
							alt='AtomBank logo'
							className='navbar__logo-img'
						/>
					</a>
				</div>
				<ul className='navbar__items'>
					{menuItems.map(item => (
						<NavItem menuItem={item} />
					))}
				</ul>
				<div className='navbar__btn-container'>
					<Button type={'secondary'} text={'Log In'} />
					<Button type={'primary'} text={'Register'} />
				</div>
			</nav>
		</header>
	);
};

const NavItem = function ({ menuItem }) {
	return (
		<li className='navbar__item'>
			<a href='#header'>{menuItem}</a>
		</li>
	);
};
export default Navbar;
