const defaultFontSize = parseFloat(
  getComputedStyle(document.documentElement).fontSize
);

export const remToPx = (rem) => rem * defaultFontSize;

export const pxToRem = (px) => `${px / defaultFontSize}rem`;

export const hasErrors = (errors) =>
  Object.values(errors).some((error) => error);

export const hexToRGBA = (hex, opacity) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";
};
