// Route handler file
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/dashboard";
import GuestLayout from "./components/GuestLayout";
import Surveys from "./views/surveys";
import Login from "./views/login";
import Signup from "./views/signup";
import { Children } from "react";
import DefaultLayout from "./components/DefaultLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/surveys",
        element: <Surveys />,
    },

    {
        path: "/default",
        element: <DefaultLayout />,
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
        ],
    },
]);

export default router;
