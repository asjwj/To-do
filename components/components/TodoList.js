import React, { memo } from 'react';

const TodoList = memo(({ todos, toggleComplete, removeTodo }) => (
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    {todos.map(({ id, text, completed }) => (
      <li key={id} style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(id)}
          style={{ marginRight: 10 }}
        />
        <span style={{ textDecoration: completed ? 'line-through' : 'none', flexGrow: 1 }}>{text}</span>
        <button onClick={() => removeTodo(id)} style={{ marginLeft: 10 }}>Sil</button>
      </li>
    ))}
  </ul>
));

export default TodoList;
