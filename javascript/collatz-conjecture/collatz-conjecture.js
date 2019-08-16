export const steps = (n, index = 0) => {
  if (n <= 0) throw Error('Only positive numbers are allowed');
  while (n > 1) {
    index++;
    (n % 2) ? n = 3 * n + 1 : n = n / 2;
  }
  return index;
};