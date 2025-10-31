import { ToastNotification } from "../../../components/Notifications/ToastNotification";
import { AuthTokenVerification } from "../../../utils/AuthTokenVerification";
import { ResponseStatus } from "../../api/ApiResponse";
import { AppAPI } from "../../api/AppAPI";
// import { renewToken } from "../auth/thunks";
import { setAlumnoSelectedData, setAlumnosData, startLoadingAlumnosProcess } from "./alumnosSlice";

export const getAlumnosList = (nav) => {
    return async (dispatch, getState) => {

        const { sessionData } = getState().auth
        const token = sessionData.token;

        dispatch(startLoadingAlumnosProcess());

        try {

            const { data: responseData } = await AppAPI(token).get(`/alumnos/alumnos-docente`);

            if (responseData.status === ResponseStatus.OK) {
                dispatch(setAlumnosData({
                    alumnosList: responseData.data
                }));

                // dispatch(renewToken());
            }

        } catch (error) {
            AuthTokenVerification(error, nav, dispatch);
        }
    }
}

export const setAlumnoActivo = (alumnoId) => {
    return async (dispatch, getState) => {

        const { sessionData } = getState().auth
        const token = sessionData.token;

        const dataToSend = {
            _id: alumnoId,
            alumnoActivo: true
        }

        try {

            const { data: responseData } = await AppAPI(token).put(`/alumnos/set-active`, dataToSend);

            if (responseData.status === ResponseStatus.OK) {
                dispatch(setAlumnoSelectedData({
                    alumnoSelected: responseData.data
                }));

                // dispatch(renewToken());
            }

            ToastNotification.fire({ icon: 'success', title: 'Alumno establecido como activo' });

        } catch (error) {
            AuthTokenVerification(error, dispatch);
            ToastNotification.fire({ icon: 'error', title: error });
        }
    }
}

export const agregarAlumno = (alumnoData, { sucessCallBack }) => {
    return async (dispatch, getState) => {

        const { sessionData } = getState().auth
        const token = sessionData.token;

        const dataToSend = {
            nombreCompleto: alumnoData.nombre,
            edad: alumnoData.edad,
            gradoHipoacusia: alumnoData.discapacidad,
            escuela: alumnoData.escuela,
            nombreTutor: alumnoData.tutor,
            parentesco: alumnoData.parentesco,
            correoTutor: alumnoData.email,
            telefonoTutor: alumnoData.telefono,
        }

        try {

            const { data: responseData } = await AppAPI(token).post(`/alumnos`, dataToSend);

            if (responseData.status === ResponseStatus.OK) {
                ToastNotification.fire({ icon: 'success', title: 'Alumno agregado con Exito' });
                sucessCallBack();
            }

        } catch (error) {
            AuthTokenVerification(error, dispatch);
            ToastNotification.fire({ icon: 'error', title: error });
        }
    }
}