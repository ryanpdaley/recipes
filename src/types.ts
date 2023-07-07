interface Recipe {
  info: RecipeInfo;
  ingredients: Ingredient[];
  directions: string[];
}

interface RecipeInfo {
  title: string;
  makes: null | string;
  prepTime: null | { value: number; unit: string };
  cookTime: null | { value: number; unit: string };
  description: string;
}

interface Ingredient {
  name: string;
  measurement: number;
  measurementUnit: string;
  qualifierString: null | string;
  isConvertibleUnit: boolean;
}

export interface fractionMap {
  [key: number]: number;
}

export type recipeDirectionsProps = { recipeDirections: string[] };
export type RecipeIngredientsProps = {
  recipeIngredients: Ingredient[];
  checkedItems: string[];
  setCheckedItems: (val: string[]) => void;
};

export type RecipeInfoProps = { recipeInfo: RecipeInfo };
export type RecipeProps = {
  recipe: Recipe;
  checkedItems: string[];
  setCheckedItems: (val: string[]) => void;
};
export type IngredientItem = { item: Ingredient };
