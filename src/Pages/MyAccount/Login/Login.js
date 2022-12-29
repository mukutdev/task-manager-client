import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../Context/AuthContext';

const Login = () => {
    const {register , handleSubmit , formState: { errors }} = useForm()
    const {handleSignInWithEmailAndPassword , handleGoogleLogin} = useContext(AuthProvider)
    const location = useLocation()
    const navigate = useNavigate()
    const [errorMessage , setErrorMessage] = useState('')

    const from = location.state?.from?.pathname || '/'

    const handleUserSubmit = data =>{
        console.log(data);

        // email and password based login
        handleSignInWithEmailAndPassword(data.email, data.password)
        .then(result =>{
          const user = result.user
          toast.success('User logged in successfully')
          navigate(from , {replace : true})
          console.log(user);
        })
        .catch(err => {
          setErrorMessage(err.message)
        })
    }

    //google login function

    const handleLoginUsingGoogle = ()=>{
        handleGoogleLogin()
        .then(result =>{
          toast.success('User logged in successfully')
          navigate(from , {replace : true})
          const user = result.user
          console.log(user);
        })
        .catch(err => console.log(err))
    }

    return (
        <section className="h-screen">
        <div className="mt-40 flex flex-col justify-center items-center ">
          <div className="bg-white md:w-[400px] mt-10 p-6 md:mx-0 mx-4">
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <form onSubmit={handleSubmit(handleUserSubmit)}>
              <input
                type="email"
                placeholder="Enter Your Email"
                {...register("email" , { required: true })}
                className="border-0 w-full outline-none bg-gray-50 px-3 py-3 mt-3 text-slate-900 placeholder-gray-500"
              />
                 {errors.email && <span className="text-red-500">Please enter a valid email address</span>}
              <input
                type="password"
                placeholder="Enter Your Password"
                {...register("password" , { required: true })}
                className="border-0 w-full outline-none bg-gray-50 px-3 py-3 mt-3 text-slate-900 placeholder-gray-500"
              />
              {errors.password && <span className="text-red-500">Wrong password</span>}
               
               <input type="submit" value="Login"  className="w-full bg-indigo-600 text-white hover:bg-orange-500 cursor-pointer py-3 mt-4 font-medium text-lg"/>
            </form>
             <p className="text-red-500 font-medium text-lg my-3">{errorMessage}</p>
             <div className="mt-4">
             <p className="font-medium text-center mb-3">New User ? <Link to={'/register'} className="underline text-lg font-semibold"> Create a account!</Link></p>
             
             <button onClick={handleLoginUsingGoogle} className='flex items-center justify-center bg-slate-600 hover:bg-slate-500 w-full py-3 text-white text-lg'> Login using Google</button>
          </div>
          </div>
        </div>
      </section>
    );
};

export default Login;