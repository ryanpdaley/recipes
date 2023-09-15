import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "@shopify/polaris/build/esm/styles.css";
import Recipes from "./Recipes";
import { initializeGA, eventGA } from "./lib/ga";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
initializeGA();
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Recipes />
    </BrowserRouter>
    <>
      {eventGA({
        category: "version",
        action: `version_${
          process.env.REACT_APP_VERSION != null
            ? process.env.REACT_APP_VERSION
            : "unknown"
        }`,
      })}
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
