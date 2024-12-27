import { Flex, Tag } from "@chakra-ui/react";

export const HealthLabels = ({ healthLabels, filters, tagStyle }) => {
  return (
    <Flex gap={2} justify="left" wrap="wrap">
      {filters.map((filter) =>
        healthLabels
          .filter((label) => label.includes(filter))
          .map((filteredLabel, index) => (
            <Tag
              key={`${filteredLabel}-${filter}-${index}`}
              textTransform="uppercase"
              bgColor={tagStyle.bgColor}
              color={tagStyle.color}
            >
              {filter}
            </Tag>
          ))
      )}
    </Flex>
  );
};
