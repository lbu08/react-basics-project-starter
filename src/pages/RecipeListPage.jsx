import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";
import { recipes } from "../utils/data";
import { RecipeSearch } from "../components/RecipeSearch";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [selectedRecipeList, setSelectedRecipeList] = useState(recipes.hits);
  return (
    <>
      <Center gap={10} bgColor="white" flexDir="column">
        <Heading size="lg" color="darkSeaGreen" marginTop="10px">
          Winc Recipe Checker
        </Heading>
        <RecipeSearch setResults={setSelectedRecipeList} />

        <SimpleGrid w="80vw" columns={4} spacing={70} alignItems="center">
          {recipes.hits.map((recipe) => (
            <RecipeCard
              clickFn={clickFn}
              recipe={recipe}
              recipes={selectedRecipeList}
              key={recipe.label}
            />
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
};
