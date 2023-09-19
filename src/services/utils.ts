export const generatePrime = (): number => {
  const randomNumber = Math.random() * (999 - 100) + 100;
  return +randomNumber.toFixed(2);
}
