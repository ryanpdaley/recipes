import { HorizontalGrid } from "@shopify/polaris";
import { RecipeProps } from "../../../../types";
import RecipeIngredients from "./components/RecipeIngredients/RecipeIngredients";
import RecipeDirections from "./components/RecipeDirections/RecipeDirections";

const RecipeBody = ({ recipe, checkedItems, setCheckedItems }: RecipeProps) => {
  return (
    <div className="recipe-body">
      <HorizontalGrid gap="2" columns={["oneThird", "twoThirds"]}>
        <RecipeIngredients
          recipeIngredients={recipe.ingredients}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />
        <RecipeDirections recipeDirections={recipe.directions} />
      </HorizontalGrid>
    </div>
  );
};
export default RecipeBody;
