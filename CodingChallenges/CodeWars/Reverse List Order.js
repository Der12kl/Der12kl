// Task: Reverse List Order
// URL: https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b
// Description: In this kata you will create a function that takes in a list and returns a list with the reverse order.
function reverseList(list) {
return list.reverse();
}
//list.reverse(): The reverse() method reverses the order of the elements in the original array and returns a reference to this modified array. This means that the reverseList function modifies the passed list array, rather than creating a new one. After calling the reverse() method, the original list array will contain the elements in reverse order.
// For more information on Array.prototype.reverse(), visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse