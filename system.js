ScrollTrigger.defaults({
    markers:false
  })
  
  var points = gsap.utils.toArray('.point');
  var indicators = gsap.utils.toArray('.indicator');
  
  var height = 100 * points.length;
  
  gsap.set('.indicators', {display: "flex"});
  
  var tl = gsap.timeline({
    duration: points.length,
    scrollTrigger: {
      trigger: ".philosophie",
      start: "top center",
      end: "+="+height+"%",
      scrub: true,
      id: "points",
    }
  })
  
  var pinner = gsap.timeline({
    scrollTrigger: {
      trigger: ".philosophie .wrapper",
      start: "top top",
      end: "+="+height+"%",
      scrub: true,
      pin: ".philosophie .wrapper",
      pinSpacing: true,
      id: "pinning",
      markers: true
    }
  })
  
  
  
  points.forEach(function(elem, i) {
    gsap.set(elem, {position: "absolute", top: 0});
  
    tl.to(indicators[i], {backgroundColor: "orange", duration: 0.25}, i)
    tl.from(elem.querySelector('img'), {autoAlpha:0}, i)
    tl.from(elem.querySelector('article'), {autoAlpha:0}, i)
    
    if (i != points.length-1) {
      tl.to(indicators[i], {backgroundColor: "#adadad", duration: 0.25}, i+0.75)
      tl.to(elem.querySelector('article'), {autoAlpha:0}, i + 0.75)
      tl.to(elem.querySelector('img'), {autoAlpha:100}, i + 0.75)
    }
    
  });
  
  
  
  