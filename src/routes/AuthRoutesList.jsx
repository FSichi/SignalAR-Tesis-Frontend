import { Login } from "../pages/Auth/Login";
import { Register } from "../pages/Auth/Register";
import { ResetPassword } from "../pages/Auth/ResetPassword";
import { HelpPage } from "../pages/HelpPage";

export const AuthRoutesList = [
    {
        path: '/login', // the url
        exact: true,
        component: <Login />,
    },
    {
        path: '/register', // the url
        exact: true,
        component: <Register />,
    },
    {
        path: '/reset-password', // the url
        exact: true,
        component: <ResetPassword />,
    },
    {
        path: '/help-page', // the url
        exact: true,
        component: <HelpPage />,
    },
]