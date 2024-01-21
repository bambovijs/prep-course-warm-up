export {};

/**
 * Write a function that removes an element form array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 */

// You are allowed to edit only this function
function remove<T>(arr: T[], valueToRemove: T): T[] {
  const index = arr.indexOf(valueToRemove);

  if (index !== -1) {
    // Create a new array using the spread operator
    return arr.slice(0, index).concat(arr.slice(index + 1));
  }

  // If the value is not found, return the original array
  return arr;
}

const numbers = [1, 2, 3];
const names = ["John", "Alice", "Ellen"];

const newNumbers = remove(numbers, 2);
const newNames = remove(names, "Ellen");

console.log(newNumbers);
console.log(newNames);

/* 
  Expected output:
  
      [1, 3]
      [John, Alice]
*/
