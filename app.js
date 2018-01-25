/*
GAME FUNCTION
- Player must guess a number between min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lose
-Let playerr choose to play again
*/

// game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(max, min),
    guessesLeft = 3,
    guess = "";

// UI elements
const game = document.querySelector("#game"),
    minNum = document.querySelector(".min-num"),
    maxNum = document.querySelector(".max-num"),
    guessBtn = document.querySelector("#guess-btn"),
    guessInput = document.querySelector("#guess-input"),
    message = document.querySelector(".message");

// assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

setFocusToInput();

// play again event listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

// listen for guess
guessBtn.addEventListener("click", function () {
    let msg;
    let guess = parseInt(guessInput.value);

    // validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
        guessInput.value = "";
    } else {
        console.log(winningNum);

        // check if won
        if (guess === winningNum) {
            // set message
            msg = `${winningNum} is correct. You won!`;
            gameOver(true, msg);
            guessBtn.value = "New Game";
        } else {
            // wrong number
            guessesLeft -= 1;

            if (guessesLeft === 0) {
                // game over -lost
                // set message
                msg = `Game over, you lost. The correct number was ${winningNum}`;
                gameOver(false, msg);
                guessBtn.value = "New Game";
            } else {
                // game continues - answer wrong
                // change border color
                guessInput.style.borderColor = 'red';
                message.style.color = 'red';

                // clear input
                guessInput.value = "";

                // display message
                setMessage(`Wrong answer. You have ${guessesLeft} guess(es) left.`, "red");
                guessBtn.value = "Play again";
                setFocusToInput();
            }
        }
    }
});

function gameOver(won, msg) {
    let color;
    color = won ? 'green' : 'red';
    // disable input after winning
    if (won) guessInput.disabled = true;

    // change border color
    guessInput.style.borderColor = color;
    message.style.color = color;

    // set message
    setMessage(msg);

    // Play again?
    guessBtn.value = "Play again";
    guessBtn.className += "play-again";
    setFocusToInput();
}

function setMessage(msg, color) {
    message.textContent = msg;
}

function getRandomNum(max, min) {
    return Math.floor(Math.random() * max + min);
}

function setFocusToInput() {
    document.getElementById("guess-input").focus();
}
    