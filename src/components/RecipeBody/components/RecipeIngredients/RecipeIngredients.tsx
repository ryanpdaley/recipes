import { VerticalStack, Checkbox, Text } from "@shopify/polaris";
import { RecipeIngredientsProps } from "../../../../types";

interface fractionMap {
  [key: number]: number;
}

const FRACTION_DICTIONARY: fractionMap = {
  0.25: 188,
  0.5: 189,
  0.75: 190,
  0.33: 8531,
  0.66: 8532,
  0.2: 8533,
  0.4: 8534,
  0.6: 8535,
  0.8: 8536,
  0.16: 8537,
  0.83: 8538,
  0.125: 8539,
  0.375: 8540,
  0.625: 8541,
  0.875: 8542,
};

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
