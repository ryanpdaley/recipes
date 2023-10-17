import {
  Card,
  BlockStack,
  InlineGrid,
  Text,
  Link,
  InlineStack,
  Divider,
} from "@shopify/polaris";

import type { RecipeInfoProps } from "../../../../types";
import { convertDecimals } from "../../../../lib/formatters";
import { eventGA } from "../../../../lib/ga";

const Description = ({ recipeInfo }: RecipeInfoProps) => {
  return (
    <div>
      <Text variant="headingMd" as="h6">
        Description:
      </Text>
      <div className="recipe-description">
        <p>{recipeInfo.description}</p>
      </div>
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
    recipeInfo.cookTime && recipeInfo.cookTime !== null ? (
      <p>
        <strong>Cook Time: </strong>
        {`${convertDecimals(recipeInfo.cookTime.value)} ${
          recipeInfo.cookTime.unit
        }`}
      </p>
    ) : null;

  const prepTimeBlock =
    recipeInfo.prepTime && recipeInfo.prepTime !== null ? (
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
      <InlineGrid columns={blockCount}>
        {yieldBlock}
        {cookTimeBlock}
        {prepTimeBlock}
      </InlineGrid>
    </div>
  );
};

const SourceBlock = ({ recipeInfo }: RecipeInfoProps) => {
  const sourceLabel = recipeInfo.source?.label;
  const sourceURL = recipeInfo.source?.url;
  if (sourceLabel === undefined) return <></>;
  return (
    <InlineStack align="end">
      <Text
        variant="bodyMd"
        tone="subdued"
        as="p"
        id="recipe-head-info-sourceLabel"
      >
        Source:
      </Text>
      {sourceURL === null || sourceURL === undefined ? (
        <Text variant="bodyMd" tone="subdued" as="p">
          {sourceLabel}
        </Text>
      ) : (
        <Link
          url={sourceURL}
          onClick={() => {
            eventGA({
              category: "userAction",
              action: "link_clicked",
              label: sourceURL,
            });
          }}
          target="_blank"
        >
          <Text variant="bodyMd" tone="subdued" as="p">
            {sourceLabel}
          </Text>
        </Link>
      )}
    </InlineStack>
  );
};

const RecipeHead = ({ recipeInfo }: RecipeInfoProps) => {
  return (
    <div className="recipe-head">
      <Card>
        <BlockStack gap="500">
          <Description recipeInfo={recipeInfo} />
          <Divider />
          <MetaInfo recipeInfo={recipeInfo} />
          <SourceBlock recipeInfo={recipeInfo} />
        </BlockStack>
      </Card>
    </div>
  );
};
export default RecipeHead;
