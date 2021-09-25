"use strict"

let lists = document.querySelectorAll('li');
let unOrderedList = document.querySelector('ul');
let previousButton = document.querySelector('.previous--button');
let nextButton = document.querySelector('.next--button');


let width = 600;
let count = 3;
let position = 0;

previousButton.addEventListener('click', ()=> {
    position = position + width * count;
    position = Math.min(position, 0);
    unOrderedList.style.marginLeft = position + 'px';
})

nextButton.addEventListener('click',function() {
    position = position - width * count;
    position = Math.max(position, -width * count);
    unOrderedList.style.marginLeft = position + 'px';

})


// let i = 1;
// for (let list of lists) {
//     list.style.position = 'relative';
//     list.insertAdjacentHTML('beforeend', `<span style="position: absolute; left:0;top:0">${i}</span>`);
//     i++;
//     console.log(list);
// }

// let width = 140;
// let count = 4;

// let position = 0;

// previousButton.addEventListener('click', ()=> {
//     position = position + width * count;
//     position = Math.min(position, 0);
//     unOrderedList.style.marginLeft = position + 'px';
// })

// nextButton.addEventListener('click', ()=> {
//     position = position - width * count;
//     position = Math.max(position, -width * count);
//     unOrderedList.style.marginLeft = position + 'px';

// })