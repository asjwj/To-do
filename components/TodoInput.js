import React, { useState, memo } from 'react';

const TodoInput = memo(({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Yeni görev ekle"
        style={{ padding: '10px', width: '70%', marginRight: 10 }}
      />
      <button type="submit" style={{ padding: '10px 15px' }}>Ekle</button>
    </form>
  );
});

export default TodoInput;
