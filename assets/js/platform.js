//Note: Platform variables

const netflix = document.getElementsByClassName('netflixBtn')[0];
const hulu = document.getElementsByClassName('huluBtn')[0];


//Note: click event handler for platform buttons
netflix.addEventListener('click' , function (){
    choosePlatform('netflix');
    redirect();
});

hulu.addEventListener('click', function(){
     choosePlatform('hulu');
    redirect();
});

function redirect(){
        window.location.href = "./questions.html"
}

// Note: Functions
async function choosePlatform(platform) {
    localStorage.setItem('Platform' , platform);
};

