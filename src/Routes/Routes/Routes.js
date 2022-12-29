import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import CompletedTask from "../../Pages/CompletedTask/CompletedTask";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/MyAccount/Login/Login";
import Register from "../../Pages/MyAccount/Register/Register";
import MyTask from "../../Pages/MyTask/MyTask";

export const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        children : [
            {
                path: '/',
                element:<Home/>
            },
            {
                path:'/addtask',
                element:<AddTask/>
            },
            {
                path:'/mytask',
                element:<MyTask/>
            },
            {
                path:'/completed',
                element:<CompletedTask/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    }
])