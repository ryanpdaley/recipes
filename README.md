# Recipes frontend

This is a recipe viewer that takes a list of recipes and a set of recipes in json, and displays them in a pleasing manner.

## Basic information

This project is mostly written in TypeScript, and utilizes the Polaris library from Shopify.

Currently it is reading the list of recipes from `recipes.json` which has links to the recipes which are statically linked in the `public/data` directory.

The json recipe format is:

```
{
    info: {
        title: string;
        makes?: null | string;
        prepTime?: null | { value: number; unit: string };
        cookTime?: null | { value: number; unit: string };
        description?: null | string;
        source?: null | { label: string; url: null | string };
    },
    ingredients: [
        {
            subHeading: null | string;
            items: [
                {
                    name: string;
                    measurement?: null | number[] | number;
                    measurementUnit?: null | string;
                    qualifierString:? null | string;
                    isConvertibleUnit?: boolean;
                    isOptional?: boolean;
                },
                ...
            ]
        },
        ...
    ],
    directions: [
        string;
        ...
    ]
}
```

## ToDo:

- [ ] Soon:
  - [ ] Testing (React | `Jest` | `@testing-library/react`)
  - [ ] Look into using `react-helmet` for dynamic metadata / SEO
  - [x] Optimize components
  - [x] Clean up mobile / desktop / print views (currently working, but there is a lot of repetition)
  - [ ] Hook up analytics
  - [x] Update to Shopify Polaris v12
- [ ] Future
  - [ ] Consume the graphQL endpoint once finished
  - [ ] Implement the front end to add new recipes
  - [ ] Add option to show ads

## Available Scripts

This project was initialized using create-react-script, so the following scripts are available for use in this project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

To learn TypeScript, check out the [TypeScript documentation](https://www.typescriptlang.org).

To learn more about Polaris, checkout the [Shopify Polaris documentation](https://polaris.shopify.com/).
