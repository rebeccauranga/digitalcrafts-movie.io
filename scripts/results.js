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

    } else {
        alert('Please enter a movie!');
    }
}

function renderMovieResults(movies) {
    /** get parent (container) element that will hold the list of movies */
    movies.forEach(movie => {
    
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

// function clearMovieResults() {
//     const detailArea = document.querySelector("[data-details]");
//     detailArea.innerHTML = "";
// }

document.onkeydown=function(){
    if(window.event.keyCode=='13'){
        movieSearch();
    }
}
