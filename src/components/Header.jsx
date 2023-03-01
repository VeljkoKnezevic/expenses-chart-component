const Header = ({ Logo }) => {
  return (
    <div className="header">
      <div className="header__content">
        <p className="header__balance">My balance</p>
        <p className="header__total">$921.48</p>
      </div>
      <h1>
        <img className="header__logo" src={Logo} alt="Expenses chart logo" />
      </h1>
    </div>
  );
};

export default Header;
