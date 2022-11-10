import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [meals, setMeals] = useState([])


useEffect(() => {
  
  axios
  .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=tomato`)
  .then((res) => setMeals(res.data.meals))

}, [])


  return (
    <div className="App">

    </div>
  );
}

export default App;

