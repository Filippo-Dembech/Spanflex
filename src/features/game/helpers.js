export function generateRandomDigits(length) {
  return Array.from({ length }, () => Math.floor(Math.random() * 10));
}

export function separateDigits(arr) {
  if (arr.length <= 1) return arr;
    
  let result = [];
  for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);
      if (i < arr.length - 1) {
          result.push("");
      }
  }
  return result;
    
}