import React, { useState } from 'react';
import uniqid from 'uniqid';
//
import Header from './components/Header';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  // STATE
  const [todosState, setTodos] = useState([]);

  // FUNCTIONS
  const addNewTodo = (newBody) => {
    setTodos([
      ...todosState,
      { id: uniqid(), body: newBody, completed: false },
    ]);
  };
  const completeTodo = () => {
    console.log('completed');
  };
  const removeTodo = () => {
    console.log('deleted');
  };

  // JSX
  return (
    <div className='relative h-full flex flex-col text-center'>
      <Header />
      <div className='flex-grow container mx-auto m-6'>
        <AddTodo addNewTodo={addNewTodo} />
        <TodoList
          todos={todosState}
          complete={completeTodo}
          remove={removeTodo}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
