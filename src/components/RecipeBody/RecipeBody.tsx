import { HorizontalGrid } from "@shopify/polaris";
import { RecipeProps } from "../../types";
import RecipeIngredients from "./components/RecipeIngredients/RecipeIngredients";
import RecipeDirections from "./components/RecipeDirections/RecipeDirections";

const RecipeBody = ({ recipe }: RecipeProps) => {
  return (
    <div className="recipe-body">
      <HorizontalGrid gap="4" columns={["oneThird", "twoThirds"]}>
        <RecipeIngredients recipeIngredients={recipe.ingredients} />
        <RecipeDirections recipeDirections={recipe.directions} />
      </HorizontalGrid>
    </div>
  );
};
export default RecipeBody;
