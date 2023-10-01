/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createRecipeSource = /* GraphQL */ `mutation CreateRecipeSource($input: CreateRecipeSourceInput!) {
  createRecipeSource(input: $input) {
    id
    label
    url
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRecipeSourceMutationVariables,
  APITypes.CreateRecipeSourceMutation
>;
export const updateRecipeSource = /* GraphQL */ `mutation UpdateRecipeSource($input: UpdateRecipeSourceInput!) {
  updateRecipeSource(input: $input) {
    id
    label
    url
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRecipeSourceMutationVariables,
  APITypes.UpdateRecipeSourceMutation
>;
export const deleteRecipeSource = /* GraphQL */ `mutation DeleteRecipeSource($input: DeleteRecipeSourceInput!) {
  deleteRecipeSource(input: $input) {
    id
    label
    url
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRecipeSourceMutationVariables,
  APITypes.DeleteRecipeSourceMutation
>;
export const createRecipeIngredient = /* GraphQL */ `mutation CreateRecipeIngredient($input: CreateRecipeIngredientInput!) {
  createRecipeIngredient(input: $input) {
    id
    name
    measurement
    measurementUnit
    qualifierString
    isConvertibleUnit
    isOptional
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRecipeIngredientMutationVariables,
  APITypes.CreateRecipeIngredientMutation
>;
export const updateRecipeIngredient = /* GraphQL */ `mutation UpdateRecipeIngredient($input: UpdateRecipeIngredientInput!) {
  updateRecipeIngredient(input: $input) {
    id
    name
    measurement
    measurementUnit
    qualifierString
    isConvertibleUnit
    isOptional
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRecipeIngredientMutationVariables,
  APITypes.UpdateRecipeIngredientMutation
>;
export const deleteRecipeIngredient = /* GraphQL */ `mutation DeleteRecipeIngredient($input: DeleteRecipeIngredientInput!) {
  deleteRecipeIngredient(input: $input) {
    id
    name
    measurement
    measurementUnit
    qualifierString
    isConvertibleUnit
    isOptional
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRecipeIngredientMutationVariables,
  APITypes.DeleteRecipeIngredientMutation
>;
export const createRecipeIngredientsList = /* GraphQL */ `mutation CreateRecipeIngredientsList(
  $input: CreateRecipeIngredientsListInput!
) {
  createRecipeIngredientsList(input: $input) {
    id
    subHeading
    items {
      id
      name
      measurement
      measurementUnit
      qualifierString
      isConvertibleUnit
      isOptional
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRecipeIngredientsListMutationVariables,
  APITypes.CreateRecipeIngredientsListMutation
>;
export const updateRecipeIngredientsList = /* GraphQL */ `mutation UpdateRecipeIngredientsList(
  $input: UpdateRecipeIngredientsListInput!
) {
  updateRecipeIngredientsList(input: $input) {
    id
    subHeading
    items {
      id
      name
      measurement
      measurementUnit
      qualifierString
      isConvertibleUnit
      isOptional
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRecipeIngredientsListMutationVariables,
  APITypes.UpdateRecipeIngredientsListMutation
>;
export const deleteRecipeIngredientsList = /* GraphQL */ `mutation DeleteRecipeIngredientsList(
  $input: DeleteRecipeIngredientsListInput!
) {
  deleteRecipeIngredientsList(input: $input) {
    id
    subHeading
    items {
      id
      name
      measurement
      measurementUnit
      qualifierString
      isConvertibleUnit
      isOptional
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRecipeIngredientsListMutationVariables,
  APITypes.DeleteRecipeIngredientsListMutation
>;
export const createRecipeTime = /* GraphQL */ `mutation CreateRecipeTime($input: CreateRecipeTimeInput!) {
  createRecipeTime(input: $input) {
    id
    value
    unit
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRecipeTimeMutationVariables,
  APITypes.CreateRecipeTimeMutation
>;
export const updateRecipeTime = /* GraphQL */ `mutation UpdateRecipeTime($input: UpdateRecipeTimeInput!) {
  updateRecipeTime(input: $input) {
    id
    value
    unit
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRecipeTimeMutationVariables,
  APITypes.UpdateRecipeTimeMutation
>;
export const deleteRecipeTime = /* GraphQL */ `mutation DeleteRecipeTime($input: DeleteRecipeTimeInput!) {
  deleteRecipeTime(input: $input) {
    id
    value
    unit
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRecipeTimeMutationVariables,
  APITypes.DeleteRecipeTimeMutation
>;
export const createRecipeInfo = /* GraphQL */ `mutation CreateRecipeInfo($input: CreateRecipeInfoInput!) {
  createRecipeInfo(input: $input) {
    id
    makes
    prepTime {
      id
      value
      unit
      __typename
    }
    cookTime {
      id
      value
      unit
      __typename
    }
    description
    source {
      id
      label
      url
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRecipeInfoMutationVariables,
  APITypes.CreateRecipeInfoMutation
>;
export const updateRecipeInfo = /* GraphQL */ `mutation UpdateRecipeInfo($input: UpdateRecipeInfoInput!) {
  updateRecipeInfo(input: $input) {
    id
    makes
    prepTime {
      id
      value
      unit
      __typename
    }
    cookTime {
      id
      value
      unit
      __typename
    }
    description
    source {
      id
      label
      url
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRecipeInfoMutationVariables,
  APITypes.UpdateRecipeInfoMutation
>;
export const deleteRecipeInfo = /* GraphQL */ `mutation DeleteRecipeInfo($input: DeleteRecipeInfoInput!) {
  deleteRecipeInfo(input: $input) {
    id
    makes
    prepTime {
      id
      value
      unit
      __typename
    }
    cookTime {
      id
      value
      unit
      __typename
    }
    description
    source {
      id
      label
      url
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRecipeInfoMutationVariables,
  APITypes.DeleteRecipeInfoMutation
>;
export const createRecipe = /* GraphQL */ `mutation CreateRecipe($input: CreateRecipeInput!) {
  createRecipe(input: $input) {
    id
    title
    route
    info {
      id
      makes
      description
      __typename
    }
    ingredients {
      id
      subHeading
      __typename
    }
    directions
    structuredData
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRecipeMutationVariables,
  APITypes.CreateRecipeMutation
>;
export const updateRecipe = /* GraphQL */ `mutation UpdateRecipe($input: UpdateRecipeInput!) {
  updateRecipe(input: $input) {
    id
    title
    route
    info {
      id
      makes
      description
      __typename
    }
    ingredients {
      id
      subHeading
      __typename
    }
    directions
    structuredData
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRecipeMutationVariables,
  APITypes.UpdateRecipeMutation
>;
export const deleteRecipe = /* GraphQL */ `mutation DeleteRecipe($input: DeleteRecipeInput!) {
  deleteRecipe(input: $input) {
    id
    title
    route
    info {
      id
      makes
      description
      __typename
    }
    ingredients {
      id
      subHeading
      __typename
    }
    directions
    structuredData
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRecipeMutationVariables,
  APITypes.DeleteRecipeMutation
>;
