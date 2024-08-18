// Task: Calculate average
// URL: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
// Description: Write a function which calculates the average of the numbers in a given list.
//Note: Empty arrays should return 0.

function findAverage(array) {
    if (array.length === 0) return 0;
     return array.reduce((sum, value) => sum + value, 0) / array.length;
   }

// function calculates the average of the numbers in a given list
// For more information on length, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
// For more information on reduce(), visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce