export interface Recipe {
  info: RecipeInfo;
  ingredients: IngredientSection[];
  directions: string[];
}

interface RecipeInfo {
  title: string;
  makes?: null | string;
  prepTime?: null | { value: number; unit: string };
  cookTime?: null | { value: number; unit: string };
  description?: null | string;
  source?: null | { label: string; url: null | string };
}

interface IngredientSection {
  subHeading?: null | string;
  items: Ingredient[];
}

export interface Measurement {
  measurement: null | number[] | number;
}

interface Ingredient {
  name: string;
  measurement?: null | number[] | number;
  measurementUnit?: null | string;
  qualifierString?: null | string;
  isConvertibleUnit?: boolean;
  isOptional?: boolean;
}

export interface fractionMap {
  [key: number]: number;
}

export interface SelectedRecipe {
  title: string;
  src: string;
  route: string;
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
};

export type RecipeBodyProps = {
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

export type RecipeListProps = {
  setSelectedRecipe: (selectedRecipe: SelectedRecipe) => void;
  recipeInfo: SelectedRecipe[];
};

export type SelectedRecipeProps = {
  selectedRecipe: {
    title: string;
    src: string;
  };
};

export type GaEventObj = {
  category: "userAction" | "networkEvent" | "version";
  action: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
  transport?: "beacon" | "xhr" | "image";
};

export type GaPageviewObj = {
  hitType: string;
  page: string;
  title: string;
};
