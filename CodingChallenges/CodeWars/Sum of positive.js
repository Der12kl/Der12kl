// Task: Sum of Positive
// URL: https://www.codewars.com/kata/5715eaedb436cf5606000381
// Description: You get an array of numbers, and you need to return the sum of all the positive numbers.
// The function tests your ability to iterate over an array and apply conditions.

/**
 * This function calculates the sum of all positive numbers in an array.
 * @param {Array} arr - Array of numbers.
 * @returns {number} - The sum of all positive numbers in the array.
 */
function positiveSum(arr) {
  let sum = 0; // Initialize sum to zero.
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) { // Check if the current number is positive.
          sum += arr[i]; // Add positive numbers to sum.
      }
  }
  return sum; // Return the total sum of positive numbers.
}

// Example usage:
console.log(positiveSum([1, -4, 7, 12])); // Outputs 20

// Refactoring:
/**
* Refactored function to calculate sum of all positive numbers using reduce method.
* @param {Array} arr - Array of numbers.
* @returns {number} - The sum of all positive numbers in the array.
*/
function positiveSumRefactored(arr) {
  // Use reduce to accumulate the sum of positive numbers.
  return arr.reduce((sum, current) => current > 0 ? sum + current : sum, 0);
}

// Example usage:
console.log(positiveSumRefactored([1, -4, 7, 12])); // Outputs 20

// Further Discussion:
// The refactored version uses the reduce method, which is more concise and functional. It iterates through the array, adding only positive numbers to the accumulator `sum`.
// The ternary operator `current > 0 ? sum + current : sum` is used to add the current number to sum if it is positive; otherwise, it simply returns the current sum without modification.