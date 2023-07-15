import { VerticalStack, Text, List } from "@shopify/polaris";
import type { recipeDirectionsProps } from "../../../../../../types";

const RecipeDirections = ({ recipeDirections }: recipeDirectionsProps) => {
  return (
    <VerticalStack gap="1">
      <Text variant="headingMd" as="h6">
        Directions:
      </Text>
      <List type="number">
        {recipeDirections.map((direction, index) => {
          return <List.Item key={index}>{direction}</List.Item>;
        })}
      </List>
    </VerticalStack>
  );
};
export default RecipeDirections;
