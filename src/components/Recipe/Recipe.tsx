import "./../../styles.css";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Card,
  Button,
  Text,
  VerticalStack,
  HorizontalStack,
} from "@shopify/polaris";
import { PrintMajor, CartMajor } from "@shopify/polaris-icons";
import RecipeHead from "./components/RecipeHead/RecipeHead";
import {
  MobileRecipeBodyComponent,
  RecipeBodyComponent,
} from "./components/RecipeBody/RecipeBody";
import ReactToPrint from "react-to-print";
import ShoppingList from "./components/PrintableRecipe/ComponentToPrint";
import { SelectedRecipeProps } from "../../types";
import { useMediaQuery } from "react-responsive";
import { MAX_MOBILE_WIDTH_PX } from "../../constants";

function Recipe({ selectedRecipe }: SelectedRecipeProps) {
  const [recipe, setRecipe] = useState(null);
  const title = selectedRecipe.title;
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width:${MAX_MOBILE_WIDTH_PX}px)`,
  });

  const getRecipe = async (file: string) => {
    const localPath = `../../data/${file}`;
    const response = await fetch(localPath);
    if (!response.ok) {
      throw new Error("Data could not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    getRecipe(selectedRecipe.src)
      .then((res) => {
        setRecipe(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [selectedRecipe.src]);

  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const componentRefRecipe = useRef<HTMLDivElement>(null);
  const componentRefShoppingList = useRef<HTMLDivElement>(null);
  const [shoppingListState, setShoppingListState] = useState(false);
  useEffect(() => {
    setShoppingListState(checkedItems.length === 0);
  }, [checkedItems]);

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

  return (
    <>
      <div className="recipe-title">
        <Text variant="heading3xl" as="h2">
          {title}
        </Text>
      </div>
      <Card>
        {recipe !== null && (
          <VerticalStack>
            <RecipeHead recipeInfo={recipe["info"]} />
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
                    documentTitle={`${title.replace(/\s/g, "")}-ShoppingList`}
                    trigger={reactToPrintTriggerShoppingList}
                  />
                </div>
              </HorizontalStack>
            </div>
            <div className="recipe-body">
              {isTabletOrMobile ? (
                <MobileRecipeBodyComponent
                  recipe={recipe}
                  checkedItems={checkedItems}
                  setCheckedItems={setCheckedItems}
                />
              ) : (
                <RecipeBodyComponent
                  recipe={recipe}
                  checkedItems={checkedItems}
                  setCheckedItems={setCheckedItems}
                />
              )}
            </div>
          </VerticalStack>
        )}
      </Card>
      <div style={{ display: "none" }}>
        <div ref={componentRefRecipe}>
          {recipe !== null && (
            <>
              <div className="recipe-title">
                <Text variant="heading3xl" as="h2">
                  {title}
                </Text>
              </div>
              <Card>
                {recipe !== null && (
                  <VerticalStack>
                    <RecipeHead recipeInfo={recipe["info"]} />
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
                    <div className="recipe-body">
                      <RecipeBodyComponent
                        recipe={recipe}
                        checkedItems={checkedItems}
                        setCheckedItems={setCheckedItems}
                      />
                    </div>
                  </VerticalStack>
                )}
              </Card>
            </>
          )}
        </div>
      </div>
      <div style={{ display: "none" }}>
        <div ref={componentRefShoppingList}>
          {recipe !== null && (
            <ShoppingList recipe={recipe} ingredients={checkedItems} />
          )}
        </div>
      </div>
    </>
  );
}

export default Recipe;
