import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='relative h-full flex flex-col text-center'>
      <Header />
      <div className='flex-grow container mx-auto m-6'>
        <AddTodo />
        <TodoList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
