import RecipeList from "./components/RecipeList/RecipeList";
import { AppProvider, CallbackAction, Page } from "@shopify/polaris";
import translations from "./translations/en.json";
import Recipe from "./components/Recipe/Recipe";
import { useEffect, useState } from "react";
import recipeInfo from "./recipes.json";
import { eventGA } from "./lib/ga";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
const helmet = require("react-helmet");
const { Helmet } = helmet;

const initialState = {
  title: "Initial",
  src: "initial",
  route: "initial",
};

const parseRoute = (route: string | undefined) => {
  if (route === undefined) {
    return initialState;
  } else {
    const foundRoute = recipeInfo.filter((recipe) => {
      return recipe.route === route.toLowerCase();
    });
    return foundRoute.length === 1 ? foundRoute[0] : initialState;
  }
};

const RecipeChild = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [view, setView] = useState("recipeListView");
  const [selectedRecipe, setSelectedRecipe] = useState(parseRoute(id));

  const backAction =
    view === "recipeView"
      ? ({
          content: "Back",
          onAction: () => {
            eventGA({ category: "userAction", action: "backButtonClick" });
            setView("recipeListView");
            setSelectedRecipe(initialState);
            navigate("/");
          },
        } as CallbackAction)
      : undefined;

  useEffect(() => {
    if (selectedRecipe !== initialState) {
      eventGA({
        category: "userAction",
        action: "recipeSelected",
        label: selectedRecipe.title,
      });
      setView("recipeView");
    }
  }, [selectedRecipe]);

  return (
    <AppProvider i18n={translations}>
      <Page title="Ryan's Recipes" backAction={backAction}>
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

const Recipes = () => {
  return (
    <>
      <Helmet />
      <Routes>
        <Route path="/" element={<RecipeChild />}></Route>
        <Route path="/:id" element={<RecipeChild />}></Route>
      </Routes>
    </>
  );
};
export default Recipes;
