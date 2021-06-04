import React, {useState} from 'react'

const TodoForm = ({createTodo}) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onClick = (e) => {
    createTodo(value);
    setValue('');
  }
  return (
    <div className="TodoForm">
      <input value={value} onChange={onChange} placeholder="할 일을 입력하세요."></input>
      <button onClick={onClick}>추가</button>
    </div>
  )
}

export default TodoForm;