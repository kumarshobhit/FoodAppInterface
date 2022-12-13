// video section
let playButton=document.getElementsByClassName("playbutton") ;
var videoFrame = document.getElementsByClassName("VideoFrame"); 
var video=document.getElementById("myVideo")

videoFrame[0].addEventListener('click',(e)=>{
    if(video.paused){
    video.play()
    playButton[0].style.display='none' ;
  } else {
    video.pause()
    playButton[0].style.display='block' ;
  }
})

// shopping cart modal
var logo=document.body.querySelector(".modal__icon");
const toggleModal = () => {
  document.querySelector('.modal')
    .classList.toggle('modal--hidden');
  document.querySelector('.overlay')
    .classList.toggle('overlay--hidden');
    document.body.classList.toggle('modal__scroll');
    window.scrollTo({top:0,behavior:'smooth'});
}

const toggleModal2 = () => {
  document.querySelector('.modal2')
    .classList.toggle('modal2--hidden');
  document.querySelector('.overlay')
    .classList.toggle('overlay--hidden');
    document.body.classList.toggle('modal2__scroll');
    window.scrollTo({top:0,behavior:'smooth'});
}

document.querySelector('.modal__button ')
  .addEventListener('click', toggleModal);

logo.addEventListener('click', toggleModal);

document.querySelector('.SubmitButton')
  .addEventListener('click', toggleModal2);

var modal2Buttons=document.querySelectorAll('.modal2__button');

for(var i=0;i<modal2Buttons.length;i++){
  modal2Buttons[i].addEventListener('click', toggleModal2);
}
  



