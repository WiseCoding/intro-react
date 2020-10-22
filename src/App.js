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

  const removeTodo = (id) => {
    setTodos(todosState.filter((el) => el.id !== id));
  };

  const completeTodo = (id) => {
    console.log('completed', id);
  };

  // JSX
  return (
    <div className='relative h-full flex flex-col text-center'>
      <Header />
      <div className='flex-grow container mx-auto m-6'>
        <div className='mx-3'>
          <AddTodo addNewTodo={addNewTodo} />
          <TodoList
            todos={todosState}
            complete={completeTodo}
            remove={removeTodo}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
