const navItems = [
  { nav__logo: "logo-black" },
  { menu__items: ["Services", "Features", "About"] },
  { nav__btn: ["btn-login", "btn-register"] },
];

const NavList = function () {
  return (
    <ul>
      {navItems
        .map((item) => item)
        .map((item) => Object.values(item)[0])
        .map((innerItem) =>
          typeof innerItem === "object" ? (
            innerItem.map((innerItem) => <NavItem menuItem={innerItem} />)
          ) : (
            <NavItem menuItem={innerItem} />
          )
        )}
    </ul>
  );
};

const NavItem = function ({ menuItem }) {
  return <li className="navbar__item">{menuItem}</li>;
};

export default NavList;
