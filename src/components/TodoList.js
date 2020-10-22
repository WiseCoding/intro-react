import React, { useState } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, complete, remove }) => {
  // STATE
  const [reverse, setReverse] = useState(true);

  // FUNCTIONS
  const reverseOrder = () => {
    setReverse(!reverse);
  };

  // VARIABLES
  const PRINT_TODOS = reverse ? todos.slice(0).reverse() : todos;

  // JSX
  return (
    <div className='relative max-w-xl mx-auto my-8 shadow-lg rounded-xl bg-white'>
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
        {PRINT_TODOS.map((todo) => (
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
