

async function fetchMoviesFromUserInput(searchQuery) {
    const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=4e818663c4f334a33277fd88c377dea4&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    const response = await fetch(API_URL);
    const searchResults = await response.json();
    return searchResults;
}

console.log(fetchMoviesFromUserInput('bambi'));

async function movieSearch()  {
    const inputElement = document.querySelector("input");
    // window.location = `/movie-listing.html?query=${inputElement.value}`;
    if (inputElement.value) {
        const response = await fetchMoviesFromUserInput(inputElement.value);
        const { results } = response; //destructuring assignment the results array from the response 
        renderMovieResults(results); // TODO: render these movies into the DOM
        hideVideo();
        hideHeader();
        
    } else {
        alert('Please enter a movie!');
    }
}

/** render a single search result */
function renderMovieResults(movies) {
    /** get parent (container) element that will hold the list of movies */
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

function hideHeader() {
    const headerElement = document.querySelector(".header");
    headerElement.style.display = "none";
}




