import React from 'react';
import Monitoring from './components/Monitoring';
import TopBar from './components/Topbar';

const App = () => {
  return (
    <div className=' bg-blue-gray-400 min-h-screen pb-4'>
      <TopBar />
      <Monitoring className='items-center' />
    </div>
  );
};

export default App;
