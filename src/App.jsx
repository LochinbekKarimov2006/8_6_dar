import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AboutUser from "./pages/User";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Data from "./pages/Data";
import Data2 from "./pages/Data2";
import Bord from "./pages/Bord";

// Foydalanuvchi autentifikatsiya qilinganligini tekshiradigan funksiya
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

// PrivateRoute komponenti, faqat autentifikatsiya qilingan foydalanuvchilarga ko'rsatiladi
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <PrivateRoute element={<Home />} />,
        },
        {
          path: "/user",
          element: <PrivateRoute element={<AboutUser />} />,
        },
        {
          path: "/data",
          element: <PrivateRoute element={<Data />} />,
        },
        {
          path: "/data2",
          element: <PrivateRoute element={<Data2 />} />,
        },
        {
          path: "/bord",
          element: <PrivateRoute element={<Bord />} />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
