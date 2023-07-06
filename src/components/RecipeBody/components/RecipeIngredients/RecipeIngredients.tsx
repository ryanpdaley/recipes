import { VerticalStack, Text } from "@shopify/polaris";
import { RecipeIngredientsProps } from "../../../../types";
import { FRACTION_DICTIONARY } from "../../../../constants";

const convertDecimals = (measurement: number): string => {
  const decimal = measurement % 1;
  const wholeNumber = Math.trunc(measurement);
  if (decimal === 0 || !(decimal in FRACTION_DICTIONARY))
    return measurement.toString();

  return (
    (wholeNumber > 0 ? wholeNumber + " " : "") +
    String.fromCharCode(FRACTION_DICTIONARY[decimal])
  );
};

const RecipeIngredients = ({
  recipeIngredients,
  checkedItems,
  setCheckedItems,
}: RecipeIngredientsProps) => {
  const handleChange = (event: { target: { value: any; checked: any } }) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      const filteredList = checkedItems.filter((item) => item !== value);
      setCheckedItems(filteredList);
    }
  };

  return (
    <VerticalStack gap="1">
      <Text variant="headingMd" as="h6">
        Ingredients:
      </Text>
      <table>
        <tbody>
          {recipeIngredients.map((ingredient) => {
            const qualifierString =
              ingredient.qualifierString !== null
                ? ` (${ingredient.qualifierString})`
                : "";
            const rowItem = `${convertDecimals(ingredient.measurement)} ${
              ingredient.measurementUnit
            } ${ingredient.name}`;
            const label = `${rowItem} ${qualifierString}`;
            return (
              <tr key={label}>
                <td className="recipe-body-ingredient-check">
                  <input
                    type="checkbox"
                    value={rowItem}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <label>{label}</label>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </VerticalStack>
  );
};

export default RecipeIngredients;
