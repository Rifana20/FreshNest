function FoodCard({
  id,
  image,
  name,
  category,
  expiry,
  status,
  expiryStatus,
  onDelete,
  onUpdate
}) {

  return (

    <div className="food-card">

      <img
        src={image}
        alt={name}
        width="120"
      />

      <h3>{name}</h3>

      <p>
        <strong>Category:</strong> {category}
      </p>

      <p>
        <strong>Expiry:</strong> {expiry}
      </p>

      <p>
        <strong>Status:</strong> {status}
      </p>

      <p>
        <strong>Expiry Status:</strong> {expiryStatus}
      </p>

      <button
        onClick={() => onUpdate(id)}
      >
        Update
      </button>

      <button
        onClick={() => onDelete(id)}
      >
        Delete
      </button>

    </div>

  );
}

export default FoodCard;