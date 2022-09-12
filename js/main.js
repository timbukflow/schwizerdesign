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
    duration: 3000,
    loopComplete: (a) => console.log('end'),
    //update: () => console.log(staggersAnimation.progress)
  })
  .add({
    translateX: anime.stagger(100, {grid: [3, 7], from: 'first', axis: 'x'}),
    translateY: anime.stagger(10, {grid: [3, 7], from: 'first', axis: 'y'}),
    rotate: anime.stagger(10, {grid: [3, 7], from: 'first', axis: 'y'}),
  })
  .add({
    translateX: anime.stagger(10, {grid: [7, 3], from: 'first', axis: 'x'}),
    translateY: anime.stagger(100, {grid: [7, 3], from: 'first', axis: 'y'}),
    rotate: anime.stagger(30, {grid: [7, 3], from: 'first', axis: 'y'}),
    easing: 'easeInCirc',
  })
  .add({
    translateX: anime.stagger([100, -100], {from: 'first', easing: 'easeOutQuad'}),
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
