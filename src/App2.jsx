import { useState } from "react";
import { RecipeListPageB } from "./pages/RecipeListPageB";
import { RecipePageA } from "./pages/RecipePageA";
import { RecipeSearch } from "./components/RecipeSearch";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <div className="App">
      {selectedRecipe ? (
        <RecipePageA recipe={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <>
          <RecipeSearch clickFn={setSelectedRecipe} />
          <RecipeListPageB />
        </>
      )}
    </div>
  );
};
