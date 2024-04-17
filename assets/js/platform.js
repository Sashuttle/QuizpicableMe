//Note: Platform variables

const netflix = document.getElementsByClassName('netflixBtn')[0];
const hulu = document.getElementsByClassName('huluBtn')[0];

let platform;

//Note: click event handler for platform buttons
netflix.addEventListener('click' , function (){
    choosePlatform('netflix');
    console.log('netflix')
});

hulu.addEventListener('click', function(){
    choosePlatform('hulu');
    console.log('hulu');
});
//FixMe: we need an click event listener for hulu and netflix btns when they are clicked on they should run choose platform function if they clicked hulu the platform value should be hulu.subcription if they pick netflix it should be netflix.subscription
// Note: Functions
function choosePlatform(platformArg) {
    localStorage.setItem('selectedPlatform' , platformArg);
    platform = platformArg;
}

function search(platform, genre) {
    const settings = {
        async: true,
        crossDomain: true,
        url: `https://streaming-availability.p.rapidapi.com/search/filters?services=${platform}&country=us&keyword=${genre}&output_language=en&order_by=original_title&genres_relation=and&show_type=all`,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '67c9f19b02mshc8881142d24b696p1177acjsnfa51979c1728',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    }); 
};
// Uncomment here to test API search('netflix' , 'house of cards')

//FixMe: 