interface Recipe {
  info: RecipeInfo;
  ingredients: IngredientSection[];
  directions: string[];
}

interface RecipeInfo {
  title: string;
  makes: null | string;
  prepTime: null | { value: number; unit: string };
  cookTime: null | { value: number; unit: string };
  description: null | string;
  source: null | { label: string; url: null | string };
}

interface IngredientSection {
  subHeading: null | string;
  items: Ingredient[];
}

export interface Measurement {
  measurement: null | number[] | number;
}

interface Ingredient {
  name: string;
  measurement: null | number[] | number;
  measurementUnit: null | string;
  qualifierString: null | string;
  isConvertibleUnit: boolean;
  isOptional?: boolean;
}

export interface fractionMap {
  [key: number]: number;
}

export type recipeDirectionsProps = { recipeDirections: string[] };

export type RecipeIngredientsProps = {
  recipeIngredients: IngredientSection[];
  checkedItems: string[];
  setCheckedItems: (val: string[]) => void;
};

export type RecipeInfoProps = { recipeInfo: RecipeInfo };

export type RecipeProps = {
  recipe: Recipe;
  checkedItems: string[];
  setCheckedItems: (val: string[]) => void;
};

export type IngredientItem = Ingredient;

export type IngredientSectionProps = {
  ingredientSection: IngredientSection;
  checkedItems: string[];
  setCheckedItems: (val: string[]) => void;
};
