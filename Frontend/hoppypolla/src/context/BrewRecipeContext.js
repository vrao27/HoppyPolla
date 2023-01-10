import { useReducer, createContext, useContext, useState, useEffect } from "react";

const BrewRecipeContext = createContext();

const useRecipe = () => useContext(BrewRecipeContext)


const BrewRecipeContextProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(brewRecipeReducer, {
  //   brewRecipes: brewRecipes,
  // });
  const port = "http://localhost:4000/api/brewrecipes";
  const [brewRecipes, setBrewRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(port);
      const json = await response.json();
      return setBrewRecipes(json);
    };
    fetchRecipes();
  }, []);


  return (
    <BrewRecipeContext.Provider value={{ brewRecipes, setBrewRecipes }}>
      {children}
    </BrewRecipeContext.Provider>
  );
};





// const brewRecipeReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_CURRENTRECIPE":
//       return {
//         brewRecipe: action.payload,
//       };
//     case "CREATE_BREWRECIPE":
//       return {
//         brewRecipe: [action.payload, ...state.brewRecipe],
//       };
//     default:
//       return state;
//   }
// };

export { useRecipe, BrewRecipeContext, BrewRecipeContextProvider }