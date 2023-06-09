import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import MyToy from "../Pages/MyToy/MyToy";
import AddAToy from "../Pages/AddAToy/AddAToy";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ToyDetails from "../Pages/ToyDetails/ToyDetails"
import SingleShopCategory from "../Pages/SingleShopCategory/SingleShopCategory";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/categoryToyDetails/:id',
            element: <PrivateRoute><SingleShopCategory/></PrivateRoute>,
            loader: ({params})=> fetch(`https://toy-town-server-ashen.vercel.app/allCategoryProducts/${params.id}`)
        },
        {
            path: '/allToys',
            element: <AllToys/>,
        },
        {
            path: '/toy/:id',
            element: <PrivateRoute><ToyDetails/></PrivateRoute>,
            loader: ({params}) => fetch(`https://toy-town-server-ashen.vercel.app/toyDetails/${params.id}`)
        },
        {
            path: '/blog',
            element: <Blog/>,
        },
        {
            path: '/myToy',
            element: <PrivateRoute><MyToy/></PrivateRoute>
        },
        {
            path: '/myToy/:id',
            element: <PrivateRoute><UpdateToy/></PrivateRoute>,
            loader: ({params}) => fetch(`https://toy-town-server-ashen.vercel.app/toyDetails/${params.id}`)
        },
        
        {
            path: '/addAToy',
            element: <PrivateRoute><AddAToy/></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login/>,
        },
        {
            path: '/signUp',
            element: <SignUp/>,
        },
        
      ]
    },
  ]);

  export default router;