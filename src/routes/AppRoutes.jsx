import { Navigate, Route, Routes } from "react-router-dom"
import { AppRoutesList } from "./AppRoutesList"
import { Error404 } from "../pages/Error404"
import { Navbar } from "../components/Navbar/Navbar"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { UserRoles } from "../helpers/Enums"

const roleLicenseMap = {
    [UserRoles.ADMIN_ROLE]: 2,
    [UserRoles.PROFESIONAL_ROLE]: 2,
    [UserRoles.PARTICULAR_ROLE]: 1
};

export const AppRoutes = () => {

    const { sessionData } = useSelector(state => state.auth);
    const { rol: userRole } = sessionData?.user || {};
    const [licenseType, setLicenseType] = useState(0); // 0 = Sin Renderizar || 1 = Particular || 2 = Profesional
    
    useEffect(() => {
        const mappedLicenseType = roleLicenseMap[userRole] || 0;
        setLicenseType(mappedLicenseType);
    }, [userRole])

    return (
        <section className="bg-orange-400 text-white min-h-screen">

            <Navbar licenseType={licenseType} />

            <div className="mx-5 mt-3">

                <Routes>

                    {/* LISTADO DE RUTAS DE LA APP */}

                    {AppRoutesList.map((route, i) => (
                        <Route path={route.path} element={route.component} exact={route.exact} key={i} />
                    ))}

                    {/* RUTAS PERSONALIZADAS */}

                    <Route path={'/'} element={<Navigate to="/app/dashboard" replace />} exact />
                    <Route path={'/404'} element={<Error404 />} exact />
                    <Route path="*" element={<Navigate to="/app/404" replace />} />
                </Routes>

            </div>

        </section>
    )
}
