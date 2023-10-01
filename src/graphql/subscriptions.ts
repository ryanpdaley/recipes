/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateRecipeSource = /* GraphQL */ `subscription OnCreateRecipeSource($id: ID, $label: String, $url: AWSURL) {
  onCreateRecipeSource(id: $id, label: $label, url: $url) {
    id
    label
    url
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRecipeSourceSubscriptionVariables,
  APITypes.OnCreateRecipeSourceSubscription
>;
export const onUpdateRecipeSource = /* GraphQL */ `subscription OnUpdateRecipeSource($id: ID, $label: String, $url: AWSURL) {
  onUpdateRecipeSource(id: $id, label: $label, url: $url) {
    id
    label
    url
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRecipeSourceSubscriptionVariables,
  APITypes.OnUpdateRecipeSourceSubscription
>;
export const onDeleteRecipeSource = /* GraphQL */ `subscription OnDeleteRecipeSource($id: ID, $label: String, $url: AWSURL) {
  onDeleteRecipeSource(id: $id, label: $label, url: $url) {
    id
    label
    url
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRecipeSourceSubscriptionVariables,
  APITypes.OnDeleteRecipeSourceSubscription
>;
export const onCreateRecipeIngredient = /* GraphQL */ `subscription OnCreateRecipeIngredient(
  $id: ID
  $name: String
  $measurement: [Int]
  $measurementUnit: String
  $qualifierString: String
) {
  onCreateRecipeIngredient(
    id: $id
    name: $name
    measurement: $measurement
    measurementUnit: $measurementUnit
    qualifierString: $qualifierString
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRecipeIngredientSubscriptionVariables,
  APITypes.OnCreateRecipeIngredientSubscription
>;
export const onUpdateRecipeIngredient = /* GraphQL */ `subscription OnUpdateRecipeIngredient(
  $id: ID
  $name: String
  $measurement: [Int]
  $measurementUnit: String
  $qualifierString: String
) {
  onUpdateRecipeIngredient(
    id: $id
    name: $name
    measurement: $measurement
    measurementUnit: $measurementUnit
    qualifierString: $qualifierString
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRecipeIngredientSubscriptionVariables,
  APITypes.OnUpdateRecipeIngredientSubscription
>;
export const onDeleteRecipeIngredient = /* GraphQL */ `subscription OnDeleteRecipeIngredient(
  $id: ID
  $name: String
  $measurement: [Int]
  $measurementUnit: String
  $qualifierString: String
) {
  onDeleteRecipeIngredient(
    id: $id
    name: $name
    measurement: $measurement
    measurementUnit: $measurementUnit
    qualifierString: $qualifierString
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRecipeIngredientSubscriptionVariables,
  APITypes.OnDeleteRecipeIngredientSubscription
>;
export const onCreateRecipeIngredientsList = /* GraphQL */ `subscription OnCreateRecipeIngredientsList($id: ID, $subHeading: String) {
  onCreateRecipeIngredientsList(id: $id, subHeading: $subHeading) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRecipeIngredientsListSubscriptionVariables,
  APITypes.OnCreateRecipeIngredientsListSubscription
>;
export const onUpdateRecipeIngredientsList = /* GraphQL */ `subscription OnUpdateRecipeIngredientsList($id: ID, $subHeading: String) {
  onUpdateRecipeIngredientsList(id: $id, subHeading: $subHeading) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRecipeIngredientsListSubscriptionVariables,
  APITypes.OnUpdateRecipeIngredientsListSubscription
>;
export const onDeleteRecipeIngredientsList = /* GraphQL */ `subscription OnDeleteRecipeIngredientsList($id: ID, $subHeading: String) {
  onDeleteRecipeIngredientsList(id: $id, subHeading: $subHeading) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRecipeIngredientsListSubscriptionVariables,
  APITypes.OnDeleteRecipeIngredientsListSubscription
>;
export const onCreateRecipeTime = /* GraphQL */ `subscription OnCreateRecipeTime($id: ID, $value: Int, $unit: String) {
  onCreateRecipeTime(id: $id, value: $value, unit: $unit) {
    id
    value
    unit
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRecipeTimeSubscriptionVariables,
  APITypes.OnCreateRecipeTimeSubscription
>;
export const onUpdateRecipeTime = /* GraphQL */ `subscription OnUpdateRecipeTime($id: ID, $value: Int, $unit: String) {
  onUpdateRecipeTime(id: $id, value: $value, unit: $unit) {
    id
    value
    unit
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRecipeTimeSubscriptionVariables,
  APITypes.OnUpdateRecipeTimeSubscription
>;
export const onDeleteRecipeTime = /* GraphQL */ `subscription OnDeleteRecipeTime($id: ID, $value: Int, $unit: String) {
  onDeleteRecipeTime(id: $id, value: $value, unit: $unit) {
    id
    value
    unit
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRecipeTimeSubscriptionVariables,
  APITypes.OnDeleteRecipeTimeSubscription
>;
export const onCreateRecipeInfo = /* GraphQL */ `subscription OnCreateRecipeInfo($id: ID, $makes: String, $description: String) {
  onCreateRecipeInfo(id: $id, makes: $makes, description: $description) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRecipeInfoSubscriptionVariables,
  APITypes.OnCreateRecipeInfoSubscription
>;
export const onUpdateRecipeInfo = /* GraphQL */ `subscription OnUpdateRecipeInfo($id: ID, $makes: String, $description: String) {
  onUpdateRecipeInfo(id: $id, makes: $makes, description: $description) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRecipeInfoSubscriptionVariables,
  APITypes.OnUpdateRecipeInfoSubscription
>;
export const onDeleteRecipeInfo = /* GraphQL */ `subscription OnDeleteRecipeInfo($id: ID, $makes: String, $description: String) {
  onDeleteRecipeInfo(id: $id, makes: $makes, description: $description) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRecipeInfoSubscriptionVariables,
  APITypes.OnDeleteRecipeInfoSubscription
>;
export const onCreateRecipe = /* GraphQL */ `subscription OnCreateRecipe(
  $id: ID
  $title: String
  $route: String
  $directions: [String]
  $structuredData: AWSJSON
) {
  onCreateRecipe(
    id: $id
    title: $title
    route: $route
    directions: $directions
    structuredData: $structuredData
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRecipeSubscriptionVariables,
  APITypes.OnCreateRecipeSubscription
>;
export const onUpdateRecipe = /* GraphQL */ `subscription OnUpdateRecipe(
  $id: ID
  $title: String
  $route: String
  $directions: [String]
  $structuredData: AWSJSON
) {
  onUpdateRecipe(
    id: $id
    title: $title
    route: $route
    directions: $directions
    structuredData: $structuredData
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRecipeSubscriptionVariables,
  APITypes.OnUpdateRecipeSubscription
>;
export const onDeleteRecipe = /* GraphQL */ `subscription OnDeleteRecipe(
  $id: ID
  $title: String
  $route: String
  $directions: [String]
  $structuredData: AWSJSON
) {
  onDeleteRecipe(
    id: $id
    title: $title
    route: $route
    directions: $directions
    structuredData: $structuredData
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRecipeSubscriptionVariables,
  APITypes.OnDeleteRecipeSubscription
>;
