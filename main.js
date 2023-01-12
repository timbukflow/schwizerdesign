// Page Transition

window.onload = () => {
    const links = document.querySelectorAll('a');
    const loader = document.querySelectorAll('.loader');
  
    setTimeout(() => {
      $(loader).fadeOut(750);
    }, 200);
  
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
  
      link.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target.href;
        
        $(loader).fadeIn(750);
        setInterval(() => {
          window.location.href = target;
        }, 750);
      })
    }
  }

// Mousehover

  $(".gridItem").hover(function() {
    $(this).toggleClass("activ");
  })


