import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import API from "../services/api";

function Dashboard() {

  const [foods, setFoods] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem(
      "access_token"
    );

    API.get("/foods/", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        setFoods(res.data.results);
      });

  }, []);

  const totalItems = foods.length;

  const freshItems =
    foods.filter(
      item => item.status === "ACTIVE"
    ).length;

  const wastedItems =
    foods.filter(
      item => item.status === "WASTED"
    ).length;

  const consumedItems =
    foods.filter(
      item => item.status === "CONSUMED"
    ).length;

  return (
    <>
      <Navbar />

      <div className="page-container">

        <h1>FreshNest Dashboard</h1>

        <div className="stats-container">

          <StatsCard
            title="Total Items"
            value={totalItems}
          />

          <StatsCard
            title="Active Items"
            value={freshItems}
          />

          <StatsCard
            title="Consumed"
            value={consumedItems}
          />

          <StatsCard
            title="Wasted"
            value={wastedItems}
          />

        </div>

      </div>
    </>
  );
}

export default Dashboard;