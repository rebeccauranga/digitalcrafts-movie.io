console.log('testing');
// API_URL = "https://api.themoviedb.org/3/movie/550?api_key=4e818663c4f334a33277fd88c377dea4";

async function fetchMoviesFromUserInput(searchQuery) {
    const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=4e818663c4f334a33277fd88c377dea4&language=en-US&query=${searchQuery}&page=1&include_adult=false`

    const response = await fetch(API_URL);
    const searchResults = await response.json();
    return searchResults;    
}

fetchMoviesFromUserInput("batman").then( (userInputSearchResults) => {
    console.log(userInputSearchResults);
});

