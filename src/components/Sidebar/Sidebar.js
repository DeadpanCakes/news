import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sideBar">
      <header>
        <ul className="sideBarCat">
          <li>
            <h3>Trending</h3>
          </li>
          <li>
            <h3>Latest</h3>
          </li>
          <li>
            <h3>Video</h3>
          </li>
          <li>
            <h3>Free</h3>
          </li>
        </ul>
      </header>
      <ul>
        <li className="topArticle">
          <h2>
            How much less likely are you to spread covid-19 if you're
            vaccinated?
          </h2>
          <h1 className="articleRank">1</h1>
        </li>
        <li className="topArticle">
          <h2>Humans are hardwired to feel others' pain</h2>
          <h1 className="articleRank">2</h1>
        </li>
        <li className="topArticle">
          <h2>
            Sperm quality has been declining for 16 years amovg men in the US
          </h2>
          <h1 className="articleRank">3</h1>
        </li>
        <li className="topArticle">
          <h2>
            AI can turn a collection of 2D images into an explorable 3D world
          </h2>
          <h1 className="articleRank">4</h1>
        </li>
        <li className="topArticle">
          <h2>
            Glass flask catalysed famous Miller-Urey origin-of-life experiment
          </h2>
          <h1 className="articleRank">5</h1>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
