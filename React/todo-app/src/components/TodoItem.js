import React from 'react'
import './TodoItem.css'
const TodoItem = ({todo, updateTodo, deleteTodo}) => {
  const onClick = () => {
    updateTodo(todo.id);
  }

  const onClickBtn = () => {
    deleteTodo(todo.id)
  }
  let li;
  if(todo.completed) {
    li = <li className="completed">{todo.content}</li>
  } else {
    li = <li>{todo.content}</li>
  }
  return (
  <div class="TodoItem" onClick={onClick}>
    {li}
    <button onClick={onClickBtn}>삭제</button>
  </div>  
    
  )
} 

export default TodoItem