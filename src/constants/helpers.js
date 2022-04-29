const defaultFontSize = parseFloat(
  getComputedStyle(document.documentElement).fontSize
);

export const remToPx = (rem) => rem * defaultFontSize;

export const pxToRem = (px) => `${px / defaultFontSize}rem`;
