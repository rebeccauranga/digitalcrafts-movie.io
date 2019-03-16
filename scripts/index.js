
var video = document.querySelector("fullscreen-bg");

async function fetchMoviesFromUserInput(searchQuery) {
    const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=4e818663c4f334a33277fd88c377dea4&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    const response = await fetch(API_URL);
    const searchResults = await response.json();
    return searchResults;
}

async function movieSearch()  {
    const inputElement = document.querySelector("input");
    if (inputElement.value) {
        const response = await fetchMoviesFromUserInput(inputElement.value);
        const { results } = response; //destructuring assignment the results array from the response 
        renderMovieResults(results); // TODO: render these movies into the DOM
        hideVideo();
    } else {
        alert('Please enter a movie!');
    }
}

/** render a single search result */
function renderMovieResults(movies) {
    movies.forEach(movie => {
        console.log(movie);

        const titleElement = document.createElement("h1");
        titleElement.textContent = movie.title; 
        const detailArea = document.querySelector("[data-details]");
        detailArea.appendChild(titleElement);

        const movieDescriptionElement = document.createElement("p");
        movieDescriptionElement.textContent = movie.overview;
        detailArea.appendChild(movieDescriptionElement);

        const moviePosterElement = document.createElement("img");
        moviePosterElement.setAttribute('src', `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`);
        detailArea.appendChild(moviePosterElement);

    });
}

function hideVideo() {
    const videoElement = document.querySelector(".fullscreen-bg");
    videoElement.style.display = "none";
}

var GphApiClient = require('giphy-js-sdk-core')
client = GphApiClient("qcJVUTcz3nQoeWZidSzzlzPB8VBZpmrw")

async function fetchGiphyResultsViaUserInput() {
const giphy_API_URL = `"http://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=qcJVUTcz3nQoeWZidSzzlzPB8VBZpmrw
&limit=5"`
const giphyResponse = await fetch(giphy_API_URL);
constant giphyResults = await response.json();
return giphyResults;
}

function renderGiphyResults() { 

}





    // Giphy API key qcJVUTcz3nQoeWZidSzzlzPB8VBZpmrw
