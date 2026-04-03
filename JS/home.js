let mood_genre = {
    happy: 35,            // Comedy
    sad: 18,              // Drama
    excited: 12,          // Adventure
    indianPatriotic: 10752, // War
    relaxed: 10749,       // Romance
    confused: 53          // Thriller
};

function fetchMovies(genreId) {
    let apiKey = "4789ae87d318d381c5db330ca1effe53" ;

    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;

    let container = document.getElementById("movieContainer");
    container.innerHTML = "Loading...";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.results);
        })
        .catch(error => {
            console.log("Error:", error);
        });
}

function displayMovies(movies) {
    let container = document.getElementById("movieContainer");
    container.innerHTML = "";

    movies.forEach(function (movie) {
        let card = document.createElement("div");
        card.classList.add("movie-card");

        let title = document.createElement("h3");
        title.textContent = movie.title;

        let rating = document.createElement("p");
        rating.textContent = "⭐ " + movie.vote_average;

        let img = document.createElement("img");

        if (movie.poster_path) {
            img.src = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
        } else {
            img.src = "https://via.placeholder.com/200";
        }

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(rating);

        container.appendChild(card);
    });
}

let happyBtn = document.getElementById("happy");
let sadBtn = document.getElementById("sad");
let excitedBtn = document.getElementById("excited");
let indianPatrioticBtn = document.getElementById("indian_patriotic");
let relaxedBtn = document.getElementById("relaxed");
let confusedBtn = document.getElementById("confused");

happyBtn.addEventListener("click", function () {
    fetchMovies(mood_genre.happy);
});

sadBtn.addEventListener("click", function () {
    fetchMovies(mood_genre.sad);
});

excitedBtn.addEventListener("click", function () {
    fetchMovies(mood_genre.excited);
});

indianPatrioticBtn.addEventListener("click", function () {
    fetchMovies(mood_genre.indianPatriotic);
});

relaxedBtn.addEventListener("click", function () {
    fetchMovies(mood_genre.relaxed);
});

confusedBtn.addEventListener("click", function () {
    fetchMovies(mood_genre.confused);
});