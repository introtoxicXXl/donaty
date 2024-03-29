import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home";
import Campaign from "../Page/Campaign";
import AboutUs from "../Page/AboutUs";
import Login from "../Page/Login";
import ErrorPage from "../Page/ErrorPage";
import CardDetails from "../Page/CardDetails";
import PrivetRoute from "../Provider/PrivetRoute";
import Registration from "../Page/Registration";
import Dashboard from "../Page/Dashboard";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/campaign',
        element: <Campaign />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/campaign/:id',
        element: <PrivetRoute><CardDetails /></PrivetRoute>
      },
      {
        path: '/registration',
        element: <Registration />
      },
      {
        path: '/dashboard',
        element: <PrivetRoute><Dashboard /></PrivetRoute>
      }
    ]
  },
]);

export default Router;