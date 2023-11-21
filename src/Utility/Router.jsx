import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home";
import Campaign from "../Page/Campaign";
import AboutUs from "../Page/AboutUs";
import Login from "../Page/Login";
import ErrorPage from "../Page/ErrorPage";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<ErrorPage/>,
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