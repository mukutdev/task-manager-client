import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';

const Header = () => {

  const {user , handleUserLogout} = useContext(AuthProvider)


  console.log(user);


    return (
<nav className="bg-white shadow" role="navigation">
  <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
    <div className="mr-4 md:mr-8">
      <Link to={'/'}>
        Task Manager
      </Link>
    </div>
    <div className="ml-auto md:hidden">
      <button className="flex items-center px-3 py-2 border rounded" type="button">
        <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>
    <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">

      <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
        <li>
          <NavLink to={'/'} className="block px-4 py-1 md:p-2 lg:px-4" >Home</NavLink>
        </li>
        <li>
          <NavLink to={'/addtask'} className="block px-4 py-1 md:p-2 lg:px-4">Add Task</NavLink>
        </li>
        <li>
          <NavLink to={'/mytask'} className="block px-4 py-1 md:p-2 lg:px-4" >My Task</NavLink>
        </li>
        <li>
          <NavLink to={'/completed'} className="block px-4 py-1 md:p-2 lg:px-4" >Completed Task</NavLink>
        </li>
        {
          user?.uid ? <><span className='font-medium'>Hello , {user?.displayName}</span><button onClick={handleUserLogout} className='flex items-center gap-2 ml-3 bg-indigo-600 text-white p-2 rounded-md text-base'><ArrowLeftOnRectangleIcon className='h-5 w-5'/>Sign Out</button></> :
          <li>
          <NavLink to={'/login'} className="block px-4 py-1 md:p-2 lg:px-4" >Login</NavLink>
        </li>
        }
       
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Header;