// Access the Images
let slideImages = document.querySelectorAll('.crsl_img')

// access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

var counter = 0;


// next button

next.addEventListener('click', slideNext);
function slideNext() {
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
        counter = 0;
    } else {
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
}

// prev button

prev.addEventListener('click', slidePrev);
function slidePrev() {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length-1;
    } else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
}

// auto sliding

function autoSliding(){
    deleteInterval = setInterval(timer, 2000);
    function timer(){
        slideNext();
    }
}
autoSliding();

// stop auto sliding when mouse is over
const container = document.querySelector('.slide_container');
container.addEventListener('mouseover', function(){
    clearInterval(deleteInterval);
});

// resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding);
