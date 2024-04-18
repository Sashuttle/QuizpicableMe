// Note: API call from platform page
//const platformResponse = JSON.parse(localStorage.getItem('APIResponse'));
//console.log(platformResponse);


// Function to filter movies based on genre and sub-genre
function filterMovies(genre, subGenre) {
    const platformResponse = JSON.parse(localStorage.getItem('APIResponse'));
    const filteredMovies = platformResponse.result.filter(movie => {
        if (movie.genres.some(element =>{return element.name.toLowerCase()=== genre.toLowerCase()})) {
            return movie
        };
    });
    console.log(`Filtered movies for genre '${genre}':`, filteredMovies); 
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

/*const platformResponse = [
    { genre: 'comedy', subGenre: 'romanticComedy', title: 'Movie 1' },
    { genre: 'action', subGenre: 'thriller', title: 'Movie 2' },
    { genre: 'drama', subGenre: 'romanticDrama', title: 'Movie 3' }
  ];
  console.log(platformResponse);
  // Define the genre you want to filter by genre and subgenre
  function filterMovies(genre, subGenre) {
      return platformResponse.filter(item => {
          return item.genre === genre && item.subGenre === subGenre;
      });
  }
  // Example of filtering by 'comedy' and subgenre 'romantic comedy'
  document.getElementById("comedy").addEventListener("click", function() {
      const selectedMovies = filterMovies('comedy', 'romanticComedy');
      const filteredMovies = selectedMovies.map(item => {
          return item.title;
      });
      console.log(filteredMovies);
  });
  const selectedMovies = filterMovies('comedy', 'romanticComedy');
  const filteredMovies = selectedMovies.map(item => {
      return item.title;
  });*/