import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { Error404 } from "./pages/Error404"
import { AppRoutes } from "./routes/AppRoutes"
import { AuthRoutes } from "./routes/AuthRoutes"
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { checkSessionValidation } from "./redux/slices/auth/thunks"
import { getUrlRedirectForSession } from "./helpers/getURLRedirectionSession"
import { getDashboardInfo } from "./redux/slices/dashboard/thunks"
import { fetchOrCreateProgresoAlumno, getProgresoEvaluacionesByAlumno, getProgresoLeccionesByAlumno, getProgresoSeccionesByAlumno } from "./redux/slices/progreso"
import { UserRoles } from "./helpers/Enums"

const theme = createTheme({
    palette: {
        primary: {
            //light: '91D0FF',
            main: '#85CAFF',
            //dark: '5CB8FF'
        }
    }
})

export const App = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { sessionData } = useSelector(state => state.auth);

    useEffect(() => {

        let URLActual = window.location;
        const urlRedirect = getUrlRedirectForSession(URLActual.pathname);

        if (sessionData?.token) {
            dispatch(checkSessionValidation(sessionData.token, {
                sucessCallBack: () => {
                    navigate(urlRedirect ?? '/app/dashboard', { replace: true });
                },
                failureCallBack: () => {
                    navigate('/auth/login', { replace: true });
                }
            }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sessionData])

    const { rol, uid } = sessionData?.user || {};

    useEffect(() => {

        if (!rol) return;

        if (rol === UserRoles.PROFESIONAL_ROLE || rol === UserRoles.ADMIN_ROLE) {
            // Profesional: usa alumnoActivo
            dispatch(getDashboardInfo(sessionData.token));
        }

        if (rol === UserRoles.PARTICULAR_ROLE) {
            dispatch(fetchOrCreateProgresoAlumno(uid));
            dispatch(getProgresoEvaluacionesByAlumno(uid));
            dispatch(getProgresoLeccionesByAlumno(uid));
            dispatch(getProgresoSeccionesByAlumno(uid));
        }

    }, [rol, sessionData]);

    //FALTARIA AGREGAR UNA PANTALLA DE CARGA.

    return (
        <ThemeProvider theme={theme}>
            <Routes>

                <Route path={'/'} element={<Navigate to="/auth/login" replace />} exact />

                <Route path={'/auth/*'} element={<AuthRoutes />} exact />
                <Route path={'/app/*'} element={<AppRoutes />} exact />

                <Route path={'/404'} element={<Error404 />} exact />
                <Route path="*" element={<Navigate to="/404" replace />} />

            </Routes>
        </ThemeProvider>
    )
}
