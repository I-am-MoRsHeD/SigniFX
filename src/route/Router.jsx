import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout/Mainlayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout /> ,
      errorElement: '',
      children: [
        {
            path: '/',
            element: <Home />
        },
      ]
    },
    {
        path: 'login',
        element: <Login />
    }
  ]);

  export default router;