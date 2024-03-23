// Access the Images
let slideImages = document.querySelectorAll('img')
// access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// access the indicators
// 

var counter = 0;

// next button
next.addEventListener('click', slideNext);
function slideNext() {
    slideImages[counter].style.animation = 'next 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
        counter = 0;
    } else {
        counter++;
    }
}
