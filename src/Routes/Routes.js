import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import CardDetails from "../pages/CardDetails/CardDetails";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReview from "../pages/MyReview/MyReview";
import Reviews from "../pages/Reviews/Reviews";
import Services from "../pages/Services/Services";
import SignUp from "../pages/SignUp/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
       
            },
            {
                path: "/services",
                element: <Services></Services>,
                loader: async () => {
                    return fetch("http://localhost:5000/services")
                }
            },
            {
                path: "/blog",
                element: <Blog></Blog>
       
            },
            {
                path: '/services/:id',
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                children: [
                    {
                        path: '/services/:id',
                        element: <Reviews></Reviews>,
                        loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`),
                     }
                ]
            },
            {
                path: "/login",
                element: <Login></Login>
       
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
       
            },
            {
                path: '/service',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            }

        ]
    },
])
export default router