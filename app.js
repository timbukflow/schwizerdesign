let scrollableSection = document.querySelector('.scrollable');
let images = [...document.querySelectorAll('.img')];

let current = 0;
let target = 0;
let ease = 0.075;

document.body.style.height = `${scrollableSection.getBoundingClientRect().height}px`;

images.forEach((image, idx) => {
  image.style.backgroundImage = `url(./images/${idx + 1}.jpeg)`
})

function lerp(start, end, t){
  return start * (1 - t) + end * t;
}

function animate() {
  target = window.scrollY;
  current = lerp(current, target, ease);

  scrollableSection.style.transform = `translate3d(0, ${-current}px, 0)`;
  images.forEach(image => {
    let top = image.parentElement.getBoundingClientRect().top;
    image.style.transform = `rotatex(${top * 0.05}deg) rotatey(${top * 0.05}deg)`
  });

  requestAnimationFrame(animate);
}

animate();
