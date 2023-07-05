interface Recipe {
  info: RecipeInfo;
  ingredients: Ingredient[];
  directions: string[];
}

interface RecipeInfo {
  title: string;
  makes: string;
  prepTime: { value: number; unit: string };
  cookTime: { value: number; unit: string };
  description: string;
}

interface Ingredient {
  name: string;
  measurement: number;
  measurementUnit: string;
  qualifierString: string | null;
  isConvertibleUnit: boolean;
}

export type recipeDirectionsProps = { recipeDirections: string[] };
export type RecipeIngredientsProps = { recipeIngredients: Ingredient[] };
export type RecipeInfoProps = { recipeInfo: RecipeInfo };
export type RecipeProps = { recipe: Recipe };
