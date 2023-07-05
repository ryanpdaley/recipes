import { Card, VerticalStack, HorizontalGrid, Text } from "@shopify/polaris";

import type { RecipeInfoProps } from "../../types";

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
  return (
    <div className="recipe-data">
      <HorizontalGrid columns={3}>
        <p>
          <strong>Yields: </strong>
          {recipeInfo.makes}
        </p>
        <p>
          <strong>Cook Time: </strong>
          {`${recipeInfo.cookTime.value} ${recipeInfo.cookTime.unit}`}
        </p>
        <p>
          <strong>Prep Time: </strong>
          {`${recipeInfo.prepTime.value} ${recipeInfo.prepTime.unit}`}
        </p>
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
