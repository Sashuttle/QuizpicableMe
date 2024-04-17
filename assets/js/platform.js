//Note: Platform variables

const netflix = document.getElementsByClassName('netflixBtn')[0];
const hulu = document.getElementsByClassName('huluBtn')[0];


//Note: click event handler for platform buttons
netflix.addEventListener('click' , async function (){
    await choosePlatform('netflix');
    redirect();
});

hulu.addEventListener('click', async function(){
    await choosePlatform('hulu');
    redirect();
});

function redirect(){
    setTimeout(() => {
        window.location.href = "./index.html"
    }, 2000);
}

// Note: Functions
async function choosePlatform(platformArg) {
    localStorage.setItem('selectedPlatform' , platformArg);
    const response = await search(platformArg);
    return response;
};

function search(platform) {
    const settings = {
        async: true,
        crossDomain: true,
        url: `https://streaming-availability.p.rapidapi.com/search/filters?services=${platform}&country=us&output_language=en&order_by=original_title&genres_relation=and&show_type=all`,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '67c9f19b02mshc8881142d24b696p1177acjsnfa51979c1728',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };
    
    $.ajax(settings).done(function (response) {
        localStorage.setItem('APIResponse' , JSON.stringify(response));
    }); 
};
