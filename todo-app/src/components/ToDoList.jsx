import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, deleteTodo, toggleComplete, toggleEdit, editTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          toggleEdit={toggleEdit}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
