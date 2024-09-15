import chalk from "chalk";
export const bold = (text) =>
  console.log(chalk.bgWhiteBright.blackBright.bold.underline(text));
