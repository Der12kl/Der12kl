// Task: Rock Paper Scissors!
// URL: https://www.codewars.com/kata/5672a98bdbdd995fad00000f
// Description: Let's play! You have to return which player won! In case of a draw return Draw!.
//Examples(Input1, Input2 --> Output):
//"scissors", "paper" --> "Player 1 won!"
//"scissors", "rock" --> "Player 2 won!"
//"paper", "paper" --> "Draw!"
const rps = (p1, p2) => {
    if (p1 === p2) {
      return "Draw!";
    } else if (
      (p1 === "rock" && p2 === "scissors") || (p1 === "scissors" && p2 === "paper") ||
      (p1 === "paper" && p2 === "rock") 
    ) {
      return "Player 1 won!";
      } else {
        return "Player 2 won!";
        }
  };

// function returns who won the game
// For more information on if statements, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else