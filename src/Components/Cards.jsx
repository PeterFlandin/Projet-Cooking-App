import React from 'react';

const Cards = ({meal}) => {

    return (

        <div>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strTags} />
            <h3>Origin : {meal.strArea}</h3>
            <p>{meal.strInstructions}</p>
            <a href={meal.strYoutube}>En video !!!</a>
        </div>
    );
};

export default Cards;