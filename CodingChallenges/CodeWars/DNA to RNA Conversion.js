// Task:DNA to RNA Conversion
// URL: https://www.codewars.com/kata/5556282156230d0e5e000089
// Description: Create a function which translates a given DNA string into RNA.
function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U")
}
///T/g is a regular expression that means “find all occurrences of the character ‘T’ in a string”. 
//The g in the regular expression means “global search”, which allows you to replace all occurrences, not just the first one.
// For more information on regular expressions, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
