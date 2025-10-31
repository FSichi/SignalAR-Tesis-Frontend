import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutesList } from "./AuthRoutesList"
import { Error404 } from "../pages/Error404"

export const AuthRoutes = () => {
    return (
        <Routes>

            {AuthRoutesList.map((route, i) => (
                <Route path={route.path} element={route.component} exact={route.exact} key={i} />
            ))}

            {/* RUTAS PERSONALIZADAS */}

            <Route path={'/'} element={<Navigate to="/auth/login" replace />} exact />
            <Route path={'/404'} element={<Error404 />} exact />
            <Route path="*" element={<Navigate to="/auth/404" replace />} />

        </Routes>
    )
}
