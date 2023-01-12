$(document).ready(function () {

// Page Transition

window.onload = () => {
    const links = document.querySelectorAll('a');
    let loader = document.querySelector('.loader');
  
    setTimeout(() => {
      $(loader).fadeOut(1000);
    }, 200);
  
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
  
      link.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target.href;
        
        $(loader).fadeIn(1000);
        setInterval(() => {
          window.location.href = target;
        }, 1000);
      })
    }
  }

// Mousehover

  $(".gridItem").hover(function() {
    $(this).toggleClass("activ");
  })

}) 
