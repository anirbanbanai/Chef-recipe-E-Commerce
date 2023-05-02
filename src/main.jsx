import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProvider from './Components/AuthProvider';
import Sectionfirst from './Components/Home/Sectionfirst';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      // {
      //   path:"/section1",
      //   element:<Sectionfirst></Sectionfirst>,
      //   loader:()=>fetch('http://localhost:4000/chef')
      // }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
 </AuthProvider>
)
