  const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
  const fragment = document.createDocumentFragment();
  const numberOfElements = 21;

  for (let i = 0; i < numberOfElements; i++) {
    fragment.appendChild(document.createElement('div'));
  }

  staggerVisualizerEl.appendChild(fragment);

  const staggersAnimation = anime.timeline({
    targets: '.stagger-visualizer div',
    easing: 'easeInOutSine',
    delay: anime.stagger(50),
    loop: true,
    autoplay: false,
    duration: 2000,
    loopComplete: (a) => console.log('end'),
    //update: () => console.log(staggersAnimation.progress)
  })
  .add({
    translateX: 0,
    translateY: anime.stagger(50, {from: 'center', direction: 'reverse'}),
    rotate: 0,
    delay: anime.stagger(10, {from: 'first'}),
  })
  .add({
    translateX: anime.stagger([25, -25], {from: 'first'}),
    translateY: 0,
    rotate: anime.stagger([40, -40], {from: 'first'}),
    delay: anime.stagger(10, {from: 'first'}),
  })
  .add({
    translateX: 0,
    translateY: anime.stagger([250, -250], {from: 'first'}),
    rotate: anime.stagger([100, 0], {from: 'first'}),
    delay: anime.stagger(10, {from: 'first'}),
  })

  .add({
    translateX: 0,
    translateY: 0,
    scale: 1,
    rotate: 0,
    delay: 0,
  });

  staggersAnimation.play();
