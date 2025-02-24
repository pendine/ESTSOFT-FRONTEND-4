// Redux활용 Todo 개발
// Action -> dispatcher -> store -> view -> ui -> Action

//  App -> TodoList
// TodoList -> TodoItem

// App -> AddTodo

/*
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducer: {
    addTodo: (state, action) => {
      state.push(action.payload)
    }
  }
})

const store = configureStore({
  reducer: {
    // 할일 목록을 관리하는 리듀서
    todos: todosReducer,
    // visibilityReducer의 상태를 관리할 필터
    visibilityFilter: visibilityReducer
  },
  // 미들웨어의 동작시기는 액션이 dispatch된 후
  // reducer가 처리하기전 추가적인 작업을 수행하도록 도움을 줌
  //  - 비동기 처리가 필요하거나 작업의 로그가 필요할때
  middleware: getdefaultMiddleware => getdefaultMiddleware().concat(logger)
})

const TodoItem = ({ text, completed }) => <li>{text}</li>

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem
        Key={todo.id}
        {...todo}
      />
    ))}
  </ul>
)

export default function App() {}
 */
