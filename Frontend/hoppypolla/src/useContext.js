import { createContext } from "react";

export const BrewRecipeContext = createContext();

export const BrewRecipeContextProvider = ({ children }) => {
  return <BrewRecipeContext.Provider>{children}</BrewRecipeContext.Provider>;
};
