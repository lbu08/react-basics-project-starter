import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { RecipeListPage } from "./pages/RecipeListPage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();
  window.scrollTo(0, 0);

  return (
    <div>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <>
          <RecipeListPage clickFn={setSelectedRecipe} />
        </>
      )}
    </div>
  );
};
