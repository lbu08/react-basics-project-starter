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

export const RecipeCard = ({ recipe, clickFn }) => {
  return (
    <Center>
      <SimpleGrid
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
          h="26rem"
          w="250px"
          margins="0px"
          textAlign="center"
          _hover={{
            transform: "scale(1.05)",
            borderWidth: "2px",
            borderColor: "green.800",
            borderRadius: "xl",
          }}
        >
          <CardBody
            border="0.2px"
            h="100%"
            w="100%"
            backgroundColor="darkseagreen"
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
              maxW={{ base: "40%", sm: "260px" }}
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
              >
                <Flex gap={2} justify="center" wrap="wrap">
                  {recipe.recipe.healthLabels
                    .filter((label) => label.includes("Vegetarian"))
                    .map((filteredLabel) => (
                      <Tag
                        key={filteredLabel}
                        textTransform="uppercase"
                        bgColor="yellow"
                        color="grey"
                      >
                        Vegetarian
                      </Tag>
                    ))}
                  {recipe.recipe.healthLabels
                    .filter((label) => label.includes("Vegan"))
                    .map((filteredLabel) => (
                      <Tag
                        key={filteredLabel}
                        textTransform="uppercase"
                        bgColor="yellow"
                        color="grey"
                      >
                        Vegan
                      </Tag>
                    ))}
                </Flex>
              </Text>
              <Flex gap={2} justify="center" wrap="wrap">
                {recipe.recipe.dietLabels.map((dietLabels) => (
                  <Tag
                    key={dietLabels}
                    textTransform="uppercase"
                    bgColor="lightgreen"
                    color="white"
                  >
                    {dietLabels}
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
                {recipe.recipe.cautions.map((cautions) => (
                  <Tag
                    key={recipe.cautions}
                    textTransform="uppercase"
                    fontWeight="bold"
                    bgColor="red.200"
                    color="red.600"
                  >
                    {cautions}
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