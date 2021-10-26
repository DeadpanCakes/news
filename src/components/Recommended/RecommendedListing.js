const RecommendedListing = ({ img, category, title }) => {
  return (
    <li>
      <img src={img.src} alt={img.desc} />
      <h3>{category}</h3>
      <h2>{title}</h2>
    </li>
  );
};

export default RecommendedListing;
