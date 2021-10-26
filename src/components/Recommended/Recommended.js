import RecommendedListing from "./RecommendedListing";
import "./Recommended.css";

const articleArr = [
  {
    key: 0,
    img: { desc: "a butterfly", src: null },
    category: "health",
    title: "Butterflies good for health!?",
  },
];

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
