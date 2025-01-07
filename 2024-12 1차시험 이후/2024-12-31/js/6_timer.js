let btn1 = document.querySelector('.time');
let btn2 = document.querySelector('.stop');

let h1 = document.querySelector('.now');
let clr;

btn1.addEventListener('click', function(){
  setInterval( () => {
    document.querySelector('.now').innerHTML = new Date();
      // = new Date().getMinutes() + " : " + new Date.getTimes() + " : " + new Date().getSeconds();
  } , 1000);

})
