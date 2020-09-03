export const CAGR = (arr = []) => {
  const length = arr.length;
  const curr = arr[length - 1];
  const past = arr[0];
  const multiplier = curr / past;
  const result = ((Math.pow(multiplier, 1 / length) - 1) * 100).toFixed(2);
  return parseFloat(result);
};
