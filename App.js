import React, { useState, useCallback } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  }, []);

  const toggleComplete = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  }, []);

  const removeTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return (
    <ErrorBoundary>
      <div style={{ maxWidth: 600, margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
        <h1>Profesyonel To-Do List</h1>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      </div>
    </ErrorBoundary>
  );
  }
