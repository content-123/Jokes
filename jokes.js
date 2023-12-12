// Function to fetch a Chuck Norris joke from the API
function getChuckNorrisJoke() {
    return fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => data.value)
        .catch(error => {
            console.error('Error fetching Chuck Norris joke:', error);
            throw error; // Propagate the error further
        });
}

// Function to update the UI with a new Chuck Norris joke
function updateJokeUI(joke) {
    const jokeTextElement = document.getElementById('jokeText');
    jokeTextElement.textContent = joke;
}

// Event listener for the "Get Joke" button
document.getElementById('getJokeBtn').addEventListener('click', () => {
    getChuckNorrisJoke()
        .then(joke => updateJokeUI(joke))
        .catch(error => console.error('Error updating UI:', error));
});