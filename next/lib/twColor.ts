import colors from "tailwindcss/colors";
import { flatten } from "flat";

// Checks if the hex color is correctly formatted and returns the closest match, otherwise throws an error.
export function tailwindMatcher(color) {
  // Flattens the color object and adds a "-" delimiter for exact TailwindCSS match
  const tailwindReference = flatten(colors, { delimiter: "-" });
  // Tailwind classes that break the lookup, could be a loop with the regex below
  delete tailwindReference.inherit;
  delete tailwindReference.current;
  delete tailwindReference.transparent;

  // Initialized the color matcher on the flattened Tailwind colors object
  const nearestColor = require("nearest-color").from(tailwindReference);

  if (/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
    return nearestColor(color).name;
  } else {
    throw new Error("Wrong Hex syntax. Please use #xxx or #xxxxxx.");
  }
}
