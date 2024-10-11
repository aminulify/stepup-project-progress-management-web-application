import { createBrowserRouter } from "react-router-dom";
import Error from "../Shared/Error";
import Home from "../Page/Home/Home";
import Header from "../Page/Header/Header";
import PrivacyPolicy from "../Page/PrivacyPolicy/PrivacyPolicy";

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
          path: "/terms/privacy_policy",
          element: <PrivacyPolicy/>
        }
    ],
      // errorElement: <Error/>
    },
  ]);

  export default router;