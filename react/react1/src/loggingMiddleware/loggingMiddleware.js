/*
요구사항
1. 모든 액션의 발생시간을 로깅
 - 로그찍기(메서드 흐름파악)
2. 액션 발생 전/후의 상태 변화를 콘솔에 출력
3. 특정 액션 타입일때만 로깅하는 옵션 추가
4. 개발 환경에서만 로깅하도록 설정
*/
const createLoggingMiddleware = ( options = {}) =>{

  // 옵션 디스트럭쳐링
  // 디스트럭쳐링 : 구조화된 배열이나 객체를 파괴하는것
  // 객체를 저장할땐 key : value
  // - 그 후 사용시 객체명.key 형식이었으나
  //  변수를 사용하듯 key만 입력해도
  //  해당 객체의 값들을 가져올 수 있도록 처리
  // const obj1 = {name :'test' , age : 3};
  // const {name, age} = obj1;
  // console.log( name , age) === console.log(obj1.name, obj1.age);

  const {
    actionTypes = [], //로깅하게될 특정한 액션타입들을 저장하는 배열
    development = true, //개발환경 여부
  } = options;

  return store => next => action =>{

    // 프로덕션 환경이거나 특정 액션 타입만 로깅하도록 설정된 경우.
    if(!development || 
      (actionTypes.length 
        && !actionTypes.includes(action.type)
      )){
        return next(action);
    }
    // next(action) <-- 현재 액션을 다음 미들웨어나 리듀서에 전달하는 메서드
    const timestamp = new Date().toISOString();
    const prevState = store.getState();

    console.group(`Action: ${action.type} @ ${timestamp}`);
    console.log('이전 상태:', prevState);
    console.log('액션:', action);

    const result = next(action);

    const nextState = store.getState();
    console.log("다음상태 : ", nextState);
    console.groupEnd();

    return result;
  }

}

export default createLoggingMiddleware;