import './App.css';
import { RouterProvider } from 'react-router-dom'
import { router } from './Routs/Routs/Routs';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import PreLoading from './Components/Loadings/PreLoading/PreLoading';

function App() {

  const [isPreLoading, setIsPreLoading] = useState(true);

  useEffect( () => {
    setTimeout( () => {
      setIsPreLoading(false);
    }, 2000)
  })


  return (
    <div className='min-h-screen' >
      {
        isPreLoading ? <PreLoading></PreLoading> : <><RouterProvider router={router}></RouterProvider><Toaster></Toaster></>
      }
    </div>
  )
}

export default App
