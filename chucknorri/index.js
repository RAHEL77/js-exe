const jokeUrl = `https://api.chucknorris.io/jokes/random`;
const jokeText = document.querySelector('#jokeText')
const jokeButton = document.querySelector('#jokebtn')

async function getJoke() {
    let joke = await (await fetch(jokeUrl)).json();
    jokeText.innerHTML = joke.value;
    console.log(joke)

}
jokeButton.addEventListener("click", getJoke);