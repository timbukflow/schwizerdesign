// window.onload = () => {
//     const links = document.querySelectorAll('a');
//     const transition = document.querySelector('.transition');
  
//     setTimeout(() => {
//       transition.classList.remove('is-active');
//     }, 750);
  
//     for (let i = 0; i < links.length; i++) {
//       const link = links[i];
  
//       link.addEventListener('click', e => {
//         e.preventDefault();
//         let target = e.target.href;
//         transition.classList.add('is-active');
//         setInterval(() => {
//           window.location.href = target;
//         }, 750);
//       })
//     }
//   }
