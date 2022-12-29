import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../Context/AuthContext';

const Register = () => {
    const {handleCreateUser} = useContext(AuthProvider)
    const {register , handleSubmit , formState: { errors }} = useForm()
    const navigate = useNavigate()
  
    const [errorMessage , setErrorMessage] = useState('')

    const handleUserSubmit = data =>{
        console.log(data);
        //email password based account creation
        handleCreateUser(data.email , data.password)
        .then(result =>{
          const user = result.user
          toast.success('Your account has been created')
          navigate('/')
          console.log(user);
        })
        .catch(err => {
          setErrorMessage(err.message)
        })
    }



    return (
        <section className="h-screen">
      <div className="mt-40 flex flex-col justify-center items-center ">
        <div className="bg-white md:w-[400px] mt-10 p-6 md:mx-0 mx-4">
          <h2 className="text-center text-2xl font-bold">Register</h2>
          <form onSubmit={handleSubmit(handleUserSubmit)}>
            <input
              type="text"
              placeholder="Enter Full Name"
              {...register("name" , { required: true })}
              className="border-0 w-full outline-none bg-gray-50 px-3 py-3 mt-5 text-slate-900 placeholder-gray-500"
            />
            {errors.name && <span className="text-red-500">Please enter your name</span>}
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
            {errors.password && <span className="text-red-500">Please enter a strong password</span>}
             
             <input type="submit" value="Create Your Account"  className="w-full bg-indigo-600 text-white hover:bg-orange-500 cursor-pointer py-3 mt-4 font-medium text-lg"/>
          </form>
           <p className="text-red-500 font-medium text-lg my-3">{errorMessage}</p>
          <div className="mt-4">
             <p className="font-medium">Already have an account ? <Link to={'/login'} className="underline text-lg font-semibold"> Login Now !</Link></p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Register;