import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from "./MainLayout/Layout";
import Home from "./page/Home/Home";
import Blogs from "./allComponent/blog/Blogs";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout>Hello world!</Layout>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/blog",
            element:<Blogs/>
        }
      ]
    },
  ]);