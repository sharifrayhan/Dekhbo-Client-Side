import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Errorpage from "../pages/Errorpage";
import Rootpage from "../pages/Rootpage";
import PrivateRoute from "../routes/PrivateRoute";
import Details from "../pages/Details";
import Register from "../pages/Register";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootpage></Rootpage> ,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Details/:id",
        element: (
          <PrivateRoute> 
            <Details></Details> 
          </PrivateRoute>
        ),
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
