import { cardTitle } from "./cardTitle.js";
export const container = (text) => {
  console.log("-".repeat(viewportWidth));
  /* console.log(`| ${" ".repeat(viewportWidth - 4)} |`); */
  console.log(cardTitle(text));
  console.log("-".repeat(viewportWidth));
};
