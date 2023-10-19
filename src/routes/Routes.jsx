import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Errorpage from "../pages/Errorpage";
import Rootpage from "../pages/Rootpage";
import PrivateRoute from "../routes/PrivateRoute";
import Details from "../pages/Details";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MyCart from "../pages/MyCart";
import AddProducts from "../pages/AddProducts";
import Amazon from "../amazon/Amazon"
import Chorki from "../chorki/Chorki"
import Disney from "../disney/Disney"
import Hulu from "../hulu/Hulu"
import Hbo from "../hbo/Hbo"
import Netflix from "../netflix/Netflix"
import UpdateProducts from "../pages/UpdateProducts";

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
        path: "/Details/:_id",
        element: (
 
            <Details></Details> 
      
        ),
      },
      {
        path: "/AddProducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/UpdateProducts/:_id",
        element: <UpdateProducts></UpdateProducts>,
        loader: () => fetch("http://localhost:3000/allproducts"),
      },
      {
        path: "/MyCart",
        element: <MyCart></MyCart>,
        loader: () => fetch("http://localhost:3000/cart")
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
      {
        path: "/5",
        element: <Amazon></Amazon>,
      },
      {
        path: "/3",
        element: <Chorki></Chorki>,
      },
      {
        path: "/2",
        element: <Disney></Disney>,
      },
      {
        path: "/4",
        element: <Hulu></Hulu>,
      },
      {
        path: "/6",
        element: <Hbo></Hbo>,
      },
      {
        path: "/1",
        element: <Netflix></Netflix>,
      },
    ],
  },
]);

export default router;
