import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/User";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user/:username' element={<User/>}/>
    </Routes>
  );
};

export default Router;
