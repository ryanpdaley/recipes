import { RecipeProps } from "../../../../types";
const helmet = require("react-helmet");
const { Helmet } = helmet;

const MetaHead = ({ recipe }: RecipeProps) => {
  return (
    <Helmet>
      <title>Ryan's Recipes | {recipe.info.title}</title>
      <script type="application/ld+json">
        {JSON.stringify(recipe.structuredData)}
      </script>
    </Helmet>
  );
};

export default MetaHead;
