// effect
// react의 컴포넌트들은 외부 시스템과 동기화가 필요한경우가 있음
//  -> 서버 연결 설정, 렌더링후 분석결과를 보낼때, 그 외 데이터 비동기 로딩시.\
//  -> 화면에 요소들 로딩(렌더링)다 끝나고 실행할 내용들이 있다면 사용.

import { useEffect, useRef, useState } from "react";

// useEffect는 promise then 메서드와도 비슷.

// 컴포넌트의 유형

// 렌더링코드 : 프로퍼티와 상태를 가져와 변환한후에 화면에 표시할 내용을 리턴
//   -> JSX를 통해 화면에 표시할 내용을 리턴.
//   -> 가장좋은 렌더링 코드는 결과만 어떻게 보여줄건지만 고민.(결과 계산)
//      (단순히 결과만 보여준다해서 순수코드라고도 부름)

// 이벤트 핸들러
// 어플리케이션에서 일어나는 이벤트를 제어하는 영역
// 컴포넌트 내부에 중첩되어있는 함수들. -> 실질적 작업 수행의 영역.
// react의 이벤트 핸들러는 side effect를 포함.(프로그램의 상태를 변경)
//  -> 효과는 필요할때 쓰는것이며 필수는 아님.

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);


  useEffect( () => {
    if (isPlaying) {
      ref.current.play();  // Calling these while rendering isn't allowed.
    } else {
      ref.current.pause(); // Also, this crashes.
    }
  });

  return <video ref={ref} src={src} loop playsInline />;
}

export default function App(){

  const [isplaying, setIsPlaying] = useState(false);

  return(
    <>
      <button onClick={() => setIsPlaying(!isplaying) }>
        {isplaying ? '중지' : '재생'}
      </button>

      <VideoPlayer
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      isPlaying={isplaying}
      />
    </>
  );
}