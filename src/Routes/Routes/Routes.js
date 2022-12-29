import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import CompletedTask from "../../Pages/CompletedTask/CompletedTask";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/MyAccount/Login/Login";
import Register from "../../Pages/MyAccount/Register/Register";
import MyTask from "../../Pages/MyTask/MyTask";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element:<PrivateRoute><AddTask/></PrivateRoute>
            },
            {
                path:'/mytask',
                element:<PrivateRoute><MyTask/></PrivateRoute>
            },
            {
                path:'/completed',
                element:<PrivateRoute><CompletedTask/></PrivateRoute>
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