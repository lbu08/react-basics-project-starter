import { Center, Heading, Flex, SimpleGrid } from "@chakra-ui/react";
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
        <div>
          {!selectedRecipeList.length ? (
            <>
              <RecipeSearch setResults={setSelectedRecipeList} />
              <div>No recipes found</div>
            </>
          ) : (
            <RecipeSearch setResults={setSelectedRecipeList} />
          )}
        </div>

        <Flex maxWidth="85%">
          <SimpleGrid
            columns={{ base: 1, sm: 1, md: 2, xl: 4 }}
            max-width="1500px"
            spacing={20}
          >
            {selectedRecipeList.map((recipe, item) => (
              <RecipeCard
                clickFn={clickFn}
                recipe={recipe}
                recipes={selectedRecipeList}
                key={item}
              />
            ))}
          </SimpleGrid>
        </Flex>
      </Center>
    </>
  );
};
