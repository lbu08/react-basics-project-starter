import {
  Card,
  CardBody,
  Center,
  Heading,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Tag,
} from "@chakra-ui/react";
import { HealthLabels } from "./HealthLabels";

export const RecipeCard2 = ({ recipe, clickFn }) => {
  const healthFilters = ["Vegetarian", "Vegan"];
  return (
    <Center>
      <SimpleGrid
        minChildWidth="20px"
        columns={4}
        spacing={100}
        alignItems="center"
        justify="center"
        align="center"
      >
        <Card
          onClick={() => clickFn(recipe)}
          cursor="pointer"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          padding="0px"
          justify="center"
          h="25rem"
          w="250px"
          margins="0px"
          textAlign="center"
          _hover={{
            transform: "scale(1.05)",
            borderWidth: "1.5px",
            borderColor: "green.800",
            borderRadius: "xl",
          }}
        >
          <CardBody
            border="0.2px"
            h="100%"
            w="100%"
            backgroundColor="orange.300"
            borderRadius="xl"
            padding="0px"
          >
            <Image
              objectFit="cover"
              position="relative"
              left="0px"
              top="0px"
              w="100%"
              h="150px"
              src={recipe.recipe.image}
              alt="recipe.recipe.label"
              padding="0px"
              margin="0px"
            />
            <Stack direction="column" spacing="4px">
              <Text
                textTransform="uppercase"
                pt="2"
                textAlign="center"
                fontSize="s"
                margins="1px"
                color="white"
              >
                {recipe.recipe.mealType}
              </Text>
              <Heading fontSize="lg" textAlign="center" w="100%" pt="2">
                {recipe.recipe.label}
              </Heading>
              <Text
                pt="2"
                textTransform="uppercase"
                fontSize="xs"
                textAlign="center"
                color="green"
                fontWeight="bold"
              ></Text>
              <Flex gap={2} justify="center" wrap="wrap">
                <>
                  <HealthLabels
                    healthLabels={recipe.recipe.healthLabels}
                    filters={healthFilters}
                    tagStyle={{ bgColor: "yellow", color: "grey" }}
                  />
                </>
              </Flex>

              <Flex gap={2} justify="center" wrap="wrap">
                {recipe.recipe.dietLabels.map((filteredLabel, index) => (
                  <Tag
                    key={`dietLabels-${index}`}
                    textTransform="uppercase"
                    bgColor="lightgreen"
                    color="white"
                  >
                    {filteredLabel}
                  </Tag>
                ))}
              </Flex>

              <Text
                fontSize="s"
                textAlign="center"
                verticalAlign="center"
                color="black"
                marginBottom="0px"
                marginTop="0px"
              >
                Dish: <b>{recipe.recipe.dishType}</b>
              </Text>

              {recipe.recipe.cautions?.length > 0 && (
                <Text
                  fontSize="xs"
                  textTransform="uppercase"
                  textAlign="center"
                  fontWeight="bold"
                  color="red.600"
                >
                  Cautions:
                </Text>
              )}
              <Flex gap={2} justify="center" wrap="wrap">
                {recipe.recipe.cautions.map((filteredLabel, index) => (
                  <Tag
                    key={`cautions-${index}`}
                    textTransform="uppercase"
                    fontWeight="bold"
                    bgColor="red.200"
                    color="red.600"
                  >
                    {filteredLabel}
                  </Tag>
                ))}
              </Flex>
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Center>
  );
};
