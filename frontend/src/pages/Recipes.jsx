function RecipeCard({
  title,
  ingredients
}) {
  return (
    <div className="recipe-card">

      <h3>{title}</h3>

      <p>
        Ingredients:
      </p>

      <p>
        {ingredients}
      </p>

    </div>
  );
}

export default RecipeCard;