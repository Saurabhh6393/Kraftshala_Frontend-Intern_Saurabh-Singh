
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for theme preference
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      document.body.style.backgroundColor = "indigo";
      document.body.style.color = 'white';
      

    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-white-200 dark:bg-white-300 p-4 shadow-md h-20 outline">
      <div className="container mx-auto flex justify-between items-center">
        <div className="">
          <h1  className="text-lg md:text-3xl  px-2 md:px-16 py-2">Weather Report</h1>
        </div>
        <div className="text-white flex items-center">
          <button
            onClick={toggleTheme}
            className=" px-6 md:px-4 py-2 bg-gray-700 dark:bg-gray-800 rounded h-12 "
          >
            {isDarkMode ? <CiLight /> : <MdOutlineDarkMode />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
