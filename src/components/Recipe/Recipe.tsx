import "./Recipe.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { Page, AppProvider, Card, Button } from "@shopify/polaris";
import translations from "./translations/en.json";
import sampleRecipe from "../../sampleRecipe5.json";
import RecipeHead from "../RecipeHead/RecipeHead";
import RecipeBody from "../RecipeBody/RecipeBody";
import ReactToPrint from "react-to-print";
import ShoppingList from "../PrintableRecipe/ComponentToPrint";

function Recipe() {
  const recipe = sampleRecipe;
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const componentRefRecipe = useRef<HTMLDivElement>(null);
  const componentRefShoppingList = useRef<HTMLDivElement>(null);
  const [shoppingListState, setShoppingListState] = useState(false);
  useEffect(() => {
    setShoppingListState(checkedItems.length === 0);
  }, [checkedItems, recipe]);

  const reactToPrintContentRecipe = useCallback(() => {
    return componentRefRecipe.current;
  }, []);

  const reactToPrintContentShoppingList = useCallback(() => {
    return componentRefShoppingList.current;
  }, []);

  const reactToPrintTriggerRecipe = useCallback(() => {
    return <Button outline>Print Recipe</Button>;
  }, []);

  const reactToPrintTriggerShoppingList = useCallback(() => {
    return (
      <Button disabled={shoppingListState} outline>
        Print Shopping List
      </Button>
    );
  }, [shoppingListState]);

  return (
    <>
      <AppProvider i18n={translations}>
        <Page
          backAction={{ content: "Back", url: "#" }}
          title={recipe.info.title}
        >
          <div ref={componentRefRecipe}>
            <Card>
              <RecipeHead recipeInfo={recipe.info} />
              <ReactToPrint
                content={reactToPrintContentRecipe}
                documentTitle="AwesomeFileName"
                trigger={reactToPrintTriggerRecipe}
              />
              <ReactToPrint
                content={reactToPrintContentShoppingList}
                documentTitle="AwesomeFileName"
                trigger={reactToPrintTriggerShoppingList}
              />
              <RecipeBody
                recipe={recipe}
                checkedItems={checkedItems}
                setCheckedItems={setCheckedItems}
              />
            </Card>
          </div>
        </Page>
      </AppProvider>
      <div style={{ display: "none" }}>
        <div ref={componentRefShoppingList}>
          <ShoppingList recipe={recipe} ingredients={checkedItems} />
        </div>
      </div>
    </>
  );
}

export default Recipe;
