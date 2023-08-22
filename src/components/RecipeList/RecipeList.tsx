import { Card, List, Link } from "@shopify/polaris";
import { RecipeListProps, SelectedRecipe } from "../../types";
import { Key } from "react";
import { useNavigate } from "react-router-dom";
const EmptyState = () => {
  return <div>Empty</div>;
};

const RecipeListView = ({ recipeInfo, setSelectedRecipe }: RecipeListProps) => {
  const navigate = useNavigate();
  return (
    <List type="bullet">
      {recipeInfo.map(
        (recipe: SelectedRecipe, index: Key | null | undefined) => {
          return (
            <List.Item key={index}>
              <Link
                onClick={() => {
                  setSelectedRecipe(recipe);
                  navigate(`/${recipe.route}`);
                }}
              >
                {recipe.title}
              </Link>
            </List.Item>
          );
        }
      )}
    </List>
  );
};

const RecipeList = ({ recipeInfo, setSelectedRecipe }: RecipeListProps) => {
  return (
    <Card>
      {recipeInfo.length !== 0 ? (
        <RecipeListView
          recipeInfo={recipeInfo}
          setSelectedRecipe={setSelectedRecipe}
        />
      ) : (
        <EmptyState />
      )}
    </Card>
  );
};

export default RecipeList;
