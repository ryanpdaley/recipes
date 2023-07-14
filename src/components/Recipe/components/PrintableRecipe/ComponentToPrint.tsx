import { AppProvider, Checkbox, Page, Text } from "@shopify/polaris";
import { Recipe } from "../../../../types";
import translations from "../../translations/en.json";
import RecipeHead from "../RecipeHead/RecipeHead";
import "../../../../styles.css";

type ShoppingListProps = {
  recipe: Recipe;
  ingredients: string[];
};

const ShoppingList = ({ recipe, ingredients }: ShoppingListProps) => {
  return (
    <AppProvider i18n={translations}>
      <Page title={recipe.info.title}>
        <RecipeHead recipeInfo={recipe.info} />
        <div className="shopping-list-container">
          <Text variant="headingMd" as="h2">
            Shopping List:
          </Text>
          {ingredients.map((ingredient, index) => {
            return (
              <div key={index} className="shopping-list-item">
                <Checkbox label={ingredient} checked={false} />
              </div>
            );
          })}
        </div>
      </Page>
    </AppProvider>
  );
};

export default ShoppingList;
