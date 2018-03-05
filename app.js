/* 
  Game Function:
  - Player must guess a number between a min and max
  - Player gets a certain amount of guesses
  - Notify player for the guess remaining
  - Notify the player of the correct answer if does
  - Let player chose to play again
*/

// Game Values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game');
      minNum = document.querySelector('.min-num');
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess

guessBtn.addEventListener('click', function(){

  let guess = parseInt(guessInput.value);
  console.log(guess);

  // Validate our Input
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if(guess === winningNum) {
    // Disable Input
    guessInput.disabled = true;
    // Change border green
    guessInput.style.borderColor = 'green';
    // Set Message
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green');

  } else {

  }
});

// setMessage
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}