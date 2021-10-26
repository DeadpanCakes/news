import "./Article.css"

const Article = () => {
  return (
    <article className="mainArticle">
      <h1>
        Ancient lake in Mars's Gale crater may have actually been a small pond
      </h1>
      <ul className="socialNav">
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Whatsapp</li>
        <li>Linkedin</li>
        <li>Reddit</li>
        <li>Email</li>
        <li>Print</li>
      </ul>
      <section className="byline">
        <h3>Space</h3>
        <h3>6 August 2021</h3>
        <h3>
          By{" "}
          <a href="https://www.newscientist.com/author/leah-crane/">
            Leah Crane
          </a>
        </h3>
      </section>
      <figure>
        <img alt="The Gale crater on mars"></img>
        <figcaption>
          <p>
            The rocks inside Gale crater hint there may not have been a large
            lake there after all
          </p>
          <p>NASA/JPL-Caltech/University of Arizona</p>
        </figcaption>
      </figure>
      <p>
        A purported ancient lake on Mars may have been far smaller than
        researchers thought. NASA’s Curiosity rover has been{" "}
        <a href="https://www.newscientist.com/article/2197638-curiosity-is-entering-what-may-be-the-best-area-to-find-life-on-mars/">
          exploring Gale crater
        </a>{" "}
        for more than eight years, and while early observations suggested the
        entire crater may once have been filled with water, a new analysis
        implies that it just had a series of ponds instead. Previous analyses of
        data from Curiosity have relied heavily on a measure called the chemical
        index of alteration to determine how rocks were weathered over time.
        <a href="https://www.clays.space/">Joseph Michalski</a>at the University
        of Hong Kong and his colleagues have suggested that because this measure
        was developed for use on Earth, it may not be valid in the extreme
        Martian climate. Instead, they analysed the concentrations of various
        compounds that are expected to change based on different types of
        weathering over time. They found that some of the layers of rock
        Curiosity examined did interact with water at some point in their past,
        but more are likely to have formed outside of the water.
      </p>
      <section>
        Read More:{" "}
        <a href="https://www.newscientist.com/article/2284210-microbes-burping-methane-on-mars-may-be-right-next-to-nasa-rover/">
          Microbes burping methane on Mars may be right next to NASA rover
        </a>
      </section>
      <p>
        “Over hundreds of metres of strata, it seems that the only layers that
        are demonstrably lacustrine [formed in a lake] are the lower few
        metres,” says Michalski. “Of the rocks visited by the rover… the
        fraction that is demonstrably lacustrine is something like 1 per cent.”
        These rocks were mostly in the lowest few metres of{" "}
        <a href="https://www.newscientist.com/article/2271407-marss-crust-may-have-sucked-up-most-of-the-planets-water/">
          sediments in the crater
        </a>
        , suggesting the lake was not nearly as deep or extensive as we thought.
        “There was likely a small lake or more likely a series of small lakes in
        the floor of Gale crater, but these were shallow ponds,” says Michalski.
        The rocks that didn’t form in water appeared to be volcanic, so
        Michalski says that they may have formed out of ash from volcanic
        eruptions after the water in Gale crater had dried up. Observations by
        other Mars missions have hinted that these sediments were deposited by
        wind, not water, so this may solve that mismatch.
      </p>
      <section>
        Journal reference: Science Advances,
        <a href="https://www.science.org/doi/10.1126/sciadv.abh2687">
          DOI: 10.1126/sciadv.abh2687
        </a>
        <br />
        Sign up to our free{" "}
        <a href="https://www.newscientist.com/sign-up/launchpad/">
          Launchpad
        </a>{" "}
        newsletter for a voyage acress the galaxy and beyond, every friday
      </section>
      <section>
        <h4>
          More on these topics:{" "}
          <ul>
            <li>
              <button>PLANETS</button>
            </li>
            <li>
              <button>MARS</button>
            </li>
          </ul>
        </h4>
        <ul className="socialNav">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Whatsapp</li>
          <li>Linkedin</li>
          <li>Reddit</li>
          <li>Email</li>
          <li>Print</li>
        </ul>
        <div>
          <a href="https://www.newscientist.com/issue/3357/">
            <img alt="Cover of New Scientist issue #3357, whose cover reads 'What Will Success Look Like At the Crucial Climate Conference?'"></img>
          </a>
          <ul>
            <li>SUBSCRIBE</li>
            <li>VIEW IN THE APP</li>
            <li>BUY IN PRINT</li>
          </ul>
        </div>
      </section>
    </article>
  );
};

export default Article;
