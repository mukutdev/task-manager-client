import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { Navbar } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";

const Header = () => {
  const { user, handleUserLogout } = useContext(AuthProvider);
  
  const [theme, setTheme] = useState(null);

  // dark mood functionality

  useEffect(()=>{

    if(window.matchMedia('(prefers-color-scheme : dark)').matches){
      setTheme('dark')
    }else{
      setTheme('light')
    }

  } , [])

  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  } ,[theme])

  const handleThemeSwitch = () =>{
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }


  return (
      <div className="bg-white dark:bg-slate-800 dark:text-white">
        <Navbar fluid={true} rounded={true} className="container mx-auto">
      <Link to={"/"} className="font-medium text-xl dark:text-white">TaskMaster</Link>
      <div className="md:hidden ml-auto">
      <button onClick={handleThemeSwitch} className="flex dark:text-white text-2xl mx-6">
             {theme === 'dark' ?  <MdOutlineDarkMode /> :  <MdOutlineWbSunny />}
          </button>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
          <li>
            <NavLink to={"/"} className="block px-4 py-1 md:p-2 lg:px-4 text-lg">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/addtask"} className="block px-4 py-1 md:p-2 lg:px-4 text-lg">
              Add Task
            </NavLink>
          </li>
          <li>
            <NavLink to={"/mytask"} className="block px-4 py-1 md:p-2 lg:px-4 text-lg">
              My Task
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/completed"}
              className="block px-4 py-1 md:p-2 lg:px-4 text-lg"
            >
              Completed Task
            </NavLink>
          </li>
          <li className="hidden md:block">
          <button onClick={handleThemeSwitch} className="flex dark:text-white text-2xl mx-6">
             {theme === 'dark' ?  <MdOutlineDarkMode /> :  <MdOutlineWbSunny />}
          </button>
 
          </li>
          {user?.uid ? (
            <>
              <span className="font-medium text-lg px-4">Hello , { !user?.displayName ? "Dear" : user.displayName}</span>
              <button
                onClick={handleUserLogout}
                className="md:mt-0 my-2 flex items-center gap-2 md:ml-3 bg-indigo-600 text-white p-2 rounded-md text-base mx-4"
              >
                <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                Sign Out
              </button>
            </>
          ) : (
            <li>
              <NavLink to={"/login"} className="block text-lg px-4 py-1 md:p-2 lg:px-4 bg-indigo-600 text-white rounded-md">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </Navbar.Collapse>
    </Navbar>
      </div>

  );
};

export default Header;
