import React, { useEffect, useRef, useState } from 'react'
import TodoItem from './TodoItem'

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  })
  const text = useRef()

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();
    if (text.current && text.current.value.trim() !== '') {
      const newTodo = {
        id: Date.now(), 
        text: text.current.value,
        completed: false 
      };
      setTodos(prevTodos => [...prevTodos, newTodo]);
      text.current.value = ''; 
    }
  }

  function deleteItem(id){
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos)
  }
 
function toggole(id)
{
    const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos)

}

  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={text}/>
                <button type='submit'>add</button>
            </form>
            
        </div>
        <div>
            <ul>
            {todos.map((todo) => (
            <li key={todo.id}>
              <TodoItem todo={todo} onDelete={deleteItem} handleCheckboxChange={toggole}/>
            </li>
          ))}

            </ul>
           
        </div>
    </div>
  )
}

export default Todo