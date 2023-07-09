import { VerticalStack, Text, Tooltip } from "@shopify/polaris";
import {
  RecipeIngredientsProps,
  IngredientSectionProps,
  IngredientItem,
} from "../../../../types";
import { convertDecimals } from "../../../../lib/formatters";

const IngredientsSection = ({
  ingredientSection,
  checkedItems,
  setCheckedItems,
}: IngredientSectionProps) => {
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

  const parseItem = (item: IngredientItem) => {
    let parsedItem = { rowItem: "", label: "" };

    const measurementString =
      item.measurement !== null ? convertDecimals(item.measurement) : "";

    const measurementUnit =
      item.measurementUnit !== null ? ` ${item.measurementUnit} ` : " ";

    const qualifierString =
      item.qualifierString !== null ? ` (${item.qualifierString})` : "";

    parsedItem[
      "rowItem"
    ] = `${measurementString}${measurementUnit}${item.name}`;
    parsedItem["label"] = `${parsedItem["rowItem"]} ${qualifierString}`;
    return parsedItem;
  };

  return (
    <>
      {ingredientSection.subHeading && (
        <Text variant="headingSm" as="h6">
          {ingredientSection.subHeading}
        </Text>
      )}
      <table>
        <tbody>
          {ingredientSection.items.map((ingredient) => {
            const { label, rowItem } = parseItem(ingredient);
            return (
              <tr key={label}>
                <td className="recipe-body-ingredient-check">
                  <Tooltip content="Select to add to Shopping List">
                    <input
                      type="checkbox"
                      value={rowItem}
                      onChange={handleChange}
                    />
                  </Tooltip>
                </td>

                <td className="recipe-body-ingredient-label">
                  <label>{label}</label>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

const RecipeIngredients = ({
  recipeIngredients,
  checkedItems,
  setCheckedItems,
}: RecipeIngredientsProps) => {
  return (
    <VerticalStack gap="1">
      <Text variant="headingMd" as="h6">
        Ingredients:
      </Text>
      {recipeIngredients.map((ingredientSection, index) => {
        return (
          <IngredientsSection
            ingredientSection={ingredientSection}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
            key={index}
          />
        );
      })}
    </VerticalStack>
  );
};

export default RecipeIngredients;
