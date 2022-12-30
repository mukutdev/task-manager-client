import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import Loader from '../../Shared/Loader/Loader';

const PrivateRoute = ({children}) => {

    const {user , loading} = useContext(AuthProvider)
    const location = useLocation()

    if(loading){
        return <Loader></Loader>
    }
   if(user){
     return children;
   }

    return <Navigate to={'/login'} state={{from : location}} replace></Navigate>;
};

export default PrivateRoute;