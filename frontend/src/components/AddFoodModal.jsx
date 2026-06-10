import { useState } from "react";
import API from "../services/api";

function AddFoodModal({ onFoodAdded }) {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("PANTRY");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleSubmit = async () => {

    try {

      const token =
        localStorage.getItem("access_token");

      await API.post(
        "/foods/",
        {
          name,
          quantity,
          category,
          purchase_date: purchaseDate,
          expiry_date: expiryDate,
          status: "ACTIVE"
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      alert("Food Added");

      setName("");
      setQuantity("");
      setCategory("PANTRY");
      setPurchaseDate("");
      setExpiryDate("");

      onFoodAdded();

    } catch (error) {

      console.log(error);

      alert("Failed to add item");

    }
  };

  return (

    <div className="add-food-form">

      <h2>Add Item</h2>

      <input
        placeholder="Item Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        placeholder="Quantity (eg: 2kg)"
        value={quantity}
        onChange={(e) =>
          setQuantity(e.target.value)
        }
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option value="PANTRY">
          Pantry
        </option>

        <option value="FRIDGE">
          Fridge
        </option>

        <option value="FREEZER">
          Freezer
        </option>

        <option value="MEDICINE">
          Medicine
        </option>

      </select>

      <label>
        Purchase Date
      </label>

      <input
        type="date"
        value={purchaseDate}
        onChange={(e) =>
          setPurchaseDate(e.target.value)
        }
      />

      <label>
        Expiry Date
      </label>

      <input
        type="date"
        value={expiryDate}
        onChange={(e) =>
          setExpiryDate(e.target.value)
        }
      />

      <button
        onClick={handleSubmit}
      >
        Add Item
      </button>

    </div>

  );
}

export default AddFoodModal;