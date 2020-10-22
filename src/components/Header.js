import React from 'react';

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-blue-600 to-green-600 md:rounded-b-3xl'>
      <h1 className='m-5 p-3 font-bold text-4xl text-gray-100 font-sans'>
        REAC
        <span className='text-5xl text-gray-800 bg-green-500 rounded-full px-1 border border-white mx-1 hover:text-white hover:border-black hover:bg-blue-500'>
          T
        </span>
        ODO
      </h1>
    </header>
  );
};

export default Header;
