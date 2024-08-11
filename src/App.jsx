import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignUp from "./Pages/SignUp"
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import RootLayout from "./Components/RootLayout";

function App() {

  let router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "login",
          element: <Login/>,
        },
        {
          path: "signup",
          element: <SignUp/>,
        },
      ]
    }, 
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer/>
    </div>
  )
}

export default App
