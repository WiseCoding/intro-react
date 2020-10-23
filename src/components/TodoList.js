import React, { useState, useEffect } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, complete, remove }) => {
  // STATE
  const [reverse, setReverse] = useState(true);
  const [hideCompleted, setHideCompleted] = useState(true);
  const [printTodos, setPrintTodos] = useState(todos);

  // EFFECT
  useEffect(() => {
    if (hideCompleted) {
      setPrintTodos(
        reverse
          ? todos
              .slice(0)
              .reverse()
              .filter((todo) => !todo.completed)
          : todos.filter((todo) => !todo.completed)
      );
    } else {
      setPrintTodos(reverse ? todos.slice(0).reverse() : todos);
    }
  }, [hideCompleted, reverse, todos]);

  // FUNCTIONS
  const reverseOrder = () => {
    setReverse(!reverse);
  };
  const toggleCompleted = () => {
    setHideCompleted(!hideCompleted);
  };

  // JSX
  return (
    <div className='relative max-w-xl mx-auto my-8 shadow-lg rounded-xl bg-white'>
      <div
        onClick={toggleCompleted}
        className={`absolute top-0 left-0 text-white hover:text-blue-600 m-2 cursor-pointer transform bg-gray-900 rounded-full p-1 hover:bg-white ${
          hideCompleted ? 'bg-green-500 scale-125' : ''
        }`}
        title='Hide Completed'
      >
        <svg
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
          />
        </svg>
      </div>
      <div
        onClick={reverseOrder}
        className='absolute top-0 right-0 text-white hover:text-blue-600 m-2 cursor-pointer bg-gray-900 rounded-full p-1 hover:bg-white'
        title='Reverse Order'
      >
        <svg
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
          />
        </svg>
      </div>
      <h2 className='bg-gray-700 text-white rounded-t-xl py-2'>TODOS</h2>
      <ul className='m-2 p-2'>
        {printTodos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            body={todo.body}
            completed={todo.completed}
            complete={complete}
            remove={remove}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
