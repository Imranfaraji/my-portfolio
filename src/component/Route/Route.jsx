import {
    createBrowserRouter,
    
  } from "react-router";
import Root from "../Root/Root";
import Home from "../../pages/Home/Home";
import ProjectDetails from "../Home/ProjectDetails";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {index:true, Component:Home},
        {
          path:'/projects/:id',
          Component:ProjectDetails
        }
      ]
    },
  ]);