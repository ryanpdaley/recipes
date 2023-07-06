import { VerticalStack, Checkbox, Text } from "@shopify/polaris";
import { RecipeIngredientsProps } from "../../../../types";
import { FRACTION_DICTIONARY } from "./constants";

const convertDecimals = (measurement: number): string => {
  const decimal = measurement % 1;
  const wholeNumber = Math.trunc(measurement);
  if (decimal === 0 || !(decimal in FRACTION_DICTIONARY))
    return measurement.toString();

  return (
    (wholeNumber > 0 ? wholeNumber : "") +
    " " +
    String.fromCharCode(FRACTION_DICTIONARY[decimal])
  );
};

const RecipeIngredients = ({ recipeIngredients }: RecipeIngredientsProps) => {
  return (
    <VerticalStack gap="1">
      <Text variant="headingMd" as="h6">
        Ingredients:
      </Text>
      {recipeIngredients.map((ingredient) => {
        const qualifierString =
          ingredient.qualifierString !== null
            ? ` (${ingredient.qualifierString})`
            : "";
        const label = `${convertDecimals(ingredient.measurement)} ${
          ingredient.measurementUnit
        } ${ingredient.name}${qualifierString}`;
        return <Checkbox label={label} key={ingredient.name} />;
      })}
    </VerticalStack>
  );
};

export default RecipeIngredients;
