// Task: Opposites Attract
// URL: https://www.codewars.com/kata/555086d53eac039a2a000083
// Description: Timmy & Sarah think they are in love. To determine if they are in love, 
// they check if one flower has an even number of petals and the other has an odd number of petals.
// Write a function that takes the number of petals for each flower and returns true if one is even and the other is odd, false otherwise.
function lovefunc(flower1, flower2) {
    return (flower1 % 2) !== (flower2 % 2);
}

// flower1 % 2 and flower2 % 2 return 0 for even numbers and 1 for odd numbers.
// If one result is 0 and the other is 1, then (flower1 % 2) !== (flower2 % 2) evaluates to true,
// indicating that one flower has an even number of petals and the other has an odd number of petals.
// For more information on the modulo operator (%), visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Modulo
// For more information on Functions, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions