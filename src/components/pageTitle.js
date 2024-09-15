import { textAlignCenter } from "../utils/utils.js";
import chalk from "chalk";
import { c } from "./basicComponents.js";
export const pageTitle = (text) => {
  console.log(
    `${textAlignCenter()}${chalk.yellowBright.bgBlackBright.bold.underline.overline(
      ` ${text} `
    )}`
  );
  c.line();
};
