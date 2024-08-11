// Task: Square(n) Sum
// URL: https://www.codewars.com/kata/515e271a311df0350d00000f
// Description: Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers){
    return numbers.reduce((sum, num) => sum + num * num, 0);
    }
// The squareSum function takes an array of numbers and returns the sum of the squares of those numbers.
//The reduce() method is used to sum the squares of numbers. reduce() iterates over each element of the array, squares it, and adds it to the accumulated sum.
//The initial value of the sum is set to 0.
// For more information on reduce(), visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce