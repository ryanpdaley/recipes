import { Card, VerticalStack, HorizontalGrid, Text } from "@shopify/polaris";

import type { RecipeInfoProps } from "../../types";
import { convertDecimals } from "../../lib/formatters";

const Description = ({ recipeInfo }: RecipeInfoProps) => {
  return (
    <div>
      <Text variant="headingMd" as="h6">
        Description:
      </Text>
      <p>{recipeInfo.description}</p>
    </div>
  );
};

const MetaInfo = ({ recipeInfo }: RecipeInfoProps) => {
  const yieldBlock =
    recipeInfo.makes !== null ? (
      <div>
        <strong>Yields: </strong>
        {recipeInfo.makes}
      </div>
    ) : null;
  const cookTimeBlock =
    recipeInfo.cookTime !== null ? (
      <p>
        <strong>Cook Time: </strong>
        {`${convertDecimals(recipeInfo.cookTime.value)} ${
          recipeInfo.cookTime.unit
        }`}
      </p>
    ) : null;
  const prepTimeBlock =
    recipeInfo.prepTime !== null ? (
      <p>
        <strong>Prep Time: </strong>
        {`${convertDecimals(recipeInfo.prepTime.value)} ${
          recipeInfo.prepTime.unit
        }`}
      </p>
    ) : null;
  const blockCount =
    (yieldBlock ? 1 : 0) + (cookTimeBlock ? 1 : 0) + (prepTimeBlock ? 1 : 0);
  return (
    <div className="recipe-data">
      <HorizontalGrid columns={blockCount}>
        {yieldBlock}
        {cookTimeBlock}
        {prepTimeBlock}
      </HorizontalGrid>
    </div>
  );
};

const RecipeHead = ({ recipeInfo }: RecipeInfoProps) => {
  return (
    <div className="recipe-head">
      <Card>
        <VerticalStack gap="5">
          <Description recipeInfo={recipeInfo} />
          <MetaInfo recipeInfo={recipeInfo} />
        </VerticalStack>
      </Card>
    </div>
  );
};
export default RecipeHead;
