import "./Recipe.css";
import { Page, Button, AppProvider, Card } from "@shopify/polaris";
import translations from "./translations/en.json";
import sampleRecipe from "../../sampleRecipe.json";
import RecipeHead from "../RecipeHead/RecipeHead";
import RecipeBody from "../RecipeBody/RecipeBody";

function Recipe() {
  const recipe = sampleRecipe;
  return (
    <AppProvider i18n={translations}>
      <Page
        backAction={{ content: "Back", url: "#" }}
        title={recipe.info.title}
        primaryAction={
          <Button
            primary
            connectedDisclosure={{
              accessibilityLabel: "Other save actions",
              actions: [{ content: "Save as new" }],
            }}
          >
            Save
          </Button>
        }
      >
        <Card>
          <RecipeHead recipeInfo={recipe.info} />
          <RecipeBody recipe={recipe} />
        </Card>
      </Page>
    </AppProvider>
  );
}

export default Recipe;
