import React from 'react';

const Todo = ({ id, body, complete, remove }) => {
  return (
    <div className='flex flex-row justify-between items-center m-1 p-1 pl-4 bg-gray-200 rounded-full'>
      <p className='text-justify p-2'>{body}</p>
      <div className='flex flex-row'>
        <div title='Complete' onClick={complete(id)}>
          <svg
            className='w-6 h-6 mx-1 p-1 bg-green-400 rounded-full transform hover:scale-125 hover:bg-green-500'
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
        <div title='Delete' onClick={remove(id)}>
          <svg
            title='Delete'
            className='w-6 h-6 mx-1 mr-2 p-1 bg-red-400 rounded-full transform hover:scale-125 hover:bg-red-500'
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
    </div>
  );
};

export default Todo;
