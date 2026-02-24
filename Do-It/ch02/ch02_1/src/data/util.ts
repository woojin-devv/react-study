export const makeArray = (length: number) => new Array(length).fill(null);
export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map((ImportsNotUsedAsValues, index) => index + min);
export const random = (min: number, max: number): number => {
  if (max <= min) throw new Error("max must be greater than min");
  return Math.floor(Math.random() * (max - min)) + min;
};
