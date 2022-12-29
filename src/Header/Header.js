import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";

const Header = () => {
  const { user, handleUserLogout } = useContext(AuthProvider);

  console.log(user);

  return (
      <div className="bg-white">
        <Navbar fluid={true} rounded={true} className="container mx-auto">
      <Link to={"/"} className="font-medium text-xl">Task Manager</Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
          <li>
            <NavLink to={"/"} className="block px-4 py-1 md:p-2 lg:px-4">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/addtask"} className="block px-4 py-1 md:p-2 lg:px-4">
              Add Task
            </NavLink>
          </li>
          <li>
            <NavLink to={"/mytask"} className="block px-4 py-1 md:p-2 lg:px-4">
              My Task
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/completed"}
              className="block px-4 py-1 md:p-2 lg:px-4"
            >
              Completed Task
            </NavLink>
          </li>
          {user?.uid ? (
            <>
              <span className="font-medium">Hello , {user?.displayName}</span>
              <button
                onClick={handleUserLogout}
                className="flex items-center gap-2 md:ml-3 bg-indigo-600 text-white p-2 rounded-md text-base"
              >
                <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                Sign Out
              </button>
            </>
          ) : (
            <li>
              <NavLink to={"/login"} className="block px-4 py-1 md:p-2 lg:px-4">
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
