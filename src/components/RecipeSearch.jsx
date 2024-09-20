import { Input } from "@chakra-ui/react";
import { recipes } from "../utils/data";

export const RecipeSearch = ({ setResults }) => {
  const handleChange = (event) => {
    const matchedRecipes = recipes.hits.filter(({ recipe }) => {
      return recipe.label
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setResults(matchedRecipes);
  };
  return (
    <Input
      onChange={handleChange}
      placeholder="Search recipes"
      size="md"
      w={{ base: 250, sm: 300, md: 450 }}
      mb={8}
      justify="center"
      alignItems="center"
      borderRadius="md"
    />
  );
};
