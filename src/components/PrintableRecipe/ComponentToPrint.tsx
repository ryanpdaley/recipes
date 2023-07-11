import { AppProvider, Page, Text } from "@shopify/polaris";
import { Recipe } from "../../types";
import translations from "../../components/Recipe/translations/en.json";
import RecipeHead from "../RecipeHead/RecipeHead";
import "../Recipe/Recipe.css";

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
          <Text variant="headingMd" as="h4">
            Shopping List:
          </Text>
          {ingredients.map((ingredient, index) => {
            return (
              <div key={index} className="shopping-list-item">
                <Text variant="headingSm" as="p">
                  [ ] {ingredient}
                </Text>
              </div>
            );
          })}
        </div>
      </Page>
    </AppProvider>
  );
};

export default ShoppingList;
