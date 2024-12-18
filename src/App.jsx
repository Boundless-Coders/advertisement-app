import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import Settings from "./pages/dashboard/Settings";
import About from "./pages/About";


import LogInForm from "./pages/LogInForm";
import RegisterForm from "./pages/RegisterForm";
import VendorDashboard from "./pages/dashboard/VendorDashboard";

import HomePage from "./pages/HomePage";
import VendorForm from "./pages/VendorForm";
import VendorRegisterForm from "./pages/VendorRegisterForm";
import EditAdvert from "./pages/dashboard/EditAdvert";
import AdvertDetails from "./pages/dashboard/AdvertDetails";
import AdvertDetail from "./pages/AdvertDetail";
import AdPage from "./pages/AdPage";
import { CarIcon } from "lucide-react";
import VendorLogin from "./pages/VendorLogin";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LogInForm />,
    },
    {
      path: "/register",
      element: <RegisterForm />,
    },
    {
      path: "/about",
      element: <About />,
    },
    
    {
      path: "/vendor",
      element: <VendorForm />,
    },
    {
      path: "/adverts/:id",
      element: <AdvertDetail/> 
    },
    {
      path: "/adpage",
      element: <AdPage/> 
    },
    {
      path: "/login-vendor",
      element:  <VendorLogin />
    },
    {
      path: "/register-vendor",
      element: <VendorRegisterForm />,
    },
    

    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        
        {
          index: true,
          element: <VendorDashboard />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
       
        {
          path: "advert-details/:id",
          element: <AdvertDetails/>,
        },
        {
          path: "edit-advert/:id",
          element: <EditAdvert/>,
        },

      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
