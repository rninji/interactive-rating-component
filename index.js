var submit =document.querySelector('#submit');
var rating = document.querySelector('#rating');
var thank = document.querySelector('#thank-you');

function clickSubmit(){
    rating.classList.add('hidden');
    thank.classList.remove('hidden');
}

submit.addEventListener('click', clickSubmit);