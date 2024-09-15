export const viewportWidth = process.stdout.columns;

export const textAlignCenter = (text) => {
  const textLength = String(text).length;
  const padding = Math.max(0, Math.floor((viewportWidth - textLength) / 2));
  return " ".repeat(padding);
};

export const textAlignCenterPadding = (text) => {
  const textLength = String(text).length;
  const padding = Math.max(0, Math.floor((viewportWidth - textLength) / 2));
  return " ".repeat(padding - 1);
};
