import React, { useState } from 'react';

const ToDoItem = ({ todo, deleteTodo, toggleComplete, toggleEdit, editTodo }) => {
  const [newText, setNewText] = useState(todo.text);

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {todo.isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={() => editTodo(todo.id, newText)}>Save</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
          <button onClick={() => toggleEdit(todo.id)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default ToDoItem;
