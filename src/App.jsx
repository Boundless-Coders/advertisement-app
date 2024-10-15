
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DashboardLayout from './layouts/DashboardLayout'
import Overview from './pages/dashboard/Overview'
import Settings from './pages/dashboard/Settings'
import About from './pages/About'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home/>,
    },
    {
      path:"/about",
      element: <About/>,
    },
    {
      path:"/dashboard",
      element: <DashboardLayout/>,
      children:[
        {
          index: true,
          element: <Overview/>,
        },
        {
          path: "settings",
          element: <Settings/>,
        },
      ],
    },
  ]);
  
  return <RouterProvider router={router}/>;
}

export default App
