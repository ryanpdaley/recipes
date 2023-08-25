// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require('path')
const filePath = './../public/data/';

const readRecipe = async (fileName) => {
    const recipeFile = join(filePath, fileName);
    console.log(recipeFile);
    const recipe = await import(recipeFile, {
        assert: {
            type: 'json'
        }
    });
    return recipe.default
}

const convertRecipeTimeToSeconds = (recipeTime) => {
    let value = recipeTime.value;
    let unit = recipeTime.unit;
    let decimalValue = (value % 1)
    if (unit === "hours") {
        return (parseInt(value) + decimalValue) * 3600
    } else if (unit === "minutes") {
        return (parseInt(value) + decimalValue) * 60
    }
}

const secondsToISO8601 = (seconds) => {
    let out = "PT";
    if (seconds >= 3600) {
        let wholeHours = Math.floor(seconds / 3600)
        out += wholeHours + 'H'
        seconds = seconds - (wholeHours * 3600)
    }
    if (seconds >= 60) {
        let wholeMinutes = Math.floor(seconds / 60)
        out += wholeMinutes + 'M'
        seconds = seconds - (wholeMinutes * 60)
    }
    if (seconds >= 1) {
        out += seconds + 'S'
    }
    return out;
};

const appendCookTimes = (recipe, structuredRecipe) => {
    let prepTime = 0;
    let cookTime = 0;
    if (recipe.info.prepTime !== null) {
        prepTime = convertRecipeTimeToSeconds(recipe.info.prepTime);
        structuredRecipe['prepTime'] = secondsToISO8601(prepTime)
    }
    if (recipe.info.cookTime !== null) {
        cookTime = convertRecipeTimeToSeconds(recipe.info.cookTime);
        structuredRecipe['cookTime'] = secondsToISO8601(cookTime)
    }
    if (prepTime > 0 || cookTime > 0) {
        structuredRecipe['totalTime'] = secondsToISO8601(prepTime + cookTime)
    }
    return structuredRecipe;
}

const buildStructuredRecipe = (recipe) => {
    let structuredRecipe = {
        "@context": "https://schema.org/",
        "@type": "Recipe",
        "name": recipe.info.title,
        "author": {
            "@type": "Person",
            "name": "Ryan Daley"
        },
        "description": recipe.info.description,
    };
    structuredRecipe = appendCookTimes(recipe, structuredRecipe)

    // "recipeYield": "1 serving"
    // "recipeIngredient": [
    //     "2 cups of pineapple juice",
    //     "5/8 cup cream of coconut",
    //     "ice"
    //   ],
    //   "recipeInstructions": [
    //     {
    //       "@type": "HowToStep",
    //       "text": "Blend 2 cups of pineapple juice and 5/8 cup cream of coconut until smooth."
    //     },
    //     {
    //       "@type": "HowToStep",
    //       "text": "Fill a glass with ice."
    //     },
    //     {
    //       "@type": "HowToStep",
    //       "text": "Pour the pineapple juice and coconut mixture over ice."
    //     }
    //   ],
    console.log(structuredRecipe);
}

readRecipe('sampleRecipe.json').then((recipe) =>
    buildStructuredRecipe(recipe)
);