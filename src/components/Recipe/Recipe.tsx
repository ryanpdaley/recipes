import "./../../styles.css";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Page,
  AppProvider,
  Card,
  Button,
  Text,
  VerticalStack,
  HorizontalStack,
} from "@shopify/polaris";
import { PrintMajor, CartMajor } from "@shopify/polaris-icons";
import translations from "./translations/en.json";
import sampleRecipe from "../../sampleRecipe.json";
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
    return (
      <Button icon={PrintMajor} outline>
        Print Recipe
      </Button>
    );
  }, []);

  const reactToPrintTriggerShoppingList = useCallback(() => {
    return (
      <Button disabled={shoppingListState} icon={CartMajor} outline>
        Print Shopping List
      </Button>
    );
  }, [shoppingListState]);

  const title = recipe.info.title;

  return (
    <>
      <AppProvider i18n={translations}>
        <Page backAction={{ content: "Back", url: "#" }}>
          <div ref={componentRefRecipe}>
            <div className="recipe-title">
              <Text variant="heading3xl" as="h2">
                {title}
              </Text>
            </div>
            <Card>
              <VerticalStack>
                <RecipeHead recipeInfo={recipe.info} />
                <div className="recipe-print-container">
                  <HorizontalStack>
                    <div className="recipe-print-button">
                      <ReactToPrint
                        content={reactToPrintContentRecipe}
                        documentTitle={title.replace(/\s/g, "")}
                        trigger={reactToPrintTriggerRecipe}
                      />
                    </div>
                    <div className="recipe-print-button">
                      <ReactToPrint
                        content={reactToPrintContentShoppingList}
                        documentTitle={`${title.replace(
                          /\s/g,
                          ""
                        )}-ShoppingList`}
                        trigger={reactToPrintTriggerShoppingList}
                      />
                    </div>
                  </HorizontalStack>
                </div>
                <RecipeBody
                  recipe={recipe}
                  checkedItems={checkedItems}
                  setCheckedItems={setCheckedItems}
                />
              </VerticalStack>
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
