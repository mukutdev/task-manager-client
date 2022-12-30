import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { routes } from './Routes/Routes/Routes';
import { useEffect, useState } from 'react';
import Loader from './Shared/Loader/Loader';

function App() {

  const [loading , setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    } , 2000)
  } , [])


  return loading ? <Loader/> :  
  <div className="App bg-gray-100 dark:bg-slate-900 ">
    <RouterProvider router={routes} />
     <Toaster/>
</div>
}

export default App;
