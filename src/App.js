import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Cards from "./Components/Cards";

function App() {
  const [meals, setMeals] = useState([]);


  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then((res) => setMeals(res.data.meals));
  }, []);
  return (
    <div className="App">
      <div className="title">
        <h1>Cooking Recipes</h1>
        <div className="search">
          <input type="text" placeholder="Search for your dish" value="" />
          <button type="button">Search</button>
        </div>
         </div>
         <div className="card-container">
      {meals.map((meal) => (
        <Cards key={meal.idmeal} meal={meal} />

      ))}
      </div>
    </div>
  );
}

export default App;
