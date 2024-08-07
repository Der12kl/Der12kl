// Task: Counting sheep...
// URL: https://www.codewars.com/kata/54edbc7200b811e956000556
// Description: Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). Don't forget to check for bad values like null/undefined
function countSheeps(sheep) {
    return sheep.filter(Boolean).length;
  }
// The filter(Boolean) method is used to remove all values that are falsy, such as false, null, undefined, 0, NaN, or empty strings. 
// In this case, it will keep only the true values, which represent the present sheep.
// The length method then counts the number of remaining true values in the array.
// For more information on Array.prototype.filter(), visit: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter