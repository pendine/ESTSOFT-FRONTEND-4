import { useDispatch, useSelector } from "react-redux"


function Component(){

  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  return(
    <div>
      <button onClick={() => dispatch({type: 'ACTION'})}>
        액션 실행
      </button>
    </div>
  )
}

export default Component;