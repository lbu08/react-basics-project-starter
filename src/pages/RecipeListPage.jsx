import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";
import { recipes } from "../utils/data";
import { RecipeSearch } from "../components/RecipeSearch";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [selectedRecipeList, setSelectedRecipeList] = useState(recipes.hits);

  return (
    <>
      <Center
        gap={10}
        bgColor="white"
        flexDir="column"
        alignItems="center"
        marginLeft="0px"
      >
        <Heading
          fontSize={{ base: 25, sm: 30, md: 45 }}
          color="green.700"
          marginTop="10px"
          fontWeight="700"
          alignItems="center"
        >
          Winc Recipe Checker
        </Heading>
        <RecipeSearch setResults={setSelectedRecipeList} />

        <SimpleGrid
          w="80vw"
          columns={{ base: 1, sm: 2, md: 3, xl: 4 }}
          spacing={70}
          alignItems="center"
        >
          {selectedRecipeList.map((recipe) => (
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
