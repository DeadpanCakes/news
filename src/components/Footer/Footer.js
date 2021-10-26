import "./Footer.css";

const Footer = () => {
  return (
    <footer className="pageFooter">
      <form>
        <h3>Sign up to our newsletters</h3>
        <p>Enter your email address to get started</p>
        <input placeholder="Your email" />
        <button>SIGN UP</button>
      </form>
      <nav>
        <ul>
          <li>Contact us</li>
          <li>Help</li>
          <li>About us</li>
          <li>Privacy policy</li>
          <li>Cookie policy</li>
          <li>Terms & conditions</li>
        </ul>
      </nav>
      <br />
      <nav>
        <ul>
          <li>Advertise</li>
          <li>Write for us</li>
          <li>Events</li>
          <li>Science jobs</li>
          <li>Syndication</li>
          <li>RSS feeds</li>
          <li>Gift subscriptions</li>
          <li>Student subscriptions</li>
          <li>Educational subscriptions</li>
          <li>Corporate subscriptions</li>
        </ul>
      </nav>
      <button>COOKIE SETTINGS</button>
      <div>
        <h3>GET THE APP</h3>
      </div>
      <div>
        <h3>FOLLOW US</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>Pintrest</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
