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
import ShowRecipe from './Components/ShowRecipe';
import SectionSecond from './Components/Home/SectionSecond';
import SecHome from './Components/SecHome';
import Error from './Components/Error';
import PrivetRoute from './Components/PrivetRoute';
import BlogOne from './Components/Blog/BlogOne';
import BlogTwo from './Components/Blog/BlogTwo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/chef/:id",
        element: <PrivetRoute><ShowRecipe></ShowRecipe></PrivetRoute>,
        loader: ({ params }) => fetch(`https://assign10-server-anirbanbanai.vercel.app/chef/${params.id}`)
      },

      {
        path: "/section1",
        element: <Sectionfirst></Sectionfirst>,
        loader: () => fetch('https://assign10-server-anirbanbanai.vercel.app/chef')
      },
      {
        path: "/section2",
        element: <SectionSecond></SectionSecond>,
        loader: ({ params }) => fetch('https://assign10-server-anirbanbanai.vercel.app/chef')
      },
    ]
  },

  {
    path: "/",
    element: <SecHome></SecHome>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blog1",
        element: <BlogOne />
      },
      {
        path: "/blog2",
        element: <BlogTwo></BlogTwo>
      },

    ]
  },

  {
    path: "/*",
    element: <Error></Error>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)
