import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Cards from "./Components/Cards";

function App() {
  const [meals, setMeals] = useState([]);
  const [searchs, setSearchs] = useState("")



  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=` + searchs )
      .then((res) => setMeals(res.data.meals));
  }, [searchs]);
  return (
    <div className="App">
      <div className="title">
        <h1>Cooking Recipes</h1>
        <div className="search">
          <form action="submit">
          <input type="text" placeholder="Search for your dish"  onChange={(e) => setSearchs(e.target.value)}/>
          </form>
        </div>
        

      </div>
      <div className="card-container">
        { meals && meals
        .slice(0 , 24)
        .map((meal) => (
          <Cards key={meal.idmeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default App;
