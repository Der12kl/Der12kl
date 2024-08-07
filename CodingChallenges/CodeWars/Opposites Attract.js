// Task: Opposites Attract
// URL: https://www.codewars.com/kata/555086d53eac039a2a000083
// Description: Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
function lovefunc(flower1, flower2){
    return(flower1 % 2) !== (flower2 % 2)
  }
//flower1 % 2 and flower2 % 2 return 0 (if even) or 1 (if odd).
//If one value is 0 and the other is 1, then (flower1 % 2) !== (flower2 % 2) will be true, indicating a parity difference.
// For more information on Expressions and operators, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Modulo
// For more information on Functions, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions