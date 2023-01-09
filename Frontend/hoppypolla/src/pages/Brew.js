import { useEffect, useState } from "react";
import BrewRecipeDetails from "../components/BrewRecipeDetails";
import BrewRecipesMap from "../components/BrewRecipesMap";

const port = "http://localhost:4000/api/brewrecipes";

const BrewRecipe = () => {
  const [brewRecipe, setBrewRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(port);
      const json = await response.json();
      return setBrewRecipe(json);

      //check if response is ok
      // if (response.ok) {
      //   setBrewRecipe(json);
      // }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="brewRecipe">
      {brewRecipe &&
        brewRecipe.map((brewRecipe) => (
          <BrewRecipesMap key={brewRecipe._id} brewRecipe={brewRecipe} />
        ))}
    </div>
  );
};

export default BrewRecipe;
