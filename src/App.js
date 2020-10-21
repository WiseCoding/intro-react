import React, { useState } from 'react';
import uniqid from 'uniqid';
//
import Header from './components/Header';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  // STATE
  const [newTodo, setNewTodo] = useState('');
  const [todosState, setTodos] = useState([
    {
      id: uniqid(),
      body: 'What is this',
      completed: false,
    },
    {
      id: uniqid(),
      body: 'No really What??',
      completed: false,
    },
  ]);

  // FUNCTIONS
  const addNewTodo = () => {
    setTodos([
      ...todosState,
      { id: uniqid(), body: newTodo, completed: false },
    ]);
  };
  const completeTodo = (id) => {
    console.log('completed', id);
  };
  const removeTodo = (id) => {
    console.log('deleted', id);
  };

  // JSX
  return (
    <div className='relative h-full flex flex-col text-center'>
      <Header />
      <div className='flex-grow container mx-auto m-6'>
        <AddTodo setNewTodo={setNewTodo} addNewTodo={addNewTodo} />
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
