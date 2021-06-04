import React, {useState} from 'react'
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

let todoId = 4;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: '할 일1',
      completed: false
    },
    {
      id: 2,
      content: '할 일2',
      completed: false
    },
    {
      id: 3,
      content: '할 일3',
      completed: true
    }
  ])
  const createTodo = (content) => {
    if(content === "") {
      alert('할 일을 입력하세요.')
    } else {
      const id = todoId
      const todo = {
        id,
        content,
        completed: false
      }
      setTodos(todos => todos.concat(todo))
      todoId++;
    }
  }

  const updateTodo = (id) => {
    setTodos(todos => todos.map(todo => (todo.id === id ? {...todo, completed: !todo.completed} : todo)))
  };

  const deleteTodo = (id) => {
    setTodos(todos => todos.filter(todo => (todo.id !== id)))
  };

  return (
    <div className="App">
    <TodoForm createTodo={createTodo} />
    <TodoList 
    todos={todos} 
    updateTodo={updateTodo}
    deleteTodo={deleteTodo}
    />
    </div>
  )
}

export default App;
