/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getRecipeSource = /* GraphQL */ `query GetRecipeSource($id: ID!) {
  getRecipeSource(id: $id) {
    id
    label
    url
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRecipeSourceQueryVariables,
  APITypes.GetRecipeSourceQuery
>;
export const listRecipeSources = /* GraphQL */ `query ListRecipeSources(
  $filter: TableRecipeSourceFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecipeSources(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      label
      url
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRecipeSourcesQueryVariables,
  APITypes.ListRecipeSourcesQuery
>;
export const getRecipeIngredient = /* GraphQL */ `query GetRecipeIngredient($id: ID!) {
  getRecipeIngredient(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRecipeIngredientQueryVariables,
  APITypes.GetRecipeIngredientQuery
>;
export const listRecipeIngredients = /* GraphQL */ `query ListRecipeIngredients(
  $filter: TableRecipeIngredientFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecipeIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRecipeIngredientsQueryVariables,
  APITypes.ListRecipeIngredientsQuery
>;
export const getRecipeIngredientsList = /* GraphQL */ `query GetRecipeIngredientsList($id: ID!) {
  getRecipeIngredientsList(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRecipeIngredientsListQueryVariables,
  APITypes.GetRecipeIngredientsListQuery
>;
export const listRecipeIngredientsLists = /* GraphQL */ `query ListRecipeIngredientsLists(
  $filter: TableRecipeIngredientsListFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecipeIngredientsLists(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      subHeading
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRecipeIngredientsListsQueryVariables,
  APITypes.ListRecipeIngredientsListsQuery
>;
export const getRecipeTime = /* GraphQL */ `query GetRecipeTime($id: ID!) {
  getRecipeTime(id: $id) {
    id
    value
    unit
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRecipeTimeQueryVariables,
  APITypes.GetRecipeTimeQuery
>;
export const listRecipeTimes = /* GraphQL */ `query ListRecipeTimes(
  $filter: TableRecipeTimeFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecipeTimes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      value
      unit
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRecipeTimesQueryVariables,
  APITypes.ListRecipeTimesQuery
>;
export const getRecipeInfo = /* GraphQL */ `query GetRecipeInfo($id: ID!) {
  getRecipeInfo(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRecipeInfoQueryVariables,
  APITypes.GetRecipeInfoQuery
>;
export const listRecipeInfos = /* GraphQL */ `query ListRecipeInfos(
  $filter: TableRecipeInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecipeInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      makes
      description
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRecipeInfosQueryVariables,
  APITypes.ListRecipeInfosQuery
>;
export const getRecipe = /* GraphQL */ `query GetRecipe($id: ID!) {
  getRecipe(id: $id) {
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
` as GeneratedQuery<APITypes.GetRecipeQueryVariables, APITypes.GetRecipeQuery>;
export const listRecipes = /* GraphQL */ `query ListRecipes(
  $filter: TableRecipeFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      route
      directions
      structuredData
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRecipesQueryVariables,
  APITypes.ListRecipesQuery
>;
