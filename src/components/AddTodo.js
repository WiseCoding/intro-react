import React from 'react';

const AddTodo = ({ addNewTodo }) => {
  const setUserInput = (e) => {
    e.preventDefault();
    addNewTodo(e.target.input.value);
    e.target.input.value = '';
  };

  return (
    <div className='max-w-xl mx-auto my-8 p-2 shadow-lg rounded-xl bg-white relative'>
      <form action='' onSubmit={setUserInput}>
        <input
          name='input'
          type='text'
          placeholder='Add Todo...'
          className='p-2 w-full shadow rounded-lg focus:bg-gray-200 outline-none hover:bg-gray-200 hover:border-gray-800'
          required
        />
        <button
          name='submit'
          type='submit'
          title='Add Todo'
          className='sm:absolute sm:right-0 sm:bottom-0 bg-gray-800 text-white bg-gradient-to-r hover:from-blue-600 hover:to-green-600 rounded-full mt-4 p-1 px-10 sm:p-0 shadow hover:shadow-lg border border-gray-700 transform sm:translate-x-1 sm:translate-y-1 hover:scale-125 cursor-pointer'
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
