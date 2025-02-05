const bg = document.querySelector('.bg');
const loadPerText = document.querySelector('.loading-text');

bg.style.blur= '100px';

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

let loaderPer = 0;

function updateBlur( ){
  loaderPer++;
  bg.style.filter = `blur(${100-loaderPer}px)`
  loadPerText.innerHTML = `${loaderPer}%`
  if(loaderPer >=100 ){
    loadPerText.innerHTML ='';
  }
}

function loader( delay ){
  setInterval( () =>{
    updateBlur()
  } , delay);
}


loader( 10 );

