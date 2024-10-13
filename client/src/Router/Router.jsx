import { createBrowserRouter } from "react-router-dom";
import Error from "../Shared/Error";
import Home from "../Page/Home/Home";
import Header from "../Page/Header/Header";
import PrivacyPolicy from "../Page/PrivacyPolicy/PrivacyPolicy";
import SignUp from "../Page/SignInOut/SignUp";
import SignIn from "../Page/SignInOut/SignIn";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
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
    ],
      // errorElement: <Error/>
    },
  ]);

  export default router;