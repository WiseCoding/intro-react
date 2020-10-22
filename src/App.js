import React, { useState } from 'react';
import uniqid from 'uniqid';
//
import Header from './components/Header';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  // STATE
  const [todos, setTodos] = useState([]);

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
    <div className='relative h-full flex flex-col text-center'>
      <Header />
      <div className='flex-grow container mx-auto m-6'>
        <div className='mx-3'>
          <AddTodo addNewTodo={addNewTodo} />
          {todos.length === 1 ? (
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
