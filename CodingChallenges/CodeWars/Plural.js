// Task: Plural
// URL: https://www.codewars.com/kata/52ceafd1f235ce81aa00073a
// Description: We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not
function plural(n) {
    return n !== 1;  
    }
//The plural function takes a number n.
//It returns true if n is not 1 (that is, if the plural form is required).
//If n is 1, the function returns false, which means we are using the singular.
// For more information on Functions, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions