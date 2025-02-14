import { useEffect } from "react";
import { createConnection } from "./chat";

export default function OpenChatRoom(){
  // index.js에서 Strict모드를 사용한다면
  // 리마운트 되면서 2번씩 연결됐다는 로그 출력됨
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  } , [] )
  return ( <h1>채팅에 참여한 걸 환영한다. 낮선자여</h1> );
}