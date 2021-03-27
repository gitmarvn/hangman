
const puzzleEl = document.querySelector("#puzzles")
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman("cat", 2)

puzzleEl.textContent = game1.getPuzzle()

console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    console.log(game1.remainingGuesses)
})
