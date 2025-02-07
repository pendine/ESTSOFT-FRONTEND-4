import React, { useReducer } from "react";

// 캐릭터의 기본정보
const INITIAL_STATE = {
  health: 100,
  level: 1,
  items: [],
};

// ... : 스프레드 연산자
// 리액트에서는 스프레드 연산자를 자주 사용함
// 이유 : 리액트 불변성 원칙 때문에
//   - 리액트의 특성은 기존 상태를 직접 수정했을때 감지를 못하기 때문에
//   - 리렌더링이 제대로 발생하지 않을 수 있음.
const gameReducer = (state, action) => {
  switch (action.type) {
    //state의 정보를 복사해서, 복사한정보에 연산 후, state에 넣어야함
    case "회복":
      return {
        ...state, // 기존 상태정보를 복사.
        // 이래야 리렌더링시 데이터 변화를 감지할 수 있음
        health: state.health + 20,
      };

    case "피해":
      return {
        ...state,
        health: state.health - 10,
      };

    case "레벨업":
      return {
        ...state,
        level: state.level + 1,
      };

    case "아이템획득":
      return {
        ...state,
        items: [state.items, action.items],
      };

    default:
      return state;
  }
};

// 캐릭터가 할 수 있는 행동
const ACTIONS = {
  HEAL: "회복",
  DEMAGE: "피해",
  LEVEL_UP: "레벨업",
  GET_ITEM: "아이템획득",
};

function Character1() {
  // 캐릭터 정보는 INITAL_STATE가 저장하고있음
  const [character, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  return (
    <div>
      <h1>캐릭터 정보</h1>
      <p>hp : {character.health}</p>
      <p>lv : {character.level}</p>
      <p>item : {character.items.join(" ,")}</p>

      <button onClick={() => dispatch({ type: ACTIONS.HEAL })}>
        포션 먹기
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DEMAGE })}>
        공격 당하기
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.LEVEL_UP })}>
        레벨업
      </button>
      <button
        onClick={() => dispatch({ type: ACTIONS.GET_ITEM,
                                  item: '좀비이빨' })}
      >
        아이템획득
      </button>
    </div>
  );
}

export default Character1;
