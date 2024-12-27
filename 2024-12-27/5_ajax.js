// function test1(){
//   console.log("function test1");
//   test2();
// }
// function test2(){
//   console.log("function test2");
//   test3();
// }
// function test3(){
//   console.log("function test3");
// }

// test1();


function test1(){
  console.log("function test1");
  test2();
}
function test2(){
  setTimeout(function(){
  console.log("function test2");
  },0);
  test3();
}
function test3(){
  console.log("function test3");
}

test1();