import { createBrowserRouter } from "react-router-dom";
import Error from "../Shared/Error";
import Home from "../Page/Home/Home";
import Header from "../Page/Header/Header";
import PrivacyPolicy from "../Page/PrivacyPolicy/PrivacyPolicy";
import SignUp from "../Page/SignInOut/SignUp";
import SignIn from "../Page/SignInOut/SignIn";
import Dashboard from "../Dashboard Pages/Dashboard";
import Task from "../Dashboard Pages/Task";
import Progress from "../Dashboard Pages/Progress";
import Todo from "../Dashboard Pages/Todo";
import Team from "../Dashboard Pages/Team";
import Trash from "../Dashboard Pages/Trash";
import DashboardHome from "../Dashboard Pages/DashboardHome";
import Completed from "../Dashboard Pages/Completed";
import Chat from "../Dashboard Pages/Chat";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <Error/>,
      children:[
        {
            path: "/",
            element: <Header/>
        },
        {
            path: "/sign-up",
            element: <SignUp/>
        },
        {
            path: "/login",
            element: <SignIn/>
        },
        {
          path: "/terms/privacy_policy",
          element: <PrivacyPolicy/>
        }
    ]},
    {
      path: "/user",
      element: <DashboardHome/>,
      children: [
        {
        path: "dashboard",
        element: <Dashboard/>
      },
      {
        path: "tasks",
        element: <Task/>
      },
      {
        path: "completed",
        element: <Completed/>
      },
      {
        path: "in-progress",
        element: <Progress/>
      },
      {
        path: "todo",
        element: <Todo/>
      },
      {
        path: "team",
        element: <Team/>
      },
      {
        path: "team-chat",
        element: <Chat/>
      },
      {
        path: "trash",
        element: <Trash/>
      },
    ]},
  ]);

  export default router;