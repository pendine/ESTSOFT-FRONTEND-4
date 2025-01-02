
//  loadScript('1.js', function(error, script) {

//     if (error) {
//       handleError(error);
//     } else {
//       // ...
//       loadScript('2.js', function(error, script) {
//         if (error) {
//           handleError(error);
//         } else {
//           // ...
//           loadScript('3.js', function(error, script) {
//             if (error) {
//               handleError(error);
//             } else {
//               // 모든 스크립트가 로딩된 후, 실행 흐름이 이어집니다. (*)
//             }
//           });
  
//         }
//       })
//     }
//   });


// 예방법 : 동작별로 함수 구현하는것이 제일 적절.
// function step1(error, script) {
//     if (error) {
//         handleError(error);
//     } else {
//         // ...
//         loadScript('2.js', step2);
//     }
// }

// function step2(error, script) {
//     if (error) {
//         handleError(error);
//     } else {
//         // ...
//         loadScript('3.js', step3);
//     }
// }

// function step3(error, script) {
//     if (error) {
//         handleError(error);
//     } else {
//         // 모든 스크립트가 로딩되면 다른 동작을 수행합니다. (*)
//     }
// };