
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import DashboardLayout from './layouts/DashboardLayout'
import Overview from './pages/dashboard/Overview'
import Settings from './pages/dashboard/Settings'
import About from './pages/About'
import AdvertDetail from './pages/AdvertDetail'

import LogInForm from './pages/LogInForm'
import RegisterForm from './pages/RegisterForm'
import VendorDashboard from './pages/dashboard/VendorDashboard'
import VendorForm from './pages/VendorForm'
import HomePage from './pages/HomePage'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <HomePage/>,
    },
    {
      path:"/login",
      element: <LogInForm/>,
    },
    {
      path:"/register",
      element: <RegisterForm/>,
    },
    {
      path:"/about",
      element: <About/>,
    },
    {
      path:"/advert/:id",
      element: <AdvertDetail/>,
    },
   
    {
      path:"/dashboard",
      element: <DashboardLayout/>,
      children:[
        {
          index: true,
          element: <VendorForm/>,
        },
        {
          path: "settings",
          element: <Settings/>,
        },
        {
          path: "vendor-dashboard",
          element: <VendorDashboard/>,
        },
        
        
      ],
    },
  ]);
  
  return <RouterProvider router={router}/>;
}

export default App
