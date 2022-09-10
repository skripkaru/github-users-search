import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {

  return (
    <header className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to='/'>
          <span className="text-xl">GitHub Users Search</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
