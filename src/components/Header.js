import React from 'react';

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-blue-600 to-green-600 md:rounded-b-3xl'>
      <h1 className='p-1 m-2 font-sans text-4xl font-bold text-gray-100'>
        REAC
        <span className='hover:text-white hover:border-black hover:bg-blue-500 px-1 mx-1 text-5xl text-gray-800 bg-green-500 border border-white rounded-full'>
          T
        </span>
        ODO
      </h1>
    </header>
  );
};

export default Header;
