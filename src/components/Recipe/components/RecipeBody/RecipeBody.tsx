import { HorizontalGrid, VerticalStack } from "@shopify/polaris";
import { RecipeBodyProps } from "../../../../types";
import RecipeIngredients from "./components/RecipeIngredients/RecipeIngredients";
import RecipeDirections from "./components/RecipeDirections/RecipeDirections";

export const MobileRecipeBodyComponent = ({
  recipe,
  checkedItems,
  setCheckedItems,
}: RecipeBodyProps) => {
  return (
    <VerticalStack gap="5">
      <RecipeIngredients
        recipeIngredients={recipe.ingredients}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
      />
      <RecipeDirections recipeDirections={recipe.directions} />
    </VerticalStack>
  );
};
export const RecipeBodyComponent = ({
  recipe,
  checkedItems,
  setCheckedItems,
}: RecipeBodyProps) => {
  return (
    <HorizontalGrid gap="2" columns={["oneThird", "twoThirds"]}>
      <RecipeIngredients
        recipeIngredients={recipe.ingredients}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
      />
      <RecipeDirections recipeDirections={recipe.directions} />
    </HorizontalGrid>
  );
};
