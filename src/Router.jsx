import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Layout from "./Layout";
import Services from "./Services";
import Nhimila from "./Nhimila";

export let myRoutes = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          //index: true,
          path:"/",
          element:<Home />
        },
        {
          path:"/about",
          element:<About />
        },
        {
          path:"/services",
          element:<Services />
        },
      ]
     
    },
    {
        path:"*",
        element:<Nhimila />
    }
  ])