const apiKey = '81d6a7bdbdmsh2af2cb87ce7440dp1ea28fjsn2ec66bea64a5';
const movieDatabaseAPI = ({ Genre } = {}) => ({
    // async: true,
    crossDomain: true,
    url: 'https://moviedatabase8.p.rapidapi.com/Filter',
    data: {
        Limit: 3,
        Genre,
    },
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'moviedatabase8.p.rapidapi.com'
    },
});

function createMoviePosterElement({ src, title }){
    return `
        <div class="card-image" id="current-Movie">
            <img class="movie-poster"
                src="${src}"
                alt="${title}"
            />
    `;
}

function createMovieInfoElement ({ title, genres }) {
    return `
       <div class="small-boxes" id="current-Movie">
       <list>
        <h1 class="movie-title">${title}</h1>
        <p>Genres: ${genres}</p>
       </list>
      </div>
    `;
}

function getanswers() {
    return JSON.parse(localStorage.getItem('answers'));
}

async function callMovieApi(choices) {
    const response = await $.ajax(movieDatabaseAPI(choices));
    return response;
}

const moviesContainer = $("#main-content");
const moviesTitlesContainer = $("#movie-titles");
function renderMovies(movies){
    moviesContainer.empty();
    moviesTitlesContainer.empty();

     movies.map(function(movie) {
        const {
            original_title: title,
            poster_path: src,
            genres,
        } = movie;
        moviesContainer.append(createMoviePosterElement({ src, title }));
        moviesContainer.append(createMovieInfoElement({ title, genres }));
        
    });
     
}

$(async function(){
    const {
        genre: Genre,
    } = getanswers();
    const movies = await callMovieApi({ Genre });
    renderMovies(movies);
    
})