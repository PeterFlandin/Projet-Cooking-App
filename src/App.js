import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Cards from "./Components/Cards";

function App() {
  const [meals, setMeals] = useState([]);
  console.log(meals);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then((res) => setMeals(res.data.meals));
  }, []);

  return (
    <div className="App">
      {meals.map((meal) => (
        <Cards key={meal.idmeal} meal={meal} />
      ))}
    </div>
  );
}

export default App;
