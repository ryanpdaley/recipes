import { VerticalStack, Checkbox, Text } from "@shopify/polaris";
import { RecipeIngredientsProps } from "../../../../types";

const RecipeIngredients = ({ recipeIngredients }: RecipeIngredientsProps) => {
  return (
    <VerticalStack gap="1">
      <Text variant="headingMd" as="h6">
        Ingredients:
      </Text>
      {recipeIngredients.map((ingredient) => {
        const qualifierString =
          ingredient.qualifierString !== null
            ? ` (${ingredient.qualifierString})`
            : "";
        const label = `${ingredient.measurement} ${ingredient.measurementUnit} ${ingredient.name}${qualifierString}`;
        return <Checkbox label={label} key={ingredient.name} />;
      })}
    </VerticalStack>
  );
};

export default RecipeIngredients;
