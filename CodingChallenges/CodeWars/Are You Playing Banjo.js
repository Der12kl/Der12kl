// Task: Are You Playing Banjo?
// URL: https://www.codewars.com/kata/53af2b8861023f1d88000832
// Description: Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!
// Otherwise, they are not.
function areYouPlayingBanjo(name) {
    // Implement me
   if (/^r/i.test(name)) {
      return name + " plays banjo"; 
   } else {
    return name + " does not play banjo";
  }
    }

//The regular expression ^r checks if a string starts with the letter 'r'.
//The i flag makes the check case-insensitive.
// For more information on Regular expressions, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions