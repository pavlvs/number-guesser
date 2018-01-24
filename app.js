/*
GAME FUNCTION
- Player must guess a number between min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lose
-Let playerr choose to play again
*/

// game values

let min       = 1,
	max         = 10,
	winningNum  = 2,
	guessesLeft = 3,
	guess       = '';

// UI elements
const game   = document.querySelector('#game'),
	minNum     = document.querySelector('.min-num'),
	maxNum     = document.querySelector('.max-num'),
	guessBtn   = document.querySelector('#guess-btn'),
	guessInput = document.querySelector('#guess-input'),
	message    = document.querySelector('.message');

// assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// listen for guess
guessBtn.addEventListener('click', function() {
	let guess = parseInt(guessInput.value);

	// validate
	if (isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter a number between ${min} and ${max}`, 'red');
	}
	// check if won
	if (guess === winningNum) {
		// disable input
		guessInput.disabled = true;
		// change border color
		guessInput.style.borderColor = 'green';
		// set message
		setMessage(`${winningNum} is correct. You won!`);
	} else {
		
	}
});

function setMessage(msg, color) {
	message.style.color = color;
    message.textContent = msg;
}