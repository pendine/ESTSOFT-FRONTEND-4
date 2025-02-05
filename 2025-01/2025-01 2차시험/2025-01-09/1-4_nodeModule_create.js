/*
JS 단점
과거에는 모듈기능이 없었음
모듈을 활용하기 위해서는 webpack 등의 '모듈 번들러' 라는것이 필요

node.js 의 경우 기본적으로 CommonJS

node의 경우는 모듈단위로 기능을 분할하는 특징이 있음
 -> 모듈들은 자신만의 독립적인 실행영역을 가져갈 수 있음
 -> 전역변수 중복에서 자유로움

모듈은 module.exports 또는 exports 객체를 통해 정의 -> 외부 공개
  -> 공개된 정보는 require 함수를 사용하여 import

1-5_circle.js 사용
*/

// import를 사용하여 불러오기도 가능
// const circle = require('./1-5_circle'); // 확장자 생략 가능
// const myCircle = circle(10);

// console.log( `원의 면적 : ${circle.area(10)}` );
// console.log( `원의 둘래 : ${circle.circum(10) }`);

// console.log( `원의 면적 : ${myCircle.area()}` );
// console.log( `원의 둘래 : ${myCircle.circum() }`);

// 모듈을 한꺼번에 불러오기
// 모듈을 명시하지 않고 require 함수 호출
// (폴더 자체를 호출)
const result = require('./1-6_module/index');

// const print = result.calc.add(10,20);

// console.log(print);
result.print.sayHello();

/* 서버개발자들이 많이 사용하는 모듈
 process , utility, events, buffers, streams, crypto 그외 등등

process : 프로세스에 대한 정보를 담고 있는 전역 객체
utility : 타임 검사, 포매팅 등의 유틸리티 함수 제공
events : 이벤트 관련 함수 제공
buffers : 바이너리 데이터의 옥텟 스트림(octet stream)을 다루는 모듈
streams : 스트림을 다루기 위한 추상 인터페이스
crypto : 암호화에 대한 함수 제공
TLS/SSL : 공개키, 개인키 기반인 TLS/SSL 에 대한 함수 제공
File System : 파일을 다루는 함수 제공
Path : 파일 경로를 다루는 함수 제공
Net : 비동기 네트워크 통신 기능 제공
UDP : UDP의 데이터그램 소켓 (Datagram Sockets) 통신 기능 제공
DNS : 도메인 네임 서버를 다루는 함수 제공
HTTP : HTTP 서버 및 클라이언트 기능 제공
HTTPS : HTTPS 서버 및 클라이언트 기능 제공
URL : URL을 다루는 함수 제공
Query Strings : URL의 쿼리 문자열을 다루는 함수 제공
Readline : 스트림에서 라인 단위로 읽는 기능을 제공
Vm : 자바스크립트 실행 기능 제공
Child Processes : 자식 프로세스 생성과 관련된 함수 제공
Assert : 유닛 테스트를 위한 단언문 제공
TTY : 터미널이나 콘솔 관련 기능을 제공
Zlib : zlib 압축, 해제 함수 제공
OS : 운영체제에 대한 정보를 구하는 함수 제공
Cluster : 여러 노드 프로세스를 실행하는 클러스터 기능을 제공
 */

// let fs = require('fs');
// let data = fs.readFile('./1-5_circle.js');
// console.log(data);
// fs.readFile('.\\2025-01-09\\1-5_circle.js' , 'utf-8' , function(err, data){
//   if(err){
//     console.error("err.message : " + err.message);
//   }
//   else{
//     console.log("data : " + data);
//   }
// });

// let path =".";
// let path ="./module";
// fs.readdir(path, function (err, files){
//   console.log("디렉토리 파일목록", files);
// })

// 파일 불러오기 and 없으면 오류 처리

// let fs = require('fs');
// let path ="./2025-01-09/1-5_circle.js";
// // acessSync : 파일로 접근하는 메서드 , 상태 결과를 받아올수도 있음
// try{
  //   fs.accessSync(path, fs.F_OK);
  //   console.log("파일 존재함");
  // }
  // catch(err){
    //   console.error("파일 없음");
    //   process.exit(1) // 프로그램을 종료할 때 사용
    // }
    
    
// let fs = require('fs');
// let file ="./2025-01-09/1-5_circle.js";
// // 파일에 내용 읽기
// try {
//   var stats = fs.statSync(file)
//   // console.log(stats);
//   console.log('Create : ', stats['birthtime']);
//   console.log('size : ', stats['size']);
//   console.log('isFile : ', stats.isFile());
//   console.log('isDirectory : ', stats.isDirectory()); //디렉토리 여부 구분
//   console.log('isBlockDevice : ', stats.isBlockDevice()); //접근가능/불가능 장치 장치?
//     // 블록타입의 기기 여부 = 모바일인지 웹인지 구분
//     // navigator.userAgent() : 메서드로도 가능 (웹상에서는 이것을 쓰는것을 권장)
//   // 파일 읽기
//   if ( stats.isFile() ) {
//      var data = fs.readFileSync(file, 'utf-8');
//      console.log('File Contents : ', data);
//   }
// }
// catch ( err ) {
//   console.error('File Error : ', err);
// }


let fs = require('fs');
let test = { 
  "이름" : "독케익",
  "귀여움" : "그때그때 달라요",
  "abyss" : "Cleary True"
}
let test2 = ['독케익', '표독함', 'ㅋㅋㅋ'];

// fs.writeFile('./2025-01-09/test2.txt' , test2 , ( err ) =>{
//   console.log("파일 내용 저장");
// })
// for( let i=0; i<test2.length; i++){
//   fs.writeFile('./2025-01-09/test2.txt' , test2[i] , ( err ) =>{
//       console.log("파일 내용 저장");
//    });
// }

// 경로 자체를 분석하여 경로를 분리하기 (확장자 구별)
// path 모듈
let pathUtil = require('path');
// let path = '/test1/test2/test3/test4/test.html';
// console.log('디렉토리 : ' + pathUtil.dirname(path));
// console.log('파일명 : ' + pathUtil.basename(path));
// console.log('확장자 : ' + pathUtil.extname(path));

// let preventExt = [".html" , ".js"];

// if(pathUtil.extname(path) === ".html"){
//   console.log("html 파일 맞음");
// }

parsed = pathUtil.parse('/usr/tmp/local/image.jpg');
console.log("parsed : " , parsed);
console.log("base : " , parsed.base);
console.log("ext : " , parsed.ext);

let newPath = pathUtil.join('/test', 'test2', 'test3');
console.log('경로탐색' , newPath);