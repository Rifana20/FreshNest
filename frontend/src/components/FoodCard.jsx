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

      <div className="expiry-wrapper">
        <strong>Expiry Status:</strong>

        <span
          className={
            expiryStatus === "Fresh"
              ? "fresh"
              : expiryStatus === "Expiring Soon"
              ? "warning"
              : "expired"
          }
        >
          {expiryStatus}
        </span>
      </div>

      <div className="food-actions">

        <button
          className="update-btn"
          onClick={() => onUpdate(id)}
        >
          Update
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default FoodCard;