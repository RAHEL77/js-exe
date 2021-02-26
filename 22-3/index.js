const msg = document.querySelector("#msg1")
const el = document.querySelector("Submit")
el.addEventListener("click", () => {
    if (msg.length <= 10) {
        document.getElementById("#alert").innerHTML = "enter at least 100 letter";
    }
})

document.onkeypress = function(event) {
        var userGuess = event.key;

        if (userGuess === computerChoice) {
            wins++;
        } else {
            guesses--;
        }

        if (guesses === 0) {
            losses++
        }

        document.getElementById('wins').innerHTML = "Wins: " + wins;
        document.getElementById('losses').innerHTML = "losses: " + losses;
        document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;