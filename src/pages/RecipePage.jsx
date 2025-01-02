import {
  Card,
  Box,
  Center,
  CardBody,
  Heading,
  Flex,
  Button,
  Text,
  Image,
  Stack,
  SimpleGrid,
  Tag,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <>
      <Button
        w="fit-content"
        backgroundColor="purple.400"
        color="white"
        onClick={() => clickFn()}
        alignContent="center"
        margin="1rem"
      >
        Back to Main Recipe List
      </Button>
      <Center>
        <Card
          alignContent="center"
          marginTop="1rem"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="inline"
          h="auto"
          w={{ base: "100%", sm: "70%", md: "70%" }}
        >
          <CardBody backgroundColor="orange.300" padding="0px">
            <Image
              w="100%"
              h="xs"
              objectFit="cover"
              position="relative"
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
              justifyContent="top"
              alignItems="center"
            />

            <SimpleGrid
              columns={2}
              width="100%"
              alignItems="left"
              justify="left"
              align="left"
            >
              <Box padding="15px">
                <Stack direction="column" spacing="2px">
                  <Text
                    textTransform="uppercase"
                    pt="2"
                    fontSize="s"
                    textAlign="left"
                    color="white"
                    marginTop="0px"
                  >
                    {recipe.recipe.mealType}
                  </Text>
                  <Heading
                    fontSize={{ base: 25, sm: 30, md: 40 }}
                    minWidth={100}
                    textAlign="left"
                    w="100%"
                  >
                    {recipe.recipe.label}
                  </Heading>
                  <Box>
                    <Text
                      pt="3"
                      fontSize="s"
                      textAlign="left"
                      color="black"
                      margin="0px"
                    >
                      Total cooking time:{" "}
                      <b>{recipe.recipe.totalTime} minutes </b>
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      pt="3"
                      fontSize="s"
                      textAlign="left"
                      color="black"
                      margin="0px"
                    >
                      Servings: <b>{recipe.recipe.yield} </b>
                    </Text>
                  </Box>
                  <Box>
                    <Flex>
                      <Text
                        pt="3"
                        fontSize="s"
                        textAlign="left"
                        color="black"
                        margin="0px"
                        minWidth={100}
                      >
                        <b>Ingredients: </b>
                      </Text>
                    </Flex>
                    <Flex direction="column" gap={2} justify="left">
                      {recipe.recipe.ingredientLines.map(
                        (filteredLabel, index) => (
                          <Text
                            key={`ingredientLines-${index}`}
                            color="black"
                            fontSize="xs"
                          >
                            {filteredLabel}
                          </Text>
                        )
                      )}
                    </Flex>
                  </Box>
                </Stack>
              </Box>

              <Box padding="15px" marginTop="0px">
                <Stack direction="column" spacing="2px">
                  <Text
                    pt="3"
                    fontSize="s"
                    textAlign="left"
                    fontWeight="bold"
                    color="black"
                  >
                    Health Labels:
                  </Text>
                  <Flex gap={2} justify="left" wrap="wrap">
                    {recipe.recipe.healthLabels.map((filteredLabel, index) => (
                      <Tag
                        key={`healthLabels-${index}`}
                        textTransform="uppercase"
                        bgColor="lightpurple"
                        color="purple"
                        fontSize="xs"
                      >
                        {filteredLabel}
                      </Tag>
                    ))}
                  </Flex>

                  {recipe.recipe.dietLabels?.length > 0 && (
                    <Text
                      pt="3"
                      fontSize="s"
                      textAlign="left"
                      fontWeight="bold"
                      color="black"
                    >
                      Diet:
                    </Text>
                  )}
                  <Flex gap={2} justify="left" wrap="wrap">
                    {recipe.recipe.dietLabels.map((filteredLabel, index) => (
                      <Tag
                        key={`dietLabels-${index}`}
                        textTransform="uppercase"
                        bgColor="lightgreen"
                        color="green"
                        fontSize="xs"
                      >
                        {filteredLabel}
                      </Tag>
                    ))}
                  </Flex>

                  {recipe.recipe.cautions?.length > 0 && (
                    <Text
                      pt="3"
                      fontSize="s"
                      textAlign="left"
                      fontWeight="bold"
                      color="black"
                    >
                      Cautions:
                    </Text>
                  )}
                  <Flex gap={2} justify="left" wrap="wrap">
                    {recipe.recipe.cautions.map((filteredLabel, index) => (
                      <Tag
                        key={`cautions-${index}`}
                        textTransform="uppercase"
                        bgColor="red.200"
                        color="red.600"
                        fontSize="xs"
                      >
                        {filteredLabel}
                      </Tag>
                    ))}
                  </Flex>

                  <Text pt="3" fontSize="s" textAlign="left" color="black">
                    <b>Total nutrients:</b>
                  </Text>
                  <Flex
                    gap={3}
                    justify="left"
                    wrap="wrap"
                    direction={{ base: "column", sm: "row" }}
                  >
                    <Box
                      backgroundColor="white"
                      paddingLeft="5px"
                      paddingRight="5px"
                    >
                      {Math.round(
                        recipe.recipe.totalNutrients.ENERC_KCAL.quantity
                      )}
                      {recipe.recipe.totalNutrients.ENERC_KCAL.unit}
                      <Text
                        pt="1"
                        fontSize="xs"
                        textAlign="left"
                        fontWeight="bold"
                        color="black"
                        textTransform="uppercase"
                      >
                        Calories
                      </Text>
                    </Box>
                    <Box
                      backgroundColor="white"
                      paddingLeft="5px"
                      paddingRight="5px"
                    >
                      {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)}
                      {recipe.recipe.totalNutrients.CHOCDF.unit}
                      <Text
                        pt="1"
                        fontSize="xs"
                        textAlign="left"
                        fontWeight="bold"
                        textTransform="uppercase"
                        color="black"
                        margin="0px"
                      >
                        Carbs
                      </Text>
                    </Box>
                    <Box
                      backgroundColor="white"
                      paddingLeft="5px"
                      paddingRight="5px"
                    >
                      {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)}
                      {recipe.recipe.totalNutrients.PROCNT.unit}
                      <Text
                        pt="1"
                        fontSize="xs"
                        textAlign="left"
                        fontWeight="bold"
                        textTransform="uppercase"
                        color="black"
                        margin="0px"
                      >
                        Protein
                      </Text>
                    </Box>
                    <Box
                      backgroundColor="white"
                      paddingLeft="5px"
                      paddingRight="5px"
                    >
                      {Math.round(recipe.recipe.totalNutrients.FAT.quantity)}
                      {recipe.recipe.totalNutrients.FAT.unit}
                      <Text
                        pt="1"
                        fontSize="xs"
                        textAlign="left"
                        fontWeight="bold"
                        textTransform="uppercase"
                        color="black"
                        margin="0px"
                      >
                        Fat
                      </Text>
                    </Box>
                    <Box
                      backgroundColor="white"
                      paddingLeft="5px"
                      paddingRight="5px"
                    >
                      {Math.round(recipe.recipe.totalNutrients.CHOLE.quantity)}
                      {recipe.recipe.totalNutrients.CHOLE.unit}
                      <Text
                        pt="1"
                        fontSize="xs"
                        textAlign="left"
                        fontWeight="bold"
                        textTransform="uppercase"
                        color="black"
                        margin="0px"
                      >
                        Cholesterol
                      </Text>
                    </Box>
                    <Box
                      backgroundColor="white"
                      paddingLeft="5px"
                      paddingRight="5px"
                    >
                      {Math.round(recipe.recipe.totalNutrients.NA.quantity)}
                      {recipe.recipe.totalNutrients.NA.unit}
                      <Text
                        pt="1"
                        fontSize="xs"
                        textAlign="left"
                        fontWeight="bold"
                        textTransform="uppercase"
                        color="black"
                        margin="0px"
                      >
                        Sodium
                      </Text>
                    </Box>
                  </Flex>
                </Stack>
              </Box>
            </SimpleGrid>
          </CardBody>
        </Card>
      </Center>
    </>
  );
};
