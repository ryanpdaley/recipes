import ReactGA from "react-ga4";
import { GaEventObj, GaPageviewObj } from "../types";

export const initializeGA = () => {
  ReactGA.initialize("G-N7SZL1C190");
};

export const eventGA = (gaEventObj: GaEventObj) => {
  ReactGA.event({
    category: gaEventObj.category,
    action: gaEventObj.action,
    label: gaEventObj.label,
    value: gaEventObj.value,
    nonInteraction: gaEventObj.nonInteraction,
    transport: gaEventObj.transport,
  });
};

export const pageviewGA = (gaPageviewObj: GaPageviewObj) => {
  ReactGA.send({
    hitType: gaPageviewObj.hitType,
    page: gaPageviewObj.page,
    title: gaPageviewObj.title,
  });
};
