import "./Footer.css";

const Footer = () => {
  return (
    <footer className="pageFooter">
      <form className="newsLetterForm">
        <h2 className="formHeader">Sign up to our newsletters</h2>
        <label htmlFor="newsletterField">
          Enter your email address to get started
        </label>
        <input id="newsletterField" placeholder="Your email" />
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          SIGN UP
        </button>
      </form>
      <nav>
        <ul className="siteInfoLinks">
          <li>Contact us</li>
          <li>Help</li>
          <li>About us</li>
          <li>Privacy policy</li>
          <li>Cookie policy</li>
          <li>Terms & conditions</li>
        </ul>
      </nav>
      <hr />
      <nav className="footerNav">
        <ul className="siteInfoLinks">
          <li>Advertise</li>
          <li>Write for us</li>
          <li>Events</li>
          <li>Science jobs</li>
          <li>Syndication</li>
        </ul>
        <ul className="siteInfoLinks">
          <li>RSS feeds</li>
          <li>Gift subscriptions</li>
          <li>Student subscriptions</li>
          <li>Educational subscriptions</li>
          <li>Corporate subscriptions</li>
        </ul>
      </nav>
      <button className="cookiesBtn">COOKIE SETTINGS</button>
      <div className="subContainer">
        <div>
          <h3>GET THE APP</h3>
        </div>
        <div className="footerSocialNav">
          <h3 className="socialNavHeader">FOLLOW US</h3>
          <ul className="socialNav">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Pintrest</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
