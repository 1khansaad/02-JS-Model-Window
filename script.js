'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModal = document.querySelectorAll('.show-modal');
const closeModel = document.querySelector('.close-modal')

// function for open model
const openMo = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

// eventlistner for open model
for(let i = 0; i < openModal.length; i++){
    openModal[i].addEventListener('click',openMo)
}

// function for close model
const closeMo = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

// eventlistner for close model
closeModel.addEventListener('click', closeMo)
overlay.addEventListener('click', closeMo)

