let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

let startanimation = document.querySelectorAll('.mess')

window.addEventListener('DOMContentLoaded', ()=>{
  
    setTimeout(() => {

        startanimation.forEach((h1, idx)=>{
            setTimeout(()=>{
                h1.classList.add('fadefont');
            }, (idx + 1)* 200)
        })


    }) 
    

});


