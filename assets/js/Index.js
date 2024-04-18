// Note: API call from platform page
//const platformResponse = JSON.parse(localStorage.getItem('APIResponse'));
//console.log(platformResponse);


// Function to filter movies based on genre and sub-genre
function filterMovies(genre) {
    const platformResponse = JSON.parse(localStorage.getItem('APIResponse'));
    const filteredMovies = platformResponse.result.filter(movie => {
        if (movie.genres.some(element =>{return element.name.toLowerCase()=== genre.toLowerCase()})) {
            return movie
        };
    });
    console.log(`Filtered movies for genre '${genre}':`, filteredMovies);
    localStorage.setItem('FilteredMovies' , JSON.stringify(filteredMovies)); 
    return filteredMovies;
}


// Example: Filter movies based on genre 'comedy' and sub-genre 'romantic comedy'
document.querySelectorAll('.genreOption').forEach(option => {
    option.addEventListener('change', function() {
        const selectedGenre = this.value;
        const filteredMovies = filterMovies(selectedGenre);
        localStorage.setItem('FilteredMovies', JSON.stringify(filteredMovies));
    });
});

const filteredMovies = filterMovies('comedy', 'romantic comedy');
console.log(filteredMovies);
