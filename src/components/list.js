import { p } from "./p.js";
export const list = (entries) => {
  entries.forEach((entry) => p(`>>${entry}`));
};
