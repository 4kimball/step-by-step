import React from 'react'
import TodoItem from './TodoItem'
const TodoList = ({todos, updateTodo, deleteTodo}) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem 
        todo={todo} 
        key={todo.id} 
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}

export default TodoList;