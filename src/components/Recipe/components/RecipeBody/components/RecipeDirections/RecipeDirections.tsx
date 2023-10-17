import { BlockStack, Text, List } from "@shopify/polaris";
import type { recipeDirectionsProps } from "../../../../../../types";

const RecipeDirections = ({ recipeDirections }: recipeDirectionsProps) => {
  return (
    <BlockStack gap="100">
      <Text variant="headingMd" as="h6">
        Directions:
      </Text>
      <List type="number">
        {recipeDirections.map((direction, index) => {
          return <List.Item key={index}>{direction}</List.Item>;
        })}
      </List>
    </BlockStack>
  );
};
export default RecipeDirections;
