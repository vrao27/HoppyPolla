import { useReducer, createContext } from "react";

export const BrewRecipeContext = createContext();




export const brewRecipeReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENTRECIPE":
      return {
        brewRecipe: action.payload,
      };
    case "CREATE_BREWRECIPE":
      return {
        brewRecipe: [action.payload, ...state.brewRecipe],
      };
    default:
      return state;
  }
};

export const BrewRecipeContextProvider = ({ children, brewRecipes }) => {
  const [state, dispatch] = useReducer(brewRecipeReducer, {
    brewRecipes: brewRecipes,
  });

  return (
    <BrewRecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </BrewRecipeContext.Provider>
  );
};
