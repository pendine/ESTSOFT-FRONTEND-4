test1 = 'aaabbcccc';
test2 = 'banana';
test3 = 'APPLE';
test4 = 'ababaabb'

answer1 = 'a3b2c4';
answer2 = 'b1a1n1a1n1a1';
answer3 = 'A1P2L1E1';
answer4 = 'a1b1a1b1a2b2'

function fillter(str){

  answer = '';

  let count = 0;
  let nowAlphabet = '';
  for(let i =0; i< str.length; i++ ){
    if( nowAlphabet ===''){
      nowAlphabet=str.charAt(i);
      count = 1;
      continue;
    }
    
    if( nowAlphabet != str.charAt(i) ){
      answer += nowAlphabet + count;
      nowAlphabet = str.charAt(i);
      count =1;
    }else{
      count ++;
    }

    if(i=== str.length -1){
      answer += nowAlphabet + count;
    }
    
  }
  return answer;
}

function check(test,answer){
  if(test!==answer){
    console.log('인풋값 : ',test, ": 예상 출력결과와 맞지 않음 예상출력값 : " , answer);
  }
  else{
    console.log('정답 : ' + test);
  }
}

check(fillter(test1) , answer1);
check(fillter(test2) , answer2);
check(fillter(test3) , answer3);
check(fillter(test4) , answer4);