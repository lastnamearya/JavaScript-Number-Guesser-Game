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
    winningNum = getRandomNum(min, max);
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

// Plain Again event Listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
    history.go(0);
    
  }
});

// Listen for guess

guessBtn.addEventListener('click', function(){

  let guess = parseInt(guessInput.value);
  // Validate our Input
  if(isNaN(guess) || guess < min || guess > max){
    return setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    guessInput.value = "";
  } 


  // Check if won
  if(guess === winningNum) {
    // Game over - WON

    gameOver(true, `${winningNum} is correct, YOU WIN!`);

  } else {
    // Wrong Number
    guessesLeft -= 1;

    if(guessesLeft === 0){
      // Game over - lost
      gameOver(false, `Game Over, You Lost. The correct number was ${winningNum}`); 
    } else {
      // Game Continues - answer wrong

      // change border color
      guessInput.style.borderColor = "red";

      // Clear Input 
      guessInput.value = "";

      // Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 
      'red');
    }
  }
  
});

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? color = "green" : color = "red";

  // Disable Input
  guessInput.disabled = true;
  // Change Borde Color
  guessInput.style.borderColor = color;
  // Set Text Color
  message.style.color = color;
  // Set Message
  setMessage(msg);

  // Play Again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Get Random Number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// setMessage
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}