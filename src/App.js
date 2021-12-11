import FlipCard from "./component/FlipCard";
import axios from "axios";
import React, { useState, useEffect } from "react";
//!Api https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=ad90ab15&app_key=d88256b2543340c113a166272ea7570c&imageSize=LARGE

const App = () => {
  const [allRecipe, setAllRecipe] = useState([]);
  const [search, setSearch] = useState("chicken");

  const APP_KEY = "d88256b2543340c113a166272ea7570c";
  const APP_ID = "ad90ab15";

  const handleChange = (e) => {
    e.preventDefault();
    const sName = e.target.value;
    setSearch(sName);
    console.log(sName);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&imageSize=LARGE`
      )
      .then((response) => setAllRecipe(response.data.hits))
      .catch((error) => console.log({ error }));
  }, [search]);

  return (
    <div className="main">
      <form>
        <input
          className="input"
          name="etext"
          type="text"
          onChange={handleChange}
          placeholder="Search Recip"
        />
      </form>
      <div className="containers">
        {allRecipe.map((recipe) => (
          <FlipCard
            key={recipe.id}
            name={recipe.recipe.label}
            img={recipe.recipe.images.LARGE.url}
            descriptıon={recipe.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
