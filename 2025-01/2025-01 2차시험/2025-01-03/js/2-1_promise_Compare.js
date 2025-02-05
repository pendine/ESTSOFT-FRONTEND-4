// promise로 예외처리
function asyncTask(callback) {
  setTimeout(() => {
    try {
      const success = Math.random() > 0.5; // 성공/실패 랜덤 결정
      if (success) {
        callback(null, "작업 성공!");
      } else {
        throw new Error("작업 실패!");
      }
    } catch (error) {
      callback(error);
    }
  }, 1000);
}

// 콜백 함수로 결과 처리
asyncTask((error, result) => {
  if (error) {
    console.error("에러 발생:", error.message);
  } else {
    console.log("결과:", result);
  }
});

// 콜백함수로 예외처리
asyncTask((err1, res1) => {
  if (err1) {
    console.error(err1);
  } else {
    anotherAsyncTask(res1, (err2, res2) => {
      if (err2) {
        console.error(err2);
      } else {
        finalAsyncTask(res2, (err3, res3) => {
          if (err3) {
            console.error(err3);
          } else {
            console.log("최종 결과:", res3);
          }
        });
      }
    });
  }
});

