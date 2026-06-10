import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import AddFoodModal from "../components/AddFoodModal";

import apple from "../assets/apple.png";
import banana from "../assets/banana.png";
import bread from "../assets/bread.png";
import egg from "../assets/egg.png";
import milk from "../assets/milk.png";
import tomato from "../assets/tomato.png";
import rice from "../assets/rice.png";
import potato from "../assets/potato.png";
import medicine from "../assets/medicine.png";

import API from "../services/api";

function Inventory() {

  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const loadFoods = () => {

    const token =
      localStorage.getItem("access_token");

    API.get("/foods/", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {

        setFoods(response.data.results);

      })
      .catch((error) => {

        console.log(error);

      });
  };

  useEffect(() => {

    const token =
      localStorage.getItem("access_token");

    if (!token) {

      window.location.href = "/login";
      return;

    }

    loadFoods();

  }, []);

  const getImage = (name) => {

  if (!name) return apple;

  const item = name.toLowerCase();

  if (item.includes("milk")) return milk;

  if (item.includes("egg")) return egg;

  if (item.includes("banana")) return banana;

  if (item.includes("bread")) return bread;

  if (item.includes("tomato")) return tomato;

  if (item.includes("rice")) return rice;

  if (item.includes("potato")) return potato;

  if (
    item.includes("tablet") ||
    item.includes("medicine") ||
    item.includes("paracetamol")
  )
    return medicine;

  return apple;
};
  const filteredFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter(
          (food) =>
            food.category ===
            selectedCategory.toUpperCase()
        );
const handleDelete = async (id) => {

  const token =
    localStorage.getItem("access_token");

  try {

    await API.delete(
      `/foods/${id}/`,
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );

    loadFoods();

  } catch (error) {

    console.log(error);

  }
};


const handleUpdate = async (id) => {

  const newStatus = prompt(
    "Enter ACTIVE, CONSUMED or WASTED"
  );

  if (!newStatus) return;

  const token =
    localStorage.getItem("access_token");

  try {

    await API.patch(
      `/foods/${id}/`,
      {
        status:
          newStatus.toUpperCase()
      },
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );

    loadFoods();

  } catch (error) {

    console.log(error);

  }
};
  return (
    <>
      <Navbar />

      <div className="page-container">

        <div className="inventory-header">

          <h1>Food Inventory</h1>

          <AddFoodModal
            onFoodAdded={loadFoods}
          />

        </div>

        <div className="categories">

          <button
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>

          <button
            onClick={() => setSelectedCategory("PANTRY")}
          >
            Pantry
          </button>

          <button
            onClick={() => setSelectedCategory("FRIDGE")}
          >
            Fridge
          </button>

          <button
            onClick={() => setSelectedCategory("FREEZER")}
          >
            Freezer
          </button>

          <button
            onClick={() => setSelectedCategory("MEDICINE")}
          >
            Medicine
          </button>

        </div>

        <div className="food-grid">

          {filteredFoods.map((food) => (

  <FoodCard
    key={food.id}
    id={food.id}
    image={getImage(food.name)}
    name={food.name}
    category={food.category}
    expiry={food.expiry_date}
    status={food.status}
    expiryStatus={food.expiry_status}
    onDelete={handleDelete}
    onUpdate={handleUpdate}
  />

))}

        </div>

      </div>
    </>
  );
}

export default Inventory;