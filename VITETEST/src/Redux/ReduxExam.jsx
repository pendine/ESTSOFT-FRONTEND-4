// Redux활용 Todo 개발
// Action -> dispatcher -> store -> view -> ui -> Action

//  App -> TodoList
// TodoList -> TodoItem

// App -> AddTodo
import { useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from './store'
// createStore : 비권장 API
// Redux에 Toolkit이 도입되며
// const store = createStore(todosReducer)

const AddTodo = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault
    if (input.trim()) {
      dispatch(addTodo(input))
      setInput('')
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ marginBottom: '20px' }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{ marginRight: '10px', padding: '8px' }}
        />
        <button
          type="submit"
          style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Add Todo
        </button>
      </form>
    </>
  )
}

const TodoItem = ({ todo }) => {
  return (
    <>
      <li
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
          margin: '8px 0'
        }}>
        {todo.text}
      </li>
    </>
  )
}

const TodoList = () => {
  const todos = useSelector(state => state)

  return (
    <>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </>
  )
}

// 추후 확장성을 염두에둔 구조
//  => const App = ()
const App = () => {
  ;<>
    <Provider store={store}>
      <div style={{ maxWidth: '300px', margin: '40px auto' }}>
        <h1 style={{ textAlign: 'center' }}> Simple Redux Todo</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  </>
}

export default App
