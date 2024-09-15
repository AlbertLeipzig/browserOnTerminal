import chalk from "chalk";
import { textAlignCenterPadding } from "../utils/utils.js";

export const cardTitle = (text) => {
  return `${textAlignCenterPadding()}${chalk.magenta.bgRed.italic(
    ` ${text} `
  )}`;
};
