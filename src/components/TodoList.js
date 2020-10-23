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
    <div className='rounded-xl relative max-w-xl mx-auto my-8 bg-white shadow-lg'>
      <div className='rounded-t-xl flex flex-row items-center justify-between text-white bg-gray-700'>
        <div
          onClick={toggleCompleted}
          className={` text-white hover:text-blue-600 m-2 cursor-pointer transform bg-gray-900 rounded-full p-1 hover:bg-white border border-gray-300 ${
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
        <h2 className='font-mono'>TODOS</h2>
        <div
          onClick={reverseOrder}
          className='hover:text-blue-600 hover:bg-white p-1 m-2 text-white bg-gray-900 border border-gray-300 rounded-full cursor-pointer'
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
              d='M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4'
            />
          </svg>
        </div>
      </div>
      <ul className='p-2 m-2'>
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
