function AddFoodModal() {
  return (
    <div className="modal">

      <div className="modal-content">

        <h2>Add Food Item</h2>

        <input
          type="text"
          placeholder="Food Name"
        />

        <input
          type="number"
          placeholder="Quantity"
        />

        <select>
          <option>Pantry</option>
          <option>Fridge</option>
          <option>Freezer</option>
          <option>Medicine</option>
        </select>

        <input type="date" />

        <button className="primary-btn">
          Save Item
        </button>

      </div>

    </div>
  );
}

export default AddFoodModal;