import { useEffect, useState } from "react";
//import { BrewRecipeContext } from "../context/BrewRecipeContext"; // import the context

const BrewRecipeContextProvider = ({ brewRecipeId, children }) => {
  const [brewRecipe, setBrewRecipe] = useState(null);

  useEffect(() => {
    // Use a function that fetches the data for the specific brew recipe
    // based on the brewRecipeId passed as a prop
    const fetchBrewRecipe = async () => {
      const response = await fetch(`/api/brewrecipes/${brewRecipeId}`);
      const json = await response.json();
      setBrewRecipe(json);
    };
    fetchBrewRecipe();
  }, [brewRecipeId]);

  return (
    <BrewRecipeContext.Provider value={brewRecipe}>
      {children}
    </BrewRecipeContext.Provider>
  );
};

export default BrewRecipeContextProvider;
