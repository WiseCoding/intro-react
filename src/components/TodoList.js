import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, complete, remove }) => {
  console.log(todos);

  return (
    <div className='max-w-xl mx-auto my-8 shadow-lg rounded-xl bg-white'>
      <h2 className='bg-gray-800 text-white rounded-t-xl py-2'>TODO's</h2>
      <ul className='m-2 p-2'>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            body={todo.body}
            complete={complete}
            remove={remove}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
