export function generateRandomDigits(length) {
  return Array.from({ length }, () => Math.floor(Math.random() * 10));
}