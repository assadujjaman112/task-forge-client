import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import Profile from "../Pages/Dashboard/Profile";
import SignUp from "../Pages/SignUp/SignUp";
import CreateTask from "../Pages/Dashboard/CreateTask";
import PrivateRoute from "./PrivateRoute";
import ToDoList from "../Pages/Dashboard/ToDoList";
import UpdateTask from "../Pages/Dashboard/UpdateTask";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path : "/about",
        element : <About></About>
      },
      {
        path : "/blog",
        element : <Blog></Blog>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/createATask",
        element: (
          <PrivateRoute>
            <CreateTask></CreateTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/toDoList",
        element: (
          <PrivateRoute>
            <ToDoList></ToDoList>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/updateTask/:id",
        element: (
          <PrivateRoute>
            <UpdateTask></UpdateTask>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
