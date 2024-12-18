let i=1;

while(i<51){
  if(i%6==0) console.log(i);

  i++;
}

// while
// do ~ while
// for : for ~in, for ~of, 
//       forEach() - 내장함수


function quiz1(){
  let answer = 0;
  for(let i=1; i<=10; i++){
    answer+=i;
  }
  console.log("1~ 10 = " + answer);
}

function quiz2(){
  for(let i=1; i<10; i++){
    console.log( "4 * " + i + " = " + (4*i));
  }
}

quiz1();
quiz2();