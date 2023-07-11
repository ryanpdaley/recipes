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
  const componentRef = useRef<HTMLDivElement>(null);
  const [shoppingListState, setShoppingListState] = useState(false);
  useEffect(() => {
    setShoppingListState(checkedItems.length === 0);
  }, [checkedItems, recipe]);

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, []);

  const reactToPrintTrigger = useCallback(() => {
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
          <Card>
            <RecipeHead recipeInfo={recipe.info} />
            <ReactToPrint
              content={reactToPrintContent}
              documentTitle="AwesomeFileName"
              trigger={reactToPrintTrigger}
            />
            <RecipeBody
              recipe={recipe}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
            />
          </Card>
        </Page>
      </AppProvider>
      <div style={{ display: "none" }}>
        <div ref={componentRef}>
          <ShoppingList recipe={recipe} ingredients={checkedItems} />
        </div>
      </div>
    </>
  );
}

export default Recipe;
