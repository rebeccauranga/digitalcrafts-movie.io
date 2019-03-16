
async function fetchMoviesFromUserInput(searchQuery) {
    const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=4e818663c4f334a33277fd88c377dea4&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    const response = await fetch(API_URL);
    const searchResults = await response.json();
    return searchResults;
}

//Chastity code to fetch API
async function fetchFunFactsFromUserInput(searchQuery) {
    const API_URLTwo = `https://tastedive.com/api/similar?q=bambi&api_key=332433-frontend-HJU6EF7T&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    const responseTwo = await fetch(API_URLTwo);
    const searchResultsTwo = await response.json();
    return searchResultsTwo;
}

// Chastity code 
async function funFactsSearch()  {
    const inputElementTwo = document.querySelector("input");
    if (inputElementTwo.value) {
        const responseTwo = await fetchFunFactsFromUserInput(inputElementTwo.value);
        const { resultsTwo } = responseTwo; //destructuring assignment the results array from the response 
        renderFactsResults(resultsTwo); // TODO: render these movies into the DOM
    } else {
        alert('Please enter a fun fact!');
    }
}




async function movieSearch()  {
    const inputElement = document.querySelector("input");
    if (inputElement.value) {
        const response = await fetchMoviesFromUserInput(inputElement.value);
        const { results } = response; //destructuring assignment the results array from the response 
        renderMovieResults(results); // TODO: render these movies into the DOM
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


