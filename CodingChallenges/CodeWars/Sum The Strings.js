// Task: Sum The Strings
// URL: https://www.codewars.com/kata/5966e33c4e686b508700002d
// Description: Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
//Example: (Input1, Input2 -->Output)
//"4",  "5" --> "9"
//"34", "5" --> "39"
//"", "" --> "0"
//"2", "" --> "2"
//"-5", "3" --> "-2"
//Notes:
//If either input is an empty string, consider it as zero.
//Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
  
function sumStr(a, b) {
    const num1 = parseInt(a) || 0; // Convert string to integer, defalut to 0 if empty
    const num2 = parseInt(b) || 0; // Convert string to integer, defalut to 0 if empty
    const sum = num1 + num2; 
    return sum.toString(); // Convert the sum back to string
  }

// For more information on parseInt, visit: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// For more information on toString, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
