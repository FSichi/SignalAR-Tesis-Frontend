import { removeAuthentication } from "../redux/slices/auth/thunks";
import { ToastToken } from "./ToastSweetAlert";

export const AuthTokenVerification = (error, nav, dispatch) => {
    if (error.response.data.error.toString().includes("El token ha expirado")) {
        ToastToken.fire({ icon: 'warning', title: 'La sesion Expiro. Por favor inicie sesion nuevamente'});
        localStorage.removeItem('persist:auth');
        dispatch(removeAuthentication());
        nav('/');
    }
}