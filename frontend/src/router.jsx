// Route handler file
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Surveys from "./views/surveys";
import Login from "./views/login";
import Signup from "./views/signup";

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
        path: "/login",
        element: <Login />,
    },
    {
        path: "signup",
        element: <Signup />,
    },
]);

export default router;
