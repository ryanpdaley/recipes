import "./Recipe.css";
import { useEffect, useState } from "react";
import { Page, AppProvider, Card } from "@shopify/polaris";
import translations from "./translations/en.json";
import sampleRecipe from "../../sampleRecipe.json";
import RecipeHead from "../RecipeHead/RecipeHead";
import RecipeBody from "../RecipeBody/RecipeBody";

function Recipe() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [shoppingListState, setShoppingListState] = useState(false);
  useEffect(() => {
    setShoppingListState(checkedItems.length === 0);
  }, [checkedItems]);
  const recipe = sampleRecipe;

  const logList = () => {
    console.log(checkedItems);
  };

  return (
    <AppProvider i18n={translations}>
      <Page
        backAction={{ content: "Back", url: "#" }}
        title={recipe.info.title}
        primaryAction={{
          content: "Print Recipe",
        }}
        secondaryActions={[
          {
            content: "Shopping List",
            disabled: shoppingListState,
            helpText: "Selected ingredients appear here.",
            onAction: logList,
          },
        ]}
      >
        <Card>
          <RecipeHead recipeInfo={recipe.info} />
          <RecipeBody
            recipe={recipe}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
          />
        </Card>
      </Page>
    </AppProvider>
  );
}

export default Recipe;
