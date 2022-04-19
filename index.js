var submit =document.querySelector('#submit');
var rating = document.querySelector('#rating');
var thank = document.querySelector('#thank-you');
var state = document.querySelectorAll('.state');

var selectState = 1;

function clickSubmit(){
    rating.classList.add('hidden');
    thank.classList.remove('hidden');
    document.getElementById("select-rating").innerHTML=selectState;
}

function clickState(){
    this.classList.add('active');
    for (const button of state){
        if(button!=this) button.classList.remove('active');
    }
    selectState = this.innerText;
}

submit.addEventListener('click', clickSubmit);
for (const button of state){
    button.addEventListener('click', clickState);
}

