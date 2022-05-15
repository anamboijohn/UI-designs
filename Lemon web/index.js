
let decrease = document.getElementById('decrease');
let increase = document.getElementById('increase');
let num = document.getElementById('num');
let number = 0;

const numIncrease = ()=>{
    number++;
    num.innerHTML =   ` <center style = "margin-left: 8px; margin-top: 5px;"> ${String(number).padStart(2, 0)} </center>`;
}

const numDecrease = ()=>{
    if(number >= 0) {
    number--;
    if(number >= 0) num.innerHTML = ` <center style = "margin-left: 8px; margin-top: 5px;"> ${String(number).padStart(2, 0)} </center>`;
    }
}

if(number >= 0) {
    decrease.addEventListener('click', numDecrease);
    increase.addEventListener('click', numIncrease)
}