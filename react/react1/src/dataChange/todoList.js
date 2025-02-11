import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addTodo, removeTodo, toggleTodo , setFilter} from './todoSlice';

function TodoList(){
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();
    const {items, filter} = useSelector(state => state.todos);

    // 할일 필터링.
    const filteredTodos = items.filter(todo => {
        if(filter === 'completed'){
            return todo.completed;
        }
        if(filter === 'active'){
            return !todo.completed;
        }
        return true;
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(newTodo.trim()){
            dispatch(addTodo(newTodo));
            setNewTodo('');
        } // trim : 양끝 공백 제거.
    };


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="새 할 일 추가"
                />
                <button type="submit">추가하기</button>
            </form>

            <div>
                <button onClick={() => dispatch(setFilter('all'))}></button>
                <button onClick={() => dispatch(setFilter('active'))}></button>
                <button onClick={() => dispatch(setFilter('completed'))}></button>
            </div>

        {/*화면 랜더링*/}
        <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none' 
            }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              삭제
            </button>
          </li>
        ))}
      </ul>
        </div>
    )

}

export default TodoList;

// 퀴즈
// TodoList컴포넌트의 ul태그영역을 참고하여 다음의 기능들을 완성
// removeTodo, toggleTodo, setFilter

// 이 리덕스 구조 기반의 어플리케이션을 실행하기위한
// store 파일 정의와 app을 정의하여 실행까지 진행해주세요.