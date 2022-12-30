import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="App bg-gray-100 dark:bg-slate-900">
        <RouterProvider router={routes} />
        <Toaster/>
    </div>
  );
}

export default App;
