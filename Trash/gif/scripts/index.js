async function fetchGiphyResultsFromUserInput (searchQuery) {
    const API_URL = `http://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=qcJVUTcz3nQoeWZidSzzlzPB8VBZpmrw`
    const response = await fetch(API_URL);
    constant searchResults = await response.json();
    return searchResults;
}


async function giphySearch()  {
    const inputElement = document.querySelector("input");
    if (inputElement.value) {
        const response = await fetchGiphyResultsFromUserInput(inputElement.value);
        const { results } = response; //destructuring assignment the results array from the response 
        renderGifResults(results); // TODO: render these movies into the DOM
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
