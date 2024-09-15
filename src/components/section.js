import { p } from "./p.js";
import { sectionTitle } from "./sectionTitle.js";
import { line } from "./line.js";
export const section = ({ title, body }) => {
  sectionTitle(title);
  p(body);
  line();
};
