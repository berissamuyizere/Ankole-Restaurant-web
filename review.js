const reviews = 
document.querySelectorAll('.review');
const prevButton = 
document.getElementById('prev-review');
const nextButton = 
document.getElementById('next-review');

let currentReviewIndex = 0;
let isAnimating = false;

function displayReview(index, direction){
    if(isAnimating || index === currentReviewIndex)return;
    isAnimating = true;


const currentReview = reviews[currentReviewIndex];
const nextReview = reviews[index];

if(direction === 'next'){
    currentReview.classList.add('slide-out-left');
    nextReview.classList.add('slide-in-right')
} else if(direction === 'prev'){
    currentReview.classList.add('slide-out-right');
    nextReview.classList.add('slide-in-left');
} else{
    nextReview.classList.add('active');
    currentReviewIndex = index;
    isAnimating = false;
    return;
}

setTimeout(()=>{
    currentReview.classList.remove('active', 'slide-out-left', 'slide-out-right');
    nextReview.classList.remove('slide-in-right', 'slide-in-left');
    nextReview.classList.add('active');
    currentReviewIndex = index;
    isAnimating = false;
}, 500);
}
function nextReview(){
    let nextIndex = (currentReviewIndex +1 ) % reviews.length;
    console.log('next Index ', nextIndex);
    displayReview(nextIndex, 'next') 
}
function prevReview(){
    let prevIndex = (currentReviewIndex -1 + reviews.length) % reviews.length;
    console.log('Previous Index: ', prevIndex);
    displayReview(prevIndex, 'prev');
}

displayReview(currentReviewIndex, 'none');
if(nextButton){
    nextButton.addEventListener('click', nextReview);
}

if(prevButton){
    prevButton.addEventListener('click', prevReview);
}

reviews[currentReviewIndex].classList.add('active')


