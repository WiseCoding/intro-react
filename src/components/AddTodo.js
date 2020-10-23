import React from 'react';

// FUNCTIONS
const AddTodo = ({ addNewTodo }) => {
  const setUserInput = (e) => {
    e.preventDefault();
    addNewTodo(e.target.input.value);
    e.target.input.value = '';
  };

  // JSX
  return (
    <div className='rounded-xl relative max-w-xl p-2 mx-auto my-8 bg-white shadow-lg'>
      <form action='' onSubmit={setUserInput}>
        <input
          name='input'
          type='text'
          placeholder='Add Todo...'
          className='focus:bg-gray-200 hover:bg-gray-200 hover:border-gray-400 w-full p-2 bg-gray-100 border border-gray-100 rounded-lg shadow outline-none'
          required
        />
        <button
          name='submit'
          type='submit'
          title='Add Todo'
          className='sm:absolute sm:right-0 sm:bottom-0 bg-gradient-to-r hover:from-blue-600 hover:to-green-600 sm:p-0 hover:shadow-lg sm:translate-x-1 sm:translate-y-1 hover:scale-125 p-1 px-10 mt-4 text-white transform bg-gray-800 border border-gray-700 rounded-full shadow cursor-pointer'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
