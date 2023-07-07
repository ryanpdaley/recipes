import {
  Card,
  VerticalStack,
  HorizontalGrid,
  Text,
  Link,
  HorizontalStack,
} from "@shopify/polaris";

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

const SourceBlock = ({ recipeInfo }: RecipeInfoProps) => {
  const sourceLabel = recipeInfo.source?.label;
  const sourceURL = recipeInfo.source?.url;
  if (sourceLabel === undefined) return <></>;
  return (
    <HorizontalStack align="end">
      <Text
        variant="bodyMd"
        color="subdued"
        as="p"
        id="recipe-head-info-sourceLabel"
      >
        Source:
      </Text>
      {sourceURL === null || sourceURL === undefined ? (
        <Text variant="bodyMd" color="subdued" as="p">
          {sourceLabel}
        </Text>
      ) : (
        <Link url={sourceURL} target="_blank">
          <Text variant="bodyMd" color="subdued" as="p">
            {sourceLabel}
          </Text>
        </Link>
      )}
    </HorizontalStack>
  );
};

const RecipeHead = ({ recipeInfo }: RecipeInfoProps) => {
  return (
    <div className="recipe-head">
      <Card>
        <VerticalStack gap="5">
          <Description recipeInfo={recipeInfo} />
          <MetaInfo recipeInfo={recipeInfo} />
          <SourceBlock recipeInfo={recipeInfo} />
        </VerticalStack>
      </Card>
    </div>
  );
};
export default RecipeHead;
