import React from "react";
import "./Card.css";

const Cards = ({ meal }) => {
  return (
    <div className="cards">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strTags} />
      <h3>Origin : {meal.strArea}</h3>
      <p>{meal.strInstructions}</p>
      <div className="lien"> 
        <a href={meal.strSource}target="_blank" >For more information</a>
      <a href={meal.strYoutube} target="_blank">Youtube !</a>
      </div>
     
    </div>
  );
};

export default Cards;
