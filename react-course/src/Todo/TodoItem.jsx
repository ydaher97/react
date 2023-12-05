import React from 'react'

const TodoItem = ({todo, onDelete,handleCheckboxChange}) => {

    return (
    <div>
    <input type="checkbox" checked={todo.completed} onChange={() => handleCheckboxChange(todo.id)} />
    <span>{todo.text}</span>
    <button onClick={() => onDelete(todo.id)}>Delete</button>
  </div>
  )
}

export default TodoItem