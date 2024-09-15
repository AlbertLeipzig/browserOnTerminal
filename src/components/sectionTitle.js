import chalk from "chalk";

export const sectionTitle = (text) =>
  console.log(chalk.white.bgMagentaBright.underline(text));
