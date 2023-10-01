/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRecipeSourceInput = {
  label?: string | null,
  url?: string | null,
};

export type RecipeSource = {
  __typename: "RecipeSource",
  id: string,
  label?: string | null,
  url?: string | null,
};

export type UpdateRecipeSourceInput = {
  id: string,
  label?: string | null,
  url?: string | null,
};

export type DeleteRecipeSourceInput = {
  id: string,
};

export type CreateRecipeIngredientInput = {
  name: string,
  measurement?: Array< number | null > | null,
  measurementUnit?: string | null,
  qualifierString?: string | null,
  isConvertibleUnit?: boolean | null,
  isOptional?: boolean | null,
};

export type RecipeIngredient = {
  __typename: "RecipeIngredient",
  id: string,
  name: string,
  measurement?: Array< number | null > | null,
  measurementUnit?: string | null,
  qualifierString?: string | null,
  isConvertibleUnit?: boolean | null,
  isOptional?: boolean | null,
};

export type UpdateRecipeIngredientInput = {
  id: string,
  name?: string | null,
  measurement?: Array< number | null > | null,
  measurementUnit?: string | null,
  qualifierString?: string | null,
  isConvertibleUnit?: boolean | null,
  isOptional?: boolean | null,
};

export type DeleteRecipeIngredientInput = {
  id: string,
};

export type CreateRecipeIngredientsListInput = {
  subHeading?: string | null,
};

export type RecipeIngredientsList = {
  __typename: "RecipeIngredientsList",
  id: string,
  subHeading?: string | null,
  items?:  Array<RecipeIngredient | null > | null,
};

export type UpdateRecipeIngredientsListInput = {
  id: string,
  subHeading?: string | null,
};

export type DeleteRecipeIngredientsListInput = {
  id: string,
};

export type CreateRecipeTimeInput = {
  value?: number | null,
  unit?: string | null,
};

export type RecipeTime = {
  __typename: "RecipeTime",
  id: string,
  value?: number | null,
  unit?: string | null,
};

export type UpdateRecipeTimeInput = {
  id: string,
  value?: number | null,
  unit?: string | null,
};

export type DeleteRecipeTimeInput = {
  id: string,
};

export type CreateRecipeInfoInput = {
  makes?: string | null,
  description?: string | null,
};

export type RecipeInfo = {
  __typename: "RecipeInfo",
  id: string,
  makes?: string | null,
  prepTime?: RecipeTime | null,
  cookTime?: RecipeTime | null,
  description?: string | null,
  source?: RecipeSource | null,
};

export type UpdateRecipeInfoInput = {
  id: string,
  makes?: string | null,
  description?: string | null,
};

export type DeleteRecipeInfoInput = {
  id: string,
};

export type CreateRecipeInput = {
  title: string,
  route: string,
  directions: Array< string | null >,
  structuredData: string,
};

export type Recipe = {
  __typename: "Recipe",
  id: string,
  title: string,
  route: string,
  info: RecipeInfo,
  ingredients: RecipeIngredientsList,
  directions: Array< string | null >,
  structuredData: string,
};

export type UpdateRecipeInput = {
  id: string,
  title?: string | null,
  route?: string | null,
  directions?: Array< string | null > | null,
  structuredData?: string | null,
};

export type DeleteRecipeInput = {
  id: string,
};

export type TableRecipeSourceFilterInput = {
  id?: TableIDFilterInput | null,
  label?: TableStringFilterInput | null,
  url?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type RecipeSourceConnection = {
  __typename: "RecipeSourceConnection",
  items?:  Array<RecipeSource | null > | null,
  nextToken?: string | null,
};

export type TableRecipeIngredientFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
  measurement?: TableIntFilterInput | null,
  measurementUnit?: TableStringFilterInput | null,
  qualifierString?: TableStringFilterInput | null,
  isConvertibleUnit?: TableBooleanFilterInput | null,
  isOptional?: TableBooleanFilterInput | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type TableBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type RecipeIngredientConnection = {
  __typename: "RecipeIngredientConnection",
  items?:  Array<RecipeIngredient | null > | null,
  nextToken?: string | null,
};

export type TableRecipeIngredientsListFilterInput = {
  id?: TableIDFilterInput | null,
  subHeading?: TableStringFilterInput | null,
};

export type RecipeIngredientsListConnection = {
  __typename: "RecipeIngredientsListConnection",
  items?:  Array<RecipeIngredientsList | null > | null,
  nextToken?: string | null,
};

export type TableRecipeTimeFilterInput = {
  id?: TableIDFilterInput | null,
  value?: TableIntFilterInput | null,
  unit?: TableStringFilterInput | null,
};

export type RecipeTimeConnection = {
  __typename: "RecipeTimeConnection",
  items?:  Array<RecipeTime | null > | null,
  nextToken?: string | null,
};

export type TableRecipeInfoFilterInput = {
  id?: TableIDFilterInput | null,
  makes?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
};

export type RecipeInfoConnection = {
  __typename: "RecipeInfoConnection",
  items?:  Array<RecipeInfo | null > | null,
  nextToken?: string | null,
};

export type TableRecipeFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
  route?: TableStringFilterInput | null,
  directions?: TableStringFilterInput | null,
};

export type RecipeConnection = {
  __typename: "RecipeConnection",
  items?:  Array<Recipe | null > | null,
  nextToken?: string | null,
};

export type CreateRecipeSourceMutationVariables = {
  input: CreateRecipeSourceInput,
};

export type CreateRecipeSourceMutation = {
  createRecipeSource?:  {
    __typename: "RecipeSource",
    id: string,
    label?: string | null,
    url?: string | null,
  } | null,
};

export type UpdateRecipeSourceMutationVariables = {
  input: UpdateRecipeSourceInput,
};

export type UpdateRecipeSourceMutation = {
  updateRecipeSource?:  {
    __typename: "RecipeSource",
    id: string,
    label?: string | null,
    url?: string | null,
  } | null,
};

export type DeleteRecipeSourceMutationVariables = {
  input: DeleteRecipeSourceInput,
};

export type DeleteRecipeSourceMutation = {
  deleteRecipeSource?:  {
    __typename: "RecipeSource",
    id: string,
    label?: string | null,
    url?: string | null,
  } | null,
};

export type CreateRecipeIngredientMutationVariables = {
  input: CreateRecipeIngredientInput,
};

export type CreateRecipeIngredientMutation = {
  createRecipeIngredient?:  {
    __typename: "RecipeIngredient",
    id: string,
    name: string,
    measurement?: Array< number | null > | null,
    measurementUnit?: string | null,
    qualifierString?: string | null,
    isConvertibleUnit?: boolean | null,
    isOptional?: boolean | null,
  } | null,
};

export type UpdateRecipeIngredientMutationVariables = {
  input: UpdateRecipeIngredientInput,
};

export type UpdateRecipeIngredientMutation = {
  updateRecipeIngredient?:  {
    __typename: "RecipeIngredient",
    id: string,
    name: string,
    measurement?: Array< number | null > | null,
    measurementUnit?: string | null,
    qualifierString?: string | null,
    isConvertibleUnit?: boolean | null,
    isOptional?: boolean | null,
  } | null,
};

export type DeleteRecipeIngredientMutationVariables = {
  input: DeleteRecipeIngredientInput,
};

export type DeleteRecipeIngredientMutation = {
  deleteRecipeIngredient?:  {
    __typename: "RecipeIngredient",
    id: string,
    name: string,
    measurement?: Array< number | null > | null,
    measurementUnit?: string | null,
    qualifierString?: string | null,
    isConvertibleUnit?: boolean | null,
    isOptional?: boolean | null,
  } | null,
};

export type CreateRecipeIngredientsListMutationVariables = {
  input: CreateRecipeIngredientsListInput,
};

export type CreateRecipeIngredientsListMutation = {
  createRecipeIngredientsList?:  {
    __typename: "RecipeIngredientsList",
    id: string,
    subHeading?: string | null,
    items?:  Array< {
      __typename: "RecipeIngredient",
      id: string,
      name: string,
      measurement?: Array< number | null > | null,
      measurementUnit?: string | null,
      qualifierString?: string | null,
      isConvertibleUnit?: boolean | null,
      isOptional?: boolean | null,
    } | null > | null,
  } | null,
};

export type UpdateRecipeIngredientsListMutationVariables = {
  input: UpdateRecipeIngredientsListInput,
};

export type UpdateRecipeIngredientsListMutation = {
  updateRecipeIngredientsList?:  {
    __typename: "RecipeIngredientsList",
    id: string,
    subHeading?: string | null,
    items?:  Array< {
      __typename: "RecipeIngredient",
      id: string,
      name: string,
      measurement?: Array< number | null > | null,
      measurementUnit?: string | null,
      qualifierString?: string | null,
      isConvertibleUnit?: boolean | null,
      isOptional?: boolean | null,
    } | null > | null,
  } | null,
};

export type DeleteRecipeIngredientsListMutationVariables = {
  input: DeleteRecipeIngredientsListInput,
};

export type DeleteRecipeIngredientsListMutation = {
  deleteRecipeIngredientsList?:  {
    __typename: "RecipeIngredientsList",
    id: string,
    subHeading?: string | null,
    items?:  Array< {
      __typename: "RecipeIngredient",
      id: string,
      name: string,
      measurement?: Array< number | null > | null,
      measurementUnit?: string | null,
      qualifierString?: string | null,
      isConvertibleUnit?: boolean | null,
      isOptional?: boolean | null,
    } | null > | null,
  } | null,
};

export type CreateRecipeTimeMutationVariables = {
  input: CreateRecipeTimeInput,
};

export type CreateRecipeTimeMutation = {
  createRecipeTime?:  {
    __typename: "RecipeTime",
    id: string,
    value?: number | null,
    unit?: string | null,
  } | null,
};

export type UpdateRecipeTimeMutationVariables = {
  input: UpdateRecipeTimeInput,
};

export type UpdateRecipeTimeMutation = {
  updateRecipeTime?:  {
    __typename: "RecipeTime",
    id: string,
    value?: number | null,
    unit?: string | null,
  } | null,
};

export type DeleteRecipeTimeMutationVariables = {
  input: DeleteRecipeTimeInput,
};

export type DeleteRecipeTimeMutation = {
  deleteRecipeTime?:  {
    __typename: "RecipeTime",
    id: string,
    value?: number | null,
    unit?: string | null,
  } | null,
};

export type CreateRecipeInfoMutationVariables = {
  input: CreateRecipeInfoInput,
};

export type CreateRecipeInfoMutation = {
  createRecipeInfo?:  {
    __typename: "RecipeInfo",
    id: string,
    makes?: string | null,
    prepTime?:  {
      __typename: "RecipeTime",
      id: string,
      value?: number | null,
      unit?: string | null,
    } | null,
    cookTime?:  {
      __typename: "RecipeTime",
      id: string,
      value?: number | null,
      unit?: string | null,
    } | null,
    description?: string | null,
    source?:  {
      __typename: "RecipeSource",
      id: string,
      label?: string | null,
      url?: string | null,
    } | null,
  } | null,
};

export type UpdateRecipeInfoMutationVariables = {
  input: UpdateRecipeInfoInput,
};

export type UpdateRecipeInfoMutation = {
  updateRecipeInfo?:  {
    __typename: "RecipeInfo",
    id: string,
    makes?: string | null,
    prepTime?:  {
      __typename: "RecipeTime",
      id: string,
      value?: number | null,
      unit?: string | null,
    } | null,
    cookTime?:  {
      __typename: "RecipeTime",
      id: string,
      value?: number | null,
      unit?: string | null,
    } | null,
    description?: string | null,
    source?:  {
      __typename: "RecipeSource",
      id: string,
      label?: string | null,
      url?: string | null,
    } | null,
  } | null,
};

export type DeleteRecipeInfoMutationVariables = {
  input: DeleteRecipeInfoInput,
};

export type DeleteRecipeInfoMutation = {
  deleteRecipeInfo?:  {
    __typename: "RecipeInfo",
    id: string,
    makes?: string | null,
    prepTime?:  {
      __typename: "RecipeTime",
      id: string,
      value?: number | null,
      unit?: string | null,
    } | null,
    cookTime?:  {
      __typename: "RecipeTime",
      id: string,
      value?: number | null,
      unit?: string | null,
    } | null,
    description?: string | null,
    source?:  {
      __typename: "RecipeSource",
      id: string,
      label?: string | null,
      url?: string | null,
    } | null,
  } | null,
};

export type CreateRecipeMutationVariables = {
  input: CreateRecipeInput,
};

export type CreateRecipeMutation = {
  createRecipe?:  {
    __typename: "Recipe",
    id: string,
    title: string,
    route: string,
    info:  {
      __typename: "RecipeInfo",
      id: string,
      makes?: string | null,
      description?: string | null,
    },
    ingredients:  {
      __typename: "RecipeIngredientsList",
      id: string,
      subHeading?: string | null,
    },
    directions: Array< string | null >,
    structuredData: string,
  } | null,
};

export type UpdateRecipeMutationVariables = {
  input: UpdateRecipeInput,
};

export type UpdateRecipeMutation = {
  updateRecipe?:  {
    __typename: "Recipe",
    id: string,
    title: string,
    route: string,
    info:  {
      __typename: "RecipeInfo",
      id: string,
      makes?: string | null,
      description?: string | null,
    },
    ingredients:  {
      __typename: "RecipeIngredientsList",
      id: string,
      subHeading?: string | null,
    },
    directions: Array< string | null >,
    structuredData: string,
  } | null,
};

export type DeleteRecipeMutationVariables = {
  input: DeleteRecipeInput,
};

export type DeleteRecipeMutation = {
  deleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    title: string,
    route: string,
    info:  {
      __typename: "RecipeInfo",
      id: string,
      makes?: string | null,
      description?: string | null,
    },
    ingredients:  {
      __typename: "RecipeIngredientsList",
      id: string,
      subHeading?: string | null,
    },
    directions: Array< string | null >,
    structuredData: string,
  } | null,
};

export type GetRecipeSourceQueryVariables = {
  id: string,
};

export type GetRecipeSourceQuery = {
  getRecipeSource?:  {
    __typename: "RecipeSource",
    id: string,
    label?: string | null,
    url?: string | null,
  } | null,
};

export type ListRecipeSourcesQueryVariables = {
  filter?: TableRecipeSourceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipeSourcesQuery = {
  listRecipeSources?:  {
    __typename: "RecipeSourceConnection",
    items?:  Array< {
      __typename: "RecipeSource",
      id: string,
      label?: string | null,
      url?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRecipeIngredientQueryVariables = {
  id: string,
};

export type GetRecipeIngredientQuery = {
  getRecipeIngredient?:  {
    __typename: "RecipeIngredient",
    id: string,
    name: string,
    measurement?: Array< number | null > | null,
    measurementUnit?: string | null,
    qualifierString?: string | null,
    isConvertibleUnit?: boolean | null,
    isOptional?: boolean | null,
  } | null,
};

export type ListRecipeIngredientsQueryVariables = {
  filter?: TableRecipeIngredientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipeIngredientsQuery = {
  listRecipeIngredients?:  {
    __typename: "RecipeIngredientConnection",
    items?:  Array< {
      __typename: "RecipeIngredient",
      id: string,
      name: string,
      measurement?: Array< number | null > | null,
      measurementUnit?: string | null,
      qualifierString?: string | null,
      isConvertibleUnit?: boolean | null,
      isOptional?: boolean | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRecipeIngredientsListQueryVariables = {
  id: string,
};

export type GetRecipeIngredientsListQuery = {
  getRecipeIngredientsList?:  {
    __typename: "RecipeIngredientsList",
    id: string,
    subHeading?: string | null,
    items?:  Array< {
      __typename: "RecipeIngredient",
      id: string,
      name: string,
      measurement?: Array< number | null > | null,
      measurementUnit?: string | null,
      qualifierString?: string | null,
      isConvertibleUnit?: boolean | null,
      isOptional?: boolean | null,
    } | null > | null,
  } | null,
};

export type ListRecipeIngredientsListsQueryVariables = {
  filter?: TableRecipeIngredientsListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipeIngredientsListsQuery = {
  listRecipeIngredientsLists?:  {
    __typename: "RecipeIngredientsListConnection",
    items?:  Array< {
      __typename: "RecipeIngredientsList",
      id: string,
      subHeading?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRecipeTimeQueryVariables = {
  id: string,
};

export type GetRecipeTimeQuery = {
  getRecipeTime?:  {
    __typename: "RecipeTime",
    id: string,
    value?: number | null,
    unit?: string | null,
  } | null,
};

export type ListRecipeTimesQueryVariables = {
  filter?: TableRecipeTimeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipeTimesQuery = {
  listRecipeTimes?:  {
    __typename: "RecipeTimeConnection",
    items?:  Array< {
      __typename: "RecipeTime",
      id: string,
      value?: number | null,
      unit?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRecipeInfoQueryVariables = {
  id: string,
};

export type GetRecipeInfoQuery = {
  getRecipeInfo?:  {
    __typename: "RecipeInfo",
    id: string,
    makes?: string | null,
    prepTime?:  {
      __typename: "RecipeTime",
      id: string,
      value?: number | null,
      unit?: string | null,
    } | null,
    cookTime?:  {
      __typename: "RecipeTime",
      id: string,
      value?: number | null,
      unit?: string | null,
    } | null,
    description?: string | null,
    source?:  {
      __typename: "RecipeSource",
      id: string,
      label?: string | null,
      url?: string | null,
    } | null,
  } | null,
};

export type ListRecipeInfosQueryVariables = {
  filter?: TableRecipeInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipeInfosQuery = {
  listRecipeInfos?:  {
    __typename: "RecipeInfoConnection",
    items?:  Array< {
      __typename: "RecipeInfo",
      id: string,
      makes?: string | null,
      description?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRecipeQueryVariables = {
  id: string,
};

export type GetRecipeQuery = {
  getRecipe?:  {
    __typename: "Recipe",
    id: string,
    title: string,
    route: string,
    info:  {
      __typename: "RecipeInfo",
      id: string,
      makes?: string | null,
      description?: string | null,
    },
    ingredients:  {
      __typename: "RecipeIngredientsList",
      id: string,
      subHeading?: string | null,
    },
    directions: Array< string | null >,
    structuredData: string,
  } | null,
};

export type ListRecipesQueryVariables = {
  filter?: TableRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipesQuery = {
  listRecipes?:  {
    __typename: "RecipeConnection",
    items?:  Array< {
      __typename: "Recipe",
      id: string,
      title: string,
      route: string,
      directions: Array< string | null >,
      structuredData: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateRecipeSourceSubscriptionVariables = {
  id?: string | null,
  label?: string | null,
  url?: string | null,
};

export type OnCreateRecipeSourceSubscription = {
  onCreateRecipeSource?:  {
    __typename: "RecipeSource",
    id: string,
    label?: string | null,
    url?: string | null,
  } | null,
};

export type OnUpdateRecipeSourceSubscriptionVariables = {
  id?: string | null,
  label?: string | null,
  url?: string | null,
};

export type OnUpdateRecipeSourceSubscription = {
  onUpdateRecipeSource?:  {
    __typename: "RecipeSource",
    id: string,
    label?: string | null,
    url?: string | null,
  } | null,
};

export type OnDeleteRecipeSourceSubscriptionVariables = {
  id?: string | null,
  label?: string | null,
  url?: string | null,
};

export type OnDeleteRecipeSourceSubscription = {
  onDeleteRecipeSource?:  {
    __typename: "RecipeSource",
    id: string,
    label?: string | null,
    url?: string | null,
  } | null,
};

export type OnCreateRecipeIngredientSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  measurement?: Array< number | null > | null,
  measurementUnit?: string | null,
  qualifierString?: string | null,
};

export type OnCreateRecipeIngredientSubscription = {
  onCreateRecipeIngredient?:  {
    __typename: "RecipeIngredient",
    id: string,
    name: string,
    measurement?: Array< number | null > | null,
    measurementUnit?: string | null,
    qualifierString?: string | null,
    isConvertibleUnit?: boolean | null,
    isOptional?: boolean | null,
  } | null,
};

export type OnUpdateRecipeIngredientSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  measurement?: Array< number | null > | null,
  measurementUnit?: string | null,
  qualifierString?: string | null,
};

export type OnUpdateRecipeIngredientSubscription = {
  onUpdateRecipeIngredient?:  {
    __typename: "RecipeIngredient",
    id: string,
    name: string,
    measurement?: Array< number | null > | null,
    measurementUnit?: string | null,
    qualifierString?: string | null,
    isConvertibleUnit?: boolean | null,
    isOptional?: boolean | null,
  } | null,
};

export type OnDeleteRecipeIngredientSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  measurement?: Array< number | null > | null,
  measurementUnit?: string | null,
  qualifierString?: string | null,
};

export type OnDeleteRecipeIngredientSubscription = {
  onDeleteRecipeIngredient?:  {
    __typename: "RecipeIngredient",
    id: string,
    name: string,
    measurement?: Array< number | null > | null,
    measurementUnit?: string | null,
    qualifierString?: string | null,
    isConvertibleUnit?: boolean | null,
    isOptional?: boolean | null,
  } | null,
};

export type OnCreateRecipeIngredientsListSubscriptionVariables = {
  id?: string | null,
  subHeading?: string | null,
};

export type OnCreateRecipeIngredientsListSubscription = {
  onCreateRecipeIngredientsList?:  {
    __typename: "RecipeIngredientsList",
    id: string,
    subHeading?: string | null,
    items?:  Array< {
      __typename: "RecipeIngredient",
      id: string,
      name: string,
      measurement?: Array< number | null > | null,
      measurementUnit?: string | null,
      qualifierString?: string | null,
      isConvertibleUnit?: boolean | null,
      isOptional?: boolean | null,
    } | null > | null,
  } | null,
};

export type OnUpdateRecipeIngredientsListSubscriptionVariables = {
  id?: string | null,
  subHeading?: string | null,
};

export type OnUpdateRecipeIngredientsListSubscription = {
  onUpdateRecipeIngredientsList?:  {
    __typename: "RecipeIngredientsList",
    id: string,
    subHeading?: string | null,
    items?:  Array< {
      __typename: "RecipeIngredient",
      id: string,
      name: string,
      measurement?: Array< number | null > | null,
      measurementUnit?: string | null,
      qualifierString?: string | null,
      isConvertibleUnit?: boolean | null,
      isOptional?: boolean | null,
    } | null > | null,
  } | null,
};

export type OnDeleteRecipeIngredientsListSubscriptionVariables = {
  id?: string | null,
  subHeading?: string | null,
};

export type OnDeleteRecipeIngredientsListSubscription = {
  onDeleteRecipeIngredientsList?:  {
    __typename: "RecipeIngredientsList",
    id: string,
    subHeading?: string | null,
    items?:  Array< {
      __typename: "RecipeIngredient",
      id: string,
      name: string,
      measurement?: Array< number | null > | null,
      measurementUnit?: string | null,
      qualifierString?: string | null,
      isConvertibleUnit?: boolean | null,
      isOptional?: boolean | null,
    } | null > | null,
  } | null,
};

export type OnCreateRecipeTimeSubscriptionVariables = {
  id?: string | null,
  value?: number | null,
  unit?: string | null,
};

export type OnCreateRecipeTimeSubscription = {
  onCreateRecipeTime?:  {
    __typename: "RecipeTime",
    id: string,
    value?: number | null,
    unit?: string | null,
  } | null,
};

export type OnUpdateRecipeTimeSubscriptionVariables = {
  id?: string | null,
  value?: number | null,
  unit?: string | null,
};

export type OnUpdateRecipeTimeSubscription = {
  onUpdateRecipeTime?:  {
    __typename: "RecipeTime",
    id: string,
    value?: number | null,
    unit?: string | null,
  } | null,
};

export type OnDeleteRecipeTimeSubscriptionVariables = {
  id?: string | null,
  value?: number | null,
  unit?: string | null,
};

export type OnDeleteRecipeTimeSubscription = {
  onDeleteRecipeTime?:  {
    __typename: "RecipeTime",
    id: string,
    value?: number | null,
    unit?: string | null,
  } | null,
};

export type OnCreateRecipeInfoSubscriptionVariables = {
  id?: string | null,
  makes?: string | null,
  description?: string | null,
};

export type OnCreateRecipeInfoSubscription = {
  onCreateRecipeInfo?:  {
    __typename: "RecipeInfo",
    id: string,
    makes?: string | null,
    prepTime?:  {
      __typename: "RecipeTime",
      id: string,
      value?: number | null,
      unit?: string | null,
    } | null,
    cookTime?:  {
      __typename: "RecipeTime",
      id: string,
      value?: number | null,
      unit?: string | null,
    } | null,
    description?: string | null,
    source?:  {
      __typename: "RecipeSource",
      id: string,
      label?: string | null,
      url?: string | null,
    } | null,
  } | null,
};

export type OnUpdateRecipeInfoSubscriptionVariables = {
  id?: string | null,
  makes?: string | null,
  description?: string | null,
};

export type OnUpdateRecipeInfoSubscription = {
  onUpdateRecipeInfo?:  {
    __typename: "RecipeInfo",
    id: string,
    makes?: string | null,
    prepTime?:  {
      __typename: "RecipeTime",
      id: string,
      value?: number | null,
      unit?: string | null,
    } | null,
    cookTime?:  {
      __typename: "RecipeTime",
      id: string,
      value?: number | null,
      unit?: string | null,
    } | null,
    description?: string | null,
    source?:  {
      __typename: "RecipeSource",
      id: string,
      label?: string | null,
      url?: string | null,
    } | null,
  } | null,
};

export type OnDeleteRecipeInfoSubscriptionVariables = {
  id?: string | null,
  makes?: string | null,
  description?: string | null,
};

export type OnDeleteRecipeInfoSubscription = {
  onDeleteRecipeInfo?:  {
    __typename: "RecipeInfo",
    id: string,
    makes?: string | null,
    prepTime?:  {
      __typename: "RecipeTime",
      id: string,
      value?: number | null,
      unit?: string | null,
    } | null,
    cookTime?:  {
      __typename: "RecipeTime",
      id: string,
      value?: number | null,
      unit?: string | null,
    } | null,
    description?: string | null,
    source?:  {
      __typename: "RecipeSource",
      id: string,
      label?: string | null,
      url?: string | null,
    } | null,
  } | null,
};

export type OnCreateRecipeSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  route?: string | null,
  directions?: Array< string | null > | null,
  structuredData?: string | null,
};

export type OnCreateRecipeSubscription = {
  onCreateRecipe?:  {
    __typename: "Recipe",
    id: string,
    title: string,
    route: string,
    info:  {
      __typename: "RecipeInfo",
      id: string,
      makes?: string | null,
      description?: string | null,
    },
    ingredients:  {
      __typename: "RecipeIngredientsList",
      id: string,
      subHeading?: string | null,
    },
    directions: Array< string | null >,
    structuredData: string,
  } | null,
};

export type OnUpdateRecipeSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  route?: string | null,
  directions?: Array< string | null > | null,
  structuredData?: string | null,
};

export type OnUpdateRecipeSubscription = {
  onUpdateRecipe?:  {
    __typename: "Recipe",
    id: string,
    title: string,
    route: string,
    info:  {
      __typename: "RecipeInfo",
      id: string,
      makes?: string | null,
      description?: string | null,
    },
    ingredients:  {
      __typename: "RecipeIngredientsList",
      id: string,
      subHeading?: string | null,
    },
    directions: Array< string | null >,
    structuredData: string,
  } | null,
};

export type OnDeleteRecipeSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  route?: string | null,
  directions?: Array< string | null > | null,
  structuredData?: string | null,
};

export type OnDeleteRecipeSubscription = {
  onDeleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    title: string,
    route: string,
    info:  {
      __typename: "RecipeInfo",
      id: string,
      makes?: string | null,
      description?: string | null,
    },
    ingredients:  {
      __typename: "RecipeIngredientsList",
      id: string,
      subHeading?: string | null,
    },
    directions: Array< string | null >,
    structuredData: string,
  } | null,
};
