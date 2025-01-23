/*
typescript의 모든 필기는 여기
타입스크립트 세팅
준비물 : node.js
npm i -g typescript
npm install -g typescript@2.7.2 << 원하는 버전이 있을때

타입스크립트는 컴파일 필요
  tsc "파일명.확장자"
  tsc tsTest.ts

ts와 node 연결
  npm install -g ts-node

ts 컴파일
  tsc ts파일명.ts
  -> tsx 로 대체예정

컴파일없이 노드활용하여 실행
  ts-node ts파일명.ts
  -> 노드버전이 18버전 이상일경우
  
  npm install -g tsx
  tsx ts파일명.ts

  npm install ts-node-dev
  ts-node-dev --respawn --transpile-only

vs code에서 ts사용시 편리한 확장팩
1. code runner(ts 바로 실행)
2. Typescript Hero (패치중단)
3. Typescript Toolbox
 - 캡슐화 도움 도구
4. annotationLens
 - 오버로딩 지원도구
5. moveTs
 - 프로젝트 일부 파일을 리팩토링하고 재구성할때 사용
6. Path Intellisense
 - 경로 자동 탐색시 도움이 되는 플러그인
7. Json to TS
 - JSON 코드를 ts로 변환
   단축키 : shift + ctrl + alt + v
           shift + ctrl + alt + s
8. add jsdoc comments (사라짐)
 - 함수의 파라미터 설명 주석 추가
9. Typescript String literal enums Tools
 - ts에서 enum 관리 확장팩
10. classdiagram-ts
 - 구성되어있는 ts 클래스 내용들을 다이어그램으로 자동 변환
11. TS interface from class
 - 클래스에서 인터페이슬르 따로 분리할때 사용하는 확장팩
12. Sass/Less/Typescript/Jade/Pug Compile-Superhero
 - 

vscode setting.json에 추가 설정
// 컴파일 경로 설정
"compile-hero.javascript-output-directory": "", // 현재 경로에 저장
"compile-hero.pug-output-directory": "",
"compile-hero.typescriptx-output-directory": "",
"compile-hero.typescript-output-directory": "",
"compile-hero.sass-output-directory": "",
"compile-hero.jade-output-directory": "",
"compile-hero.html-output-directory": "",
"compile-hero.less-output-directory": "",

// 컴파일 언어 설정 (js와 html 컴파일은 끔)
"compile-hero.javascript-output-toggle": false,
"compile-hero.html-output-toggle": false,

// min 파일 생성 설정
"compile-hero.x-generate-minified-css": false,
"compile-hero.x-generate-minified-js": false,

*/