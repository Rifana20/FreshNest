import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";

import apple from "../assets/apple.png";
import milk from "../assets/milk.png";
import egg from "../assets/egg.png";

function Inventory() {

  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/foods/")
      .then((response) => response.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  const getImage = (name) => {

    const item = name.toLowerCase();

    if(item.includes("milk")) return milk;
    if(item.includes("egg")) return egg;

    return apple;
  };

  const filteredFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter(
          (food) =>
            food.category === selectedCategory.toUpperCase()
        );

  return (
    <>
      <Navbar />

      <div className="page-container">

        <div className="inventory-header">

          <h1>Food Inventory</h1>

        </div>

        <div className="categories">

          <button onClick={() => setSelectedCategory("All")}>
            All
          </button>

          <button onClick={() => setSelectedCategory("PANTRY")}>
            Pantry
          </button>

          <button onClick={() => setSelectedCategory("FRIDGE")}>
            Fridge
          </button>

          <button onClick={() => setSelectedCategory("FREEZER")}>
            Freezer
          </button>

          <button onClick={() => setSelectedCategory("MEDICINE")}>
            Medicine
          </button>

        </div>

        <div className="food-grid">

          {filteredFoods.map((food) => (

            <FoodCard
              key={food.id}
              image={getImage(food.name)}
              name={food.name}
              category={food.category}
              expiry={food.expiry_date}
              status={food.status}
            />

          ))}

        </div>

      </div>
    </>
  );
}

export default Inventory;