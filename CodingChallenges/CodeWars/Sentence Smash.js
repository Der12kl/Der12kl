// Task: Sentence Smash
// URL: https://www.codewars.com/kata/53dc23c68a0c93699800041d
// Description: Sentence Smash
//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
//Example
//['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
function smash (words) {
    return words.join(' '); // The join() method combines all elements of an array into a string, separating them with the specified delimiter. In this case, the delimiter is a space (' ').
 };

// The function returns a string consisting of words separated by spaces.
// For more information on join(), visit: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join