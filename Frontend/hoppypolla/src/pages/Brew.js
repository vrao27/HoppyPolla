import { useEffect, useState } from "react";
import { BrewRecipeContextProvider } from "../context/BrewRecipeContext"; // import the context provider component
//import BrewRecipeDetails from "../components/BrewRecipeDetails";
import BrewRecipesMap from "../components/BrewRecipesMap";
import { Link } from "react-router-dom";
import { BrewRecipeContext } from "../context/BrewRecipeContext";

const port = "http://localhost:4000/api/brewrecipes";

const BrewRecipe = () => {
  const [brewRecipes, setBrewRecipes] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(port);
      const json = await response.json();
      setBrewRecipes(json);

      //check if response is ok
      // if (response.ok) {
      //   setBrewRecipe(json);
      // }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="brewRecipe">
      {brewRecipes &&
        brewRecipes.map((brewRecipe) => (
          <Link to={`/brew/${brewRecipe._id}`} key={brewRecipe._id}>
            <BrewRecipesMap brewRecipe={brewRecipe} />
          </Link>
        ))}
      <BrewRecipeContextProvider
        brewRecipeId={brewRecipe._id}
      ></BrewRecipeContextProvider>
    </div>
  );
};

export default BrewRecipe;

// import { useEffect, useState } from "react";
// import BrewRecipeDetails from "../components/BrewRecipeDetails";
// import BrewRecipesMap from "../components/BrewRecipesMap";

// const port = "http://localhost:4000/api/brewrecipes";

// const BrewRecipe = () => {
//   const [brewRecipe, setBrewRecipe] = useState(null);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       const response = await fetch(port);
//       const json = await response.json();
//       return setBrewRecipe(json);

//       //check if response is ok
//       // if (response.ok) {
//       //   setBrewRecipe(json);
//       // }
//     };
//     fetchRecipes();
//   }, []);

//   return (
//     <div className="brewRecipe">
//       {brewRecipe &&
//         brewRecipe.map((brewRecipe) => (
//           <Link to={`/brew/${brewRecipe._id}`} key={brewRecipe._id}>
//             <BrewRecipesMap brewRecipe={brewRecipe} />
//           </Link>
//         ))}
//       <Route path="/brew/:id" element={<BrewRecipeDetails brewRecipe={brewRecipe} />} />
//     </div>
//   );

// };

// export default BrewRecipe;

//   return (
//     <div className="brewRecipe">
//       {brewRecipe &&
//         brewRecipe.map((brewRecipe) => (
//           <BrewRecipesMap key={brewRecipe._id} brewRecipe={brewRecipe} />
//         ))}
//     </div>
//   );
