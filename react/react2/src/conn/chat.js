/*
useEffect
사용자에게 내용을 표시하는동인 연결을 유지해야한다면?
createConnect이라는 API 를 사용하면됨
*/

export function createConnection(){
  
  return {
    connect () {
      console.log("연결 완료");
    },
    disconnect (){
      console.log("연결 종료");     
    }
  }
}