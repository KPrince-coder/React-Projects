import logoBlack from './../assets/images/logo-black.png';
import './Navbar.css';

const menuItems = ['service', 'features', 'pricing', 'about us'];

const Navbar = function () {
	return (
		<header className='header'>
			<nav className='navbar'>
				<div className='navbar__logo'>
					<img
						src={logoBlack}
						alt='AtomBank logo'
						className='navbar__logo-img'
					/>
				</div>
				<ul className='navbar__items'>
					{menuItems.map(item => (
						<NavItem menuItem={item} />
					))}
				</ul>
				<div className='navbar__btn-container'>
					<button className='navbar__btn' type='button'>
						Log In
					</button>
					<button className='navbar__btn' type='button'>
						Register
					</button>
				</div>
			</nav>
		</header>
	);
};

const NavItem = function ({ menuItem }) {
	return <li className='navbar__item'>{menuItem}</li>;
};
export default Navbar;
