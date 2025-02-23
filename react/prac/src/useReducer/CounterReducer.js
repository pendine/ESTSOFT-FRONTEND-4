import { useReducer } from "react";

// dispatch라는 함수를 통해서 useReducer의 인자로 설정된 reducer함수에 값을 전달함.
// reducer함수에서는 전달받은 값을 토대로 동작
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  const increase = () => {
    dispatch({
      type: "INC",
    });
  };

  const decrease = () => {
    dispatch({
      type: "DEC",
    });
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INC":
        return { ...state, counter: state.counter + 1 };
      case "DEC":
        return { ...state, counter: state.counter - 1 };
      default:
        return { state };
    }
  };
};
