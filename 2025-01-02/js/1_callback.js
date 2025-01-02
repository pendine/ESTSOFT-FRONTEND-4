function test1(){
  console.log("test1");
  test2();
}

function test2(){
/*
  실행순서가 유지가 되는지 아닌지 확인용도로
  셋타임아웃으로 시간부여
   => 사용이유 : 콜백함수는 실행순서를 제어하는데
   시간이 오래걸리더라도 실행순서를 유지함을 증명하기위해서
   셋 타임아웃을 사용하면 일정시간이후 동작하기때문에
   test2는 test3보다 늦게 나타남 
   */
  setTimeout(
    function(){
    console.log("test2");
  },0);
  test3();
}

function test3(){
  console.log("test3");
}

// test1();

// 마음대로 써보는 콜백함수
let num = [10, 20, 30, 40];
num.forEach(
  function(i){
    // console.log(i*2);
  }
)

function callbackTest(param1, callback){
  console.log("콜백테스트");
  console.log("파라미터 1 : " + param1 );
  callback();
}

function ctest(){
  console.log("ctest");
}

callbackTest( '파라미터문자열' , ctest );


function buyItem(item,cnt,price){

  console.log(`항목명:${item} 의 총 수량:${cnt} 은 총 ${price*cnt} 원입니다.`);

}

buyItem("라이터" , 3, 300);