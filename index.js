gsap.to('.masthead', {
    y: 120, 
    scrollTrigger: {
      trigger: '.site',
      start: 'top top',
      scrub: true,
    }
  })
  
  gsap.to('.section-one-text', {
    y: -400, 
    scrollTrigger: {
      trigger: '.site',
      start: 'top top',
      scrub: true,
    }
  })
  
  gsap.to('.section-one-images-item:first-child', {
    y: 50,
    scrollTrigger: {
      trigger: '.site',
      start: 'top top',
      scrub: true,
    }
  })
  
  gsap.to('.section-one-images-item:last-child', {
    y: -600, 
    scrollTrigger: {
      trigger: '.site',
      start: 'top top',
      scrub: true,
    }
  })
  
  gsap.to('.section-three-text', {
    y: -100, 
    scrollTrigger: {
      trigger: '.section-three-text:first-of-type',
      scrub: true,
    }
  })
  
  gsap.to('.section-three-images-item:first-child', {
    y: 50,
    scrollTrigger: {
      trigger: '.section-three-images-item:first-child',
      scrub: true,
    }
  })
  
  gsap.to('.section-three-images-item:last-child', {
    y: -300, 
    scrollTrigger: {
      trigger: '.section-three-images-item:last-child',
      scrub: true,
    }
  })
  
  