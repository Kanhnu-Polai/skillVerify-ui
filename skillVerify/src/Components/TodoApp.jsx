import React, { useState } from 'react';

const TodoApp = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [item, setItem] = useState("");

  const addTodo = () => {
    if (item.trim() !== "") {
      setTodoItems([...todoItems, item]);
      setItem("");
    }
  };

  return (
    <div className='border-2 border-amber-800 text-center p-2 m-1'>
      <h1>TodoApp</h1>
      <input 
        type="text" 
        placeholder='Enter Your Todo Item'
        value={item}
        onChange={(event) => setItem(event.target.value)} 
      />

      <button 
        className='bg-blue-600 text-white px-2 ml-2'
        onClick={addTodo}>
        Add Item
      </button>

      <ul className='mt-4'>
        {todoItems.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;