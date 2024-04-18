// Task: Sum Mixed Array
// URL: https://www.codewars.com/kata/57eaeb9578748ff92a000009/solutions/javascript
// Description: Given an array of integers as strings and numbers, the task is to return the sum of the array values as if all were numbers. This problem tests basic array manipulation and type conversion in JavaScript.

/**
 * This function takes an array of mixed types (numbers and strings) and sums them as numbers.
 * @param {Array} x - Array of numbers and strings.
 * @returns {number} - The sum of the array elements treated as numbers.
 */
function sumMix(x) {
    // The reduce method accumulates values within the array, using "+" to convert strings to numbers.
    return x.reduce((sum, val) => sum + (+val), 0);
}

// Example usage:
console.log(sumMix([1, '2', '3', 4])); // Outputs 10

// Further Discussion:
// I chose to use the unary plus operator to convert string elements to numbers quickly. An alternative could be using parseInt or parseFloat, but for this problem, where we only deal with integer values, the unary plus is more concise and performs well.
