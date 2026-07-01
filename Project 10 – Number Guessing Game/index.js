let guessInput = document.querySelector("#guessInput");
let submitGuessButton = document.querySelector("#submitGuess");
let messageDiv = document.querySelector("#message");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

submitGuessButton.addEventListener("click", () => {
    let userGuess = parseInt(guessInput.value);
    attempts++;

    if (userGuess === randomNumber) {
        messageDiv.textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`;
        messageDiv.style.color = "#00ff00";
    } else if (userGuess < randomNumber) {
        messageDiv.textContent = "Too low! Try again.";
        messageDiv.style.color = "white";
    } else {
        messageDiv.textContent = "Too high! Try again.";
        messageDiv.style.color = "white";
    }
});