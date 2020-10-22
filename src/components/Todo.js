import React from 'react';

const Todo = ({ id, body, completed, complete, remove }) => {
  // FUNCTIONS
  const removeTodo = () => {
    remove(id);
  };
  const completeTodo = () => {
    complete(id);
  };

  // JSX
  return (
    <div className='flex flex-row justify-between items-center my-2 p-1 bg-gray-200 rounded-full'>
      <div title='Mark as complete!' onClick={completeTodo}>
        <svg
          className={
            'w-6 h-6 mx-1 ml-2 p-1 rounded-full transform hover:scale-125 hover:bg-green-500 border border-gray-700 cursor-pointer' +
            ' ' +
            (completed ? 'bg-green-400 scale-125' : 'bg-gray-400')
          }
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <p
        className={
          'text-left w-full overflow-y-scroll p-2' +
          ' ' +
          (completed ? 'line-through text-gray-400' : 'text-black')
        }
      >
        {body}
      </p>
      <div title='Delete me!' onClick={removeTodo}>
        <svg
          className='w-6 h-6 mx-1 mr-2 p-1 bg-red-300 rounded-full transform hover:scale-125 hover:bg-red-500 border border-gray-700 cursor-pointer'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
          />
        </svg>
      </div>
    </div>
  );
};

export default Todo;
