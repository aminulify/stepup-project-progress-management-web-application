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
import PrivateRoutes from "./PrivateRoutes";
import TaskRouteDetails from "../Components/ComponentDetailPage/TaskRouteDetails";

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
        element: <PrivateRoutes><Dashboard/></PrivateRoutes>
      },
      {
        path: "tasks",
        element: <Task/>
      },
      {
        path: "tasks/:id",
        element: <TaskRouteDetails></TaskRouteDetails>
      },
      {
        path: "completed",
        element: <PrivateRoutes><Completed/></PrivateRoutes>
      },
      {
        path: "completed/:id",
        element: <TaskRouteDetails></TaskRouteDetails>
      },
      {
        path: "in-progress",
        element: <PrivateRoutes><Progress/></PrivateRoutes>
      },
      {
        path: "in-progress/:id",
        element: <TaskRouteDetails></TaskRouteDetails>
      },
      {
        path: "todo",
        element: <PrivateRoutes><Todo/></PrivateRoutes>
      },
      {
        path: "todo/:id",
        element: <TaskRouteDetails></TaskRouteDetails>
      },
      {
        path: "team",
        element: <PrivateRoutes><Team/></PrivateRoutes>
      },
      {
        path: "team-chat",
        element: <Chat/>
      },
      {
        path: "trash",
        element: <PrivateRoutes><Trash/></PrivateRoutes>
      },
    ]},
  ]);

  export default router;