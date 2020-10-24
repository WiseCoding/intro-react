import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
//
import Header from './components/Header';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  // STATE
  const [todos, setTodos] = useState([]);

  // ON PAGE LOAD
  useEffect(() => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, []);

  // ON TODOS CHANGE
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // FUNCTIONS
  const addNewTodo = (newBody) => {
    setTodos([...todos, { id: uniqid(), body: newBody, completed: false }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  // JSX
  return (
    <div className='relative flex flex-col h-full text-center'>
      <Header />
      <div className='container flex-grow m-6 mx-auto'>
        <div className='mx-3'>
          <AddTodo addNewTodo={addNewTodo} />
          {todos.length > 0 ? (
            <TodoList
              todos={todos}
              complete={completeTodo}
              remove={removeTodo}
            />
          ) : (
            <p className='font-mono'>
              All done{' '}
              <span role='img' aria-label='SleepyFace'>
                🎉
              </span>
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
