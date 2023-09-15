import { VerticalStack, Text, Tooltip } from "@shopify/polaris";
import {
  RecipeIngredientsProps,
  IngredientSectionProps,
} from "../../../../../../types";
import { parseItem } from "../../../../../../lib/formatters";
import { eventGA } from "../../../../../../lib/ga";

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
    eventGA({
      category: "userAction",
      action: "ingredient_Checked",
      label: JSON.stringify(checkedItems),
    });
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
            const isChecked = checkedItems.includes(rowItem);
            return (
              <tr key={label}>
                <td className="recipe-body-ingredient-check">
                  <Tooltip content="Select to add to Shopping List">
                    <input
                      type="checkbox"
                      defaultChecked={isChecked}
                      value={rowItem}
                      onChange={handleChange}
                      name={label}
                    />
                  </Tooltip>
                </td>

                <td className="recipe-body-ingredient-label">
                  <p>{label}</p>
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
