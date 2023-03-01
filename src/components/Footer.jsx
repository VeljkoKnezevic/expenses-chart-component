const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__total">
        <p className="footer__text footer__total__text">Total this month</p>
        <p className="footer__total__number">$478.33</p>
      </div>
      <div className="footer__percentage">
        <p className="footer__percentage__number">+2.4%</p>
        <p className="footer__text"> from last month</p>
      </div>
    </div>
  );
};

export default Footer;
