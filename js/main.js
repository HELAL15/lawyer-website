
let play = document.querySelector('#play');
let pause = document.querySelector('#pause');
let video = document.querySelector('#video');
let imgPause = document.querySelector('.for-pause');

play.addEventListener('click', () => {
  play.classList.add('d-none');
  pause.classList.remove('d-none');
  imgPause.classList.add('hide');
  video.play();
});

pause.addEventListener('click', () => {
  play.classList.remove('d-none');
  pause.classList.add('d-none');
  imgPause.classList.remove('hide');
  video.pause();
});



$('.owl-carousel.our-team').owlCarousel({
  rtl: true,
  loop:true,
  margin:8,
  nav:true,
  dots: false,
  // autoplay:true,
  autoplayTimeout:5000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})


$('.owl-carousel').owlCarousel({
  rtl: true,
  loop:true,
  margin:10,
  nav:false,
  dots: false,
  autoplay:true,
  autoplayTimeout:1500,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})