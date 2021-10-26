import RecommendedListing from "./RecommendedListing";

const articleArr = [];

const Recommended = () => {
  return (
    <section>
      <h2>MORE FROM NEW SCIENTIST</h2>
      {articleArr.map((article) => {
        return (
          <RecommendedListing
            key={article.id}
            img={article.img}
            category={article.category}
            title={article.title}
          />
        );
      })}
    </section>
  );
};

export default Recommended;
