const platformResponse = JSON.parse(localStorage.getItem('APIResponse'));
const filteredResponse = JSON.parse(localStorage.getItem('FilteredMovies'));

const apiKey = '81d6a7bdbdmsh2af2cb87ce7440dp1ea28fjsn2ec66bea64a5'
const apiMovieDatabase = 'https://moviedatabase8.p.rapidapi.com/FindByImbdId/tt1375666';
const apiMovieDatabaseResults = 'https://moviedatabase8.p.rapidapi.com/Filter?Limit=30&MinRating=5.1&MaxRating=9.9&MinYear=1980&MaxYear=2023&MinRevenue=1000000&MaxRevenue=300000000&Genre=Action%20Comedy%20History%20Horror&MinRuntime=60&MaxRuntime=180&OriginalLanguage=en&SpokenLanguage=English';
const apiMovieDatabaseDetails = 'https://moviedatabase8.p.rapidapi.com/movie/';


function getMovieDetails(){
    const currentId = locoalStorage.getItem('movieId') || 0;
    const newId = +currentId + 1;
    localStorage.setItem('movieId',newId);
    return newId;
}

function getMovieDetailsById(movieId){
    const newId ={
        movieId: movieId,
    };
    return newId;
}

function createMovieCard(props){
    const {movieId} = props;
    const movieCard = `
    <div class="movie-card" id="movie-card-${movieId}">`
    ;
    return movieCard;
}

function handleMovieId(event){
    event.preventDefault();
    const currentId = getnextId();
    const newId = createId(currentId);

    const Id =readId();
    Id.push(newId);
    writeId(Id);

    const movieCard = createId(newId);
    $('#movie-list').append(movieCard);
}

function readId(){
    const currentId =JSON.parse(localStorage.getItem('movieId')) || [];
    return currentId;
}

function writeId(Id){
   const storeId = JSON.stringify(Id);
   return localStorage.setItem('movieId',storeId);
}

function renderId(){
    const Id =readId();
    Id.forEach((Id) => {
        const movieCard = createId(Id);
        $('#movie-list').append(movieCard);
    });
}

function currentMovieDetails(movieInfo){
    const {
        Title,
        Plot,
        Poster,
    } = movieInfo;
    return `
    <div class="movie-card-body">
        <h3>${Title}</h3>
        <p>${Plot}</p>
        <img src="${Poster}" alt="${Title}" />
    </div>
    `;
}

async function getMovieDetails(){
    const apiURL = apiMovieDatabaseResults();
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
}

const currentMovieElement = $('#current-Movie');
function displayCurrentMovie(movieInfo){
    currentMovieElement.empty();
    movieInfo.list.forEach(function(movieInfo){
        currentMovieElement.append(currentMovieDetails(movieInfo));
    });
};




