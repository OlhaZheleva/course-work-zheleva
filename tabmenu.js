'use strict';


let historyBtn = document.getElementById('history')
let mainBtn = document.getElementById('main');

let mainPage = document.querySelector('.main');
let historyPage = document.querySelector('.history');


historyBtn.addEventListener('click', function(){
    historyPage.classList.add('open');
    mainPage.classList.add('hidden');
})

mainBtn.addEventListener('click', function(){
    mainPage.classList.remove('hidden');
    historyPage.classList.remove('open');
})

