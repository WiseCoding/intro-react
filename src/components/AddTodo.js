import React from 'react';

const AddTodo = ({ setNewTodo, addNewTodo }) => {
  const setUserInput = (e) => {
    e.preventDefault();
    setNewTodo(e.target.input.value);
    addNewTodo();
  };

  return (
    <div className='max-w-xl mx-auto my-8 p-4 shadow-lg rounded-xl bg-white'>
      <form action='' onSubmit={setUserInput}>
        <input
          name='input'
          type='text'
          placeholder='Add Todo...'
          className='p-2 w-full shadow rounded border border-gray-200 bg-gray-200 hover:border-gray-800'
          required
        />
        <button
          name='submit'
          type='submit'
          className='bg-gray-800 text-white bg-gradient-to-r hover:from-blue-600 hover:to-green-600 rounded-full px-2 py-1 mt-4 shadow hover:shadow-lg border border-black'
        >
          Add todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
