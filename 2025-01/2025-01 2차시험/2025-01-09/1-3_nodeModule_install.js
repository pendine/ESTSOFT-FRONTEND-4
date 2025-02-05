/* 
이모지 패키지 다운시
npm install node-emoji

*/

// 아래의 코드는 바로 인식 불가
// express 있으면 편하지만
// 생 node.js로는 설정 필요
// 백엔드: nodejs(express, nestjs) java(spring), python(django, flask)
// const emoji = require('node-emoji').emoji;
// console.log(emoji.heart);

import * as emoji from 'node-emoji';

console.log( ':heart:');

/*
node js 프로젝트에서는 많은 패키지를 사용하게되고
패키지 버전도 빈번하게 업데이트됨
package.js 파일 통해 프로젝트 정보와 패키지 의존성 관리 필요
 - 패키지파일만 잘 배포하면 팀내에 배포 후 동일한 개발환경 구축 가능

의존성
 - 파라미터나 리턴값 등을 다른 객체를 참조해 불러오는것
   (다른곳에서 작성한 객체나 함수를 불러와서 사용하는것)
 - 의존대상이 변경되면 의존하고있는 코드도 영향을 받는다는 특징이 있음
 
터미널로 npm init 실행
*/