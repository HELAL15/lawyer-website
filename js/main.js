
const Body = document.getElementsByTagName('body')[0];
let rtlValue = false;
if (Body.style.direction = 'rlt') {
  rtlValue = true;
}

$('.owl-carousel.our-team').owlCarousel({
  rtl: rtlValue,
  loop:true,
  margin:8,
  nav:true,
  dots: false,
  autoplay:true,
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
  rtl: rtlValue,
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


const play_v = document.querySelector('#play');
const pause_v = document.querySelector('#pause');

if(play_v !=null && pause_v !=null){

  play_v.addEventListener('click', () => {
    var video = document.querySelector('#video');
  var imgPause = document.querySelector('.for-pause');
    play_v.classList.add('d-none');
    pause_v.classList.remove('d-none');
    imgPause.classList.add('hide');
    video.play();
    console.log('clicked')
  });
  
  pause_v.addEventListener('click', () => {
    var video = document.querySelector('#video');
  var imgPause = document.querySelector('.for-pause');
    play_v.classList.remove('d-none');
    pause_v.classList.add('d-none');
    imgPause.classList.remove('hide');
    video.pause();
  });
}


const showContent = document.getElementById('show-content');

if(showContent != null){
  showContent.addEventListener('click' , ()=>{
    let hideContent = document.querySelector('.content');
    let down_up = document.getElementById('down-up');
    console.log('clicked');
    hideContent.classList.toggle('d-none');
    down_up.classList.toggle('fa-caret-down');
    down_up.classList.toggle('fa-caret-up');
  })
}



