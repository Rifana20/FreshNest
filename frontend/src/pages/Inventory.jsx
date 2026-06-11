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

  <div className="inventory-title">

    <div>
      <h1>FreshNest Inventory Dashboard</h1>

      <p>
        View, organize, and manage food and medicine items
        while monitoring expiry status in real time.
      </p>
    </div>

    <div className="food-animation">
      <span className="emoji e1">🍎</span>
      <span className="emoji e2">🥛</span>
      <span className="emoji e3">🍞</span>
      <span className="emoji e4">🥚</span>
      <span className="emoji e5">🍌</span>
    </div>

  </div>

  <AddFoodModal
    onFoodAdded={loadFoods}
  />

</div>
        

      <div className="inventory-summary">

        <div className="summary-card">
          <h2>{foods.length}</h2>
          <p>Total Items</p>
        </div>

        <div className="summary-card">
          <h2>
            {
              foods.filter(
                item =>
                  item.expiry_status === "Expired"
              ).length
            }
          </h2>
          <p>Expired</p>
        </div>

        <div className="summary-card">
          <h2>
            {
              foods.filter(
                item =>
                  item.expiry_status === "Expiring Soon"
              ).length
            }
          </h2>
          <p>Expiring Soon</p>
        </div>

      </div>

      <div className="categories">

        <button
          className={
            selectedCategory === "All"
              ? "active"
              : ""
          }
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>

        <button
          className={
            selectedCategory === "PANTRY"
              ? "active"
              : ""
          }
          onClick={() => setSelectedCategory("PANTRY")}
        >
          Pantry
        </button>

        <button
          className={
            selectedCategory === "FRIDGE"
              ? "active"
              : ""
          }
          onClick={() => setSelectedCategory("FRIDGE")}
        >
          Fridge
        </button>

        <button
          className={
            selectedCategory === "FREEZER"
              ? "active"
              : ""
          }
          onClick={() => setSelectedCategory("FREEZER")}
        >
          Freezer
        </button>

        <button
          className={
            selectedCategory === "MEDICINE"
              ? "active"
              : ""
          }
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