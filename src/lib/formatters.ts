import { FRACTION_DICTIONARY } from "../constants";

export const convertDecimals = (measurement: number): string => {
  const decimal = measurement % 1;
  const wholeNumber = Math.trunc(measurement);
  if (decimal === 0 || !(decimal in FRACTION_DICTIONARY))
    return measurement.toString();

  return (
    (wholeNumber > 0 ? wholeNumber + " " : "") +
    String.fromCharCode(FRACTION_DICTIONARY[decimal])
  );
};
