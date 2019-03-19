
// var mainClick;
// function preload(){
//     mainClick = loadSound("/Media/audio/Dolphins Clicks-SoundBible.com-1458516263.mp3");
// }
async function fetchMoviesFromUserInput(searchQuery) {
    const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=4e818663c4f334a33277fd88c377dea4&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    const response = await fetch(API_URL);
    const searchResults = await response.json();
    return searchResults;
}

function playAudio() {
    const sound = document.getElementById("myAudio");
    sound.play();
}

async function movieSearch()  {
    const inputElement = document.querySelector("input");
    
    
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

function renderMovieResults(movies) {
    clearMovieResults();
    /** get parent (container) element that will hold the list of movies */
    movies.forEach(movie => {
    
        const detailArea = document.querySelector("[data-details]");

        const movieResultDiv = document.createElement("div");
        movieResultDiv.innerHTML = `
        <div class="movie-result">
        <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}">
        <div class="overlay">
        <div class="text">
            <h3>${movie.title}</h3>
            <p>${movie.overview}</p>
            </div>
            <div>
        </div>
        `;

        detailArea.appendChild(movieResultDiv);

});
}


function clearMovieResults() {
    const detailArea = document.querySelector("[data-details]");
    detailArea.innerHTML = "";
}

function hideVideo() {
    const videoElement = document.querySelector(".fullscreen-bg");
    videoElement.style.display = "none";
}

function hideHeader() {
    const headerElement = document.querySelector(".header");
    headerElement.style.display = "none";
}
