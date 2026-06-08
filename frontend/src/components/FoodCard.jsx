function FoodCard({
  image,
  name,
  category,
  expiry,
  status
}) {

  return (
    <div className="food-card">

      <img
        src={image}
        alt={name}
      />

      <h3>{name}</h3>

      <p>{category}</p>

      <p>
        Expiry:
        {" "}
        {expiry}
      </p>

      <span
        className={status.toLowerCase()}
      >
        {status}
      </span>

    </div>
  );
}

export default FoodCard;