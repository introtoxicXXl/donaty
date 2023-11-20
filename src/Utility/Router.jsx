import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home";
import Campaign from "../Page/Campaign";
import AboutUs from "../Page/AboutUs";
import Login from "../Page/Login";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/campaign',
            element:<Campaign/>
        },
        {
            path:'/about',
            element:<AboutUs/>
        },
        {
            path:'/login',
            element:<Login/>
        }
      ]
    },
  ]);

export default Router;