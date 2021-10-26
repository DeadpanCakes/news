import "./Header.css";

const Header = () => {
  return (
    <header className="pageHeader">
      <p className="menu">Menu</p>
      <hgroup className="newsletterBanner">
        <h3>NEWSETTERS</h3>
        <h4>Sign up to read our regular email newsletters</h4>
      </hgroup>
      <a href="https://www.newscientist.com/" className="logo">
        <img alt="The NewScientist logo"></img>
      </a>
      <button className="subscribeBtn">SUBSCRIBE AND SAVE 69%</button>
      <nav className="headerNav">
        <ul className="headerLinks">
          <li>
            <a href="https://www.newscientist.com/section/news/">News</a>
          </li>
          <li>
            <a href="https://www.newscientist.com/podcasts/">Podcasts</a>
          </li>
          <li>
            <a href="https://www.newscientist.com/video/">Video</a>
          </li>
          <li>
            <a href="https://www.newscientist.com/subject/technology/">
              Technology
            </a>
          </li>
          <li>
            <a href="https://www.newscientist.com/subject/space/">Space</a>
          </li>
          <li>
            <a href="https://www.newscientist.com/subject/physics/">Physics</a>
          </li>
          <li>
            <a href="https://www.newscientist.com/subject/health/">Health</a>
          </li>
          <li>
            <a href="https://www.newscientist.com/article/2286218-ancient-lake-in-marss-gale-crater-may-have-actually-been-a-small-pond/#">
              More
            </a>
          </li>
          <li>Shop</li>
          <li>Courses</li>
          <li>Events</li>
          <li>Tours</li>
          <li>Jobs</li>
        </ul>
      </nav>
      <a href="https://www.newscientist.com/login/">
        <button>Sign In</button>
      </a>
      <button>Search</button>
    </header>
  );
};

export default Header;
