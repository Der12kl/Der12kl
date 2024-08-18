// Task: Will there be enough space?
// URL: https://www.codewars.com/kata/5875b200d520904a04000003
// Description: You have to write a function that accepts three parameters:
//cap is the amount of people the bus can hold excluding the driver.
//on is the number of people on the bus excluding the driver.
//wait is the number of people waiting to get on to the bus excluding the driver.
//If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
  
function enough(cap, on, wait) {
    const totalPassengers = on + wait;
      if (totalPassengers <= cap) {
        return 0;
      } else {
        return totalPassengers - cap;
    }
      }

// This function returns the capacity of how many passengers the driver can accommodate.
// For more information on conditionals, visit: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
// For more information on Expressions and operators, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators
