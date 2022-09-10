import React from 'react';
import Router from "./router/Router";
import Header from "./components/Header";

const App = () => {

  return (
    <div className='h-screen w-screen'>
      <Header/>
      <div className='container mx-auto px-5'>
        <Router/>
      </div>
    </div>
  );
}

export default App;
