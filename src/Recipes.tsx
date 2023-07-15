import RecipeList from "./components/RecipeList/RecipeList";
import { AppProvider, CallbackAction, Page } from "@shopify/polaris";
import translations from "./translations/en.json";
import Recipe from "./components/Recipe/Recipe";
import { useEffect, useState } from "react";
import recipeInfo from "./recipes.json";

const initialState = {
  title: "Initial",
  src: "initial",
};

const Recipes = () => {
  const [view, setView] = useState("recipeListView");
  const [selectedRecipe, setSelectedRecipe] = useState(initialState);

  const backView =
    view === "recipeView"
      ? ({
          content: "Back",
          onAction: () => {
            setView("recipeListView");
            setSelectedRecipe(initialState);
          },
        } as CallbackAction)
      : undefined;

  useEffect(() => {
    if (selectedRecipe !== initialState) {
      setView("recipeView");
    }
  }, [selectedRecipe]);

  return (
    <AppProvider i18n={translations}>
      <Page title="Ryan's Recipes" backAction={backView}>
        {view === "recipeListView" && (
          <RecipeList
            recipeInfo={recipeInfo}
            setSelectedRecipe={setSelectedRecipe}
          />
        )}
        {view === "recipeView" && <Recipe selectedRecipe={selectedRecipe} />}
      </Page>
    </AppProvider>
  );
};
export default Recipes;
