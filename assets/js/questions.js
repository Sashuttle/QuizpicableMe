$(function(){
    $('#viewRecommendations').click(function(){
        const genre =$('input[name="genre"]:checked').val();
        const moviePreference =$('input[name="moviePreference"]:checked').val();
        const franchise =$('input[name="franchise"]:checked').val();
        const time =$('input[name="time"]:checked').val();
        const rating =$('input[name="rating"]:checked').val();
        const creator =$('input[name="creator"]:checked').val();
        localStorage.setItem('answers', JSON.stringify({genre, moviePreference, franchise, time, rating, creator}));
        location.href = 'resultspage.html';
})
});