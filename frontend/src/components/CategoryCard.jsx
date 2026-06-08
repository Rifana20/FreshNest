function CategoryCard({ title, image }) {
  return (
    <div className="category-card">

      <img
        src={image}
        alt={title}
        width="90"
      />

      <h3>{title}</h3>

    </div>
  );
}

export default CategoryCard;