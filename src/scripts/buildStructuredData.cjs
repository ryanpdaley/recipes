// eslint-disable-next-line @typescript-eslint/no-var-requires
const join = require("path").join;
const filePath = "./../../public/data/";

// ****************************************************************
// This is a 'copy' from formatters.ts and constants.ts - I'll figure out the import
// later:

const FRACTION_DICTIONARY = {
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

const convertDecimals = (measurement) => {
  const decimal = measurement % 1;
  const wholeNumber = Math.trunc(measurement);
  if (decimal === 0 || !(decimal in FRACTION_DICTIONARY))
    return measurement.toString();

  return (
    (wholeNumber > 0 ? wholeNumber : "") +
    String.fromCharCode(FRACTION_DICTIONARY[decimal])
  );
};

const getMeasurementString = (measurement) => {
  if (measurement == null || measurement === undefined) {
    return "";
  } else {
    if (Array.isArray(measurement) && measurement.length === 2) {
      return `${convertDecimals(measurement[0])}-${convertDecimals(
        measurement[1]
      )}`;
    } else if (typeof measurement === "number") {
      return `${convertDecimals(measurement)}`;
    }
  }
  return "";
};

const parseItem = (item) => {
  let parsedItem = { rowItem: "", label: "" };
  const optionalString = item.isOptional ? "[optional]" : "";
  const measurementString =
    item && item.measurement ? getMeasurementString(item.measurement) : "";

  const measurementUnit =
    item.measurementUnit !== null ? ` ${item.measurementUnit} ` : " ";

  const qualifierString =
    item.qualifierString !== null ? ` (${item.qualifierString})` : "";

  parsedItem["rowItem"] = `${measurementString}${measurementUnit}${item.name}`;
  parsedItem[
    "label"
  ] = `${optionalString}${parsedItem["rowItem"]}${qualifierString}`;
  return parsedItem;
};
// ****************************************************************

const readRecipe = async (fileName) => {
  const recipeFile = join(filePath, fileName);
  console.log(recipeFile);
  const recipe = await import(recipeFile, {
    assert: {
      type: "json",
    },
  });
  return recipe.default;
};

const convertRecipeTimeToSeconds = (recipeTime) => {
  let returnValue = 0;
  const value = recipeTime.value;
  const unit = recipeTime.unit;
  const decimalValue = value % 1;
  if (unit === "hours") {
    returnValue = (value + decimalValue) * 3600;
  } else if (unit === "minutes") {
    returnValue = (value + decimalValue) * 60;
  }
  return returnValue;
};

const secondsToISO8601 = (seconds) => {
  let out = "PT";
  if (seconds >= 3600) {
    const wholeHours = Math.floor(seconds / 3600);
    out += wholeHours + "H";
    seconds = seconds - wholeHours * 3600;
  }
  if (seconds >= 60) {
    const wholeMinutes = Math.floor(seconds / 60);
    out += wholeMinutes + "M";
    seconds = seconds - wholeMinutes * 60;
  }
  if (seconds >= 1) {
    out += seconds + "S";
  }
  return out;
};

const appendCookTimes = (recipe, structuredRecipe) => {
  let times = {};
  let prepTime = 0;
  let cookTime = 0;
  if (recipe.info.prepTime !== null) {
    prepTime = convertRecipeTimeToSeconds(recipe.info.prepTime);
    times["prepTime"] = secondsToISO8601(prepTime);
  }
  if (recipe.info.cookTime !== null) {
    cookTime = convertRecipeTimeToSeconds(recipe.info.cookTime);
    times["cookTime"] = secondsToISO8601(cookTime);
  }
  if (prepTime > 0 || cookTime > 0) {
    times["totalTime"] = secondsToISO8601(prepTime + cookTime);
  }
  return { ...structuredRecipe, times };
}

const appendDescription = (recipe, structuredRecipe) => {
  if (recipe.info.description !== undefined && recipe.info.description !== null) {
    const description = recipe.info.description
    return { ...structuredRecipe, description }
  } else {
    return structuredRecipe
  }
};

const appendRecipeIngredients = (recipe, structuredRecipe) => {
  let recipeIngredient = [];
  recipe.ingredients.forEach((ingredientsGroup) => {
    ingredientsGroup.items.forEach((ingredient) => {
      recipeIngredient.push(parseItem(ingredient).label);
    });
  });
  return { ...structuredRecipe, recipeIngredient };
};

const appendRecipeInstructions = (recipe, structuredRecipe) => {
  let recipeInstructions = [];
  recipe.directions.forEach((direction) => {
    recipeInstructions.push({
      "@type": "HowToStep",
      "text": direction
    })
  });
  return { ...structuredRecipe, recipeInstructions };
}

const buildStructuredRecipe = (recipe) => {
  let structuredRecipe = {
    '@context': "https://schema.org/",
    '@type': "Recipe",
    'name': recipe.info.title,
    'author': {
      '@type': "Person",
      'name': "Ryan Daley",
    },
  };
  structuredRecipe = appendDescription(recipe, structuredRecipe);
  structuredRecipe = appendCookTimes(recipe, structuredRecipe);

  if (recipe.info.makes != null) {
    structuredRecipe["recipeYield"] = recipe.info.makes;
  }

  structuredRecipe = appendRecipeIngredients(recipe, structuredRecipe);
  structuredRecipe = appendRecipeInstructions(recipe, structuredRecipe);
  console.log(structuredRecipe);
};

readRecipe("sampleRecipe7.json").then((recipe) => buildStructuredRecipe(recipe))
