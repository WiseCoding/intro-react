import React from 'react';

const TodoList = () => {
  return (
    <div className='max-w-xl mx-auto my-8 shadow-lg rounded-xl bg-white'>
      <h2 className='bg-gray-800 text-white rounded-t-xl py-2'>TODO's</h2>
      <ul className='m-2 p-2'>
        <li>Test</li>
        <li>Test2</li>
        <li>Test3</li>
      </ul>
    </div>
  );
};

export default TodoList;
