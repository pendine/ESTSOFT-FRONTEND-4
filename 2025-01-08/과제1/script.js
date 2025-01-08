const bg = document.querySelector('.bg');
const loadPer = document.querySelector('.loading-text');

bg.style.blur= '100px';

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function updateBlur( per ){
  bg.style.blur= `${100-per}px`
  loadPer.innerHTML = `${per}%`
  if(per >=100 ){
    loadPer.innerHTML ='';
  }
}

function loader( delay ){
  for(let i =0 ; i <= 100; i++){    
    setTimeout( updateBlur(i), delay);
  }
}


// loader( 100 );

