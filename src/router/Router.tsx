import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/User";
import Repos from "../pages/Repos";
import Followers from "../pages/Followers";
import Following from "../pages/Following";

interface RouterProps {
  isLoading: boolean
  isError: boolean
}

const Router = (props: RouterProps) => {

  return (
    <Routes>
      <Route path='/' element={<Home {...props}/>}/>
      <Route path='/user/:username' element={<User/>}/>
      <Route path='/repos/:username' element={<Repos/>}/>
      <Route path='/followers/:username' element={<Followers/>}/>
      <Route path='/following/:username' element={<Following/>}/>
    </Routes>
  );
};

export default Router;
