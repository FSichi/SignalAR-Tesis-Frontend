import { ToastNotification } from "../../../components/Notifications/ToastNotification";
import { AuthTokenVerification } from "../../../utils/AuthTokenVerification";
import { ResponseStatus } from "../../api/ApiResponse";
import { AppAPI } from "../../api/AppAPI";
import {
    startLoadingProgresoProcess,
    setProgresoAlumnoData,
    setProgresoLecciones,
    setProgresoEvaluaciones,
    setProgresoSecciones,
} from "./progresoSlice";


// 🟦 Obtener o crear progreso general del alumno
export const fetchOrCreateProgresoAlumno = (alumnoId, nav) => {
    return async (dispatch, getState) => {
        const { sessionData } = getState().auth;
        const token = sessionData.token;

        dispatch(startLoadingProgresoProcess());

        try {
            // 1️⃣ Try to get progresoAlumno
            const { data: responseData } = await AppAPI(token).get(`/progreso/alumno/${alumnoId}`);
            
            // ✅ Found
            if (responseData.status === ResponseStatus.OK) {
                dispatch(setProgresoAlumnoData({
                    progresoAlumno: responseData.data
                }));
                return;
            }

            // If backend responds with another non-404 status, throw
            throw new Error('Unexpected response');

        } catch (error) {
            // 2️⃣ Handle 404 specifically: create progreso
            if (error.response?.status === 404) {
                try {
                    const createData = {
                        alumno: alumnoId,
                        secciones: [],
                        lecciones: [],
                        evaluaciones: []
                    };

                    const { data: createResponse } = await AppAPI(token).post(`/progreso/alumno`, createData);

                    if (createResponse.status === ResponseStatus.OK) {
                        ToastNotification.fire({ icon: 'success', title: 'Progreso del alumno creado con éxito' });

                        dispatch(setProgresoAlumnoData({
                            progresoAlumno: createResponse.data
                        }));
                    }

                } catch (createError) {
                    AuthTokenVerification(createError, nav, dispatch);
                    ToastNotification.fire({ icon: 'error', title: 'Error al crear el progreso del alumno' });
                }

            } else {
                AuthTokenVerification(error, nav, dispatch);
                ToastNotification.fire({ icon: 'error', title: 'Error al obtener el progreso del alumno' });
            }
        }
    };
};

// 🟦 Fetch ProgresoLeccion by leccionId
export const getProgresoLeccionById = (progresoLeccionId) => {
    return async (dispatch, getState) => {
        const { sessionData } = getState().auth;
        const token = sessionData.token;

        try {
            const { data: response } = await AppAPI(token).get(
                `/progreso/leccion/${progresoLeccionId}`
            );

            if (response.status === ResponseStatus.OK) {
                // Update progresoAlumno.lecciones in store
                const { progresoAlumno } = getState().progreso;
                const updatedLecciones = [
                    ...(progresoAlumno.lecciones || []),
                    response.data,
                ];
                dispatch(
                    setProgresoAlumnoData({ progresoAlumno: { ...progresoAlumno, lecciones: updatedLecciones } })
                );
                return response.data;
            }

            return null;
        } catch (error) {
            if (error.response?.status === 404) {
                // Not found → caller will create
                return null;
            }
            AuthTokenVerification(error, dispatch);
            ToastNotification.fire({
                icon: "error",
                title: "Error al obtener progreso de lección",
            });
            return null;
        }
    };
};

// 🟧 Create ProgresoLeccion
export const crearProgresoLeccion = ({ alumnoId, leccionId, userRol }, { successCallback }) => {
    return async (dispatch, getState) => {
        const { sessionData } = getState().auth;
        const token = sessionData.token;
        const { progresoAlumno } = getState().progreso;

        try {
            const { data: response } = await AppAPI(token).post(
                `/progreso/leccion`,
                {
                    alumno: alumnoId,
                    leccion: leccionId,
                    progreso: "PENDIENTE",
                    teoria: false,
                    practica: false,
                },
                { headers: { "x-user-rol": userRol } }
            );

            if (response.status === ResponseStatus.OK) {
                const updatedLecciones = [
                    ...(progresoAlumno.lecciones || []),
                    response.data,
                ];
                dispatch(
                    setProgresoAlumnoData({ progresoAlumno: { ...progresoAlumno, lecciones: updatedLecciones } })
                );
                dispatch(
                    setProgresoLecciones(updatedLecciones)
                );

                ToastNotification.fire({
                    icon: "success",
                    title: "Progreso de lección creado con éxito",
                });

                successCallback?.();
            }
        } catch (error) {
            AuthTokenVerification(error, dispatch);
            ToastNotification.fire({
                icon: "error",
                title: "Error al crear progreso de lección",
            });
        }
    };
};

// 🟦 Crear ProgresoAlumno
export const crearProgresoAlumno = (data, { successCallback }) => {
    return async (dispatch, getState) => {
        const { sessionData } = getState().auth;
        const token = sessionData.token;

        try {
            const { data: responseData } = await AppAPI(token).post(`/progreso/alumno`, data);

            if (responseData.status === ResponseStatus.OK) {
                ToastNotification.fire({ icon: 'success', title: 'Progreso del alumno creado con éxito' });
                successCallback?.();
                dispatch(setProgresoAlumnoData({ progresoAlumno: responseData.data }));
            }

        } catch (error) {
            AuthTokenVerification(error, dispatch);
            ToastNotification.fire({ icon: 'error', title: 'Error al crear progreso del alumno' });
        }
    };
};



// 🟧 Crear ProgresoSección
export const crearProgresoSeccion = (data, { successCallback }) => {
    return async (dispatch, getState) => {
        const { sessionData } = getState().auth;
        const token = sessionData.token;

        try {
            const { data: responseData } = await AppAPI(token).post(`/progreso/seccion`, data);

            if (responseData.status === ResponseStatus.OK) {

                const { progresoAlumno, progresoSecciones } = getState().progreso;

                // Append new item to arrays
                const updatedSecciones = [
                    ...(progresoSecciones || []),
                    responseData.data,
                ];

                const updatedProgresoAlumno = {
                    ...progresoAlumno,
                    secciones: [
                        ...(progresoAlumno?.secciones || []),
                        responseData.data,
                    ],
                };

                // Dispatch updates
                dispatch(setProgresoAlumnoData({ progresoAlumno: updatedProgresoAlumno }));
                dispatch(setProgresoSecciones(updatedSecciones));

                ToastNotification.fire({
                    icon: 'success',
                    title: 'Progreso de sección creado con éxito'
                });

                successCallback?.();
            }

        } catch (error) {
            AuthTokenVerification(error, dispatch);
            ToastNotification.fire({
                icon: 'error',
                title: 'Error al crear progreso de sección'
            });
        }
    };
};



// 🟥 Crear ProgresoEvaluación
export const crearProgresoEvaluacion = (data, { successCallback }) => {
    return async (dispatch, getState) => {
        const { sessionData } = getState().auth;
        const token = sessionData.token;

        try {
            const { data: responseData } = await AppAPI(token).post(`/progreso/evaluacion`, data);

            if (responseData.status === ResponseStatus.OK) {

                const { progresoAlumno, progresoEvaluaciones } = getState().progreso;

                // Build new arrays
                const updatedEvaluaciones = [
                    ...(progresoEvaluaciones || []),
                    responseData.data,
                ];

                const updatedProgresoAlumno = {
                    ...progresoAlumno,
                    evaluaciones: [
                        ...(progresoAlumno?.evaluaciones || []),
                        responseData.data,
                    ],
                };

                // Dispatch both
                dispatch(setProgresoAlumnoData({ progresoAlumno: updatedProgresoAlumno }));
                dispatch(setProgresoEvaluaciones(updatedEvaluaciones));

                ToastNotification.fire({
                    icon: 'success',
                    title: 'Progreso de evaluación creado con éxito'
                });

                successCallback?.();
            }

        } catch (error) {
            AuthTokenVerification(error, dispatch);
            ToastNotification.fire({
                icon: 'error',
                title: 'Error al crear progreso de evaluación'
            });
        }
    };
};



// 🟨 Actualizar o finalizar progreso (lección / sección / evaluación)
export const actualizarProgresoItem = (tipo, id, data, { successCallback }) => {
    return async (dispatch, getState) => {
        const { sessionData } = getState().auth;
        const token = sessionData.token;

        // tipo: 'leccion' | 'seccion' | 'evaluacion'
        try {
            const { data: responseData } = await AppAPI(token).put(`/progreso/${tipo}/${id}`, data);

            if (responseData.status === ResponseStatus.OK) {
                ToastNotification.fire({ icon: 'success', title: `Progreso de ${tipo} actualizado` });
                successCallback?.();

                // Refresh updated lists
                switch (tipo) {
                    case 'leccion':
                        dispatch(getProgresoLecciones(data.alumno));
                        break;
                    case 'seccion':
                        dispatch(getProgresoSecciones(data.alumno));
                        break;
                    case 'evaluacion':
                        dispatch(getProgresoEvaluaciones(data.alumno));
                        break;
                }
            }

        } catch (error) {
            AuthTokenVerification(error, dispatch);
            ToastNotification.fire({ icon: 'error', title: `Error al actualizar progreso de ${tipo}` });
        }
    };
};

// 🟦 Obtener todas las lecciones del progreso de un alumno
export const getProgresoLeccionesByAlumno = (alumnoId, nav) => {
    return async (dispatch, getState) => {
        const { sessionData } = getState().auth;
        const token = sessionData.token;

        dispatch(startLoadingProgresoProcess());

        try {
            const { data: responseData } = await AppAPI(token).get(`/progreso/leccion/alumno/${alumnoId}`);

            if (responseData.status === ResponseStatus.OK) {
                // Actualiza el array de progresoLecciones
                dispatch(setProgresoLecciones(responseData.data));
            }
        } catch (error) {
            AuthTokenVerification(error, nav, dispatch);
            ToastNotification.fire({ icon: 'error', title: 'Error al obtener progreso de lecciones' });
        }
    };
};

// 🟦 Obtener todas las secciones del progreso de un alumno
export const getProgresoSeccionesByAlumno = (alumnoId, nav) => {
    return async (dispatch, getState) => {
        const { sessionData } = getState().auth;
        const token = sessionData.token;

        dispatch(startLoadingProgresoProcess());

        try {
            const { data: responseData } = await AppAPI(token).get(`/progreso/seccion/alumno/${alumnoId}`);

            if (responseData.status === ResponseStatus.OK) {
                dispatch(setProgresoSecciones(responseData.data));
            }
        } catch (error) {
            AuthTokenVerification(error, nav, dispatch);
            ToastNotification.fire({ icon: 'error', title: 'Error al obtener progreso de secciones' });
        }
    };
};

// 🟦 Obtener todas las evaluaciones del progreso de un alumno
export const getProgresoEvaluacionesByAlumno = (alumnoId, nav) => {
    return async (dispatch, getState) => {
        const { sessionData } = getState().auth;
        const token = sessionData.token;

        dispatch(startLoadingProgresoProcess());

        try {
            const { data: responseData } = await AppAPI(token).get(`/progreso/evaluacion/alumno/${alumnoId}`);

            if (responseData.status === ResponseStatus.OK) {
                dispatch(setProgresoEvaluaciones(responseData.data));
            }
        } catch (error) {
            AuthTokenVerification(error, nav, dispatch);
            ToastNotification.fire({ icon: 'error', title: 'Error al obtener progreso de evaluaciones' });
        }
    };
};

// 🟦 Full update of a ProgresoLeccion
export const updateProgresoLeccion = (data) => {
  return async (dispatch, getState) => {
    const { sessionData } = getState().auth;
    const token = sessionData.token;
    const { progresoLecciones } = getState().progreso;

    try {
      const { data: response } = await AppAPI(token).put(`/progreso/leccion`, data);
      if (response.status === ResponseStatus.OK) {

        // 🔄 Update progresoAlumno in Redux if needed
        const updatedLecciones = progresoLecciones.map((l) =>
          l._id === data._id ? response.data : l
        );

        dispatch(
          setProgresoLecciones(
            updatedLecciones
          )
        );
      }
    } catch (err) {
      AuthTokenVerification(err, dispatch);
    }
  };
};

// 🟦 Full update of a ProgresoSeccion
export const updateProgresoSeccion = (data) => {
  return async (dispatch, getState) => {
    const { sessionData } = getState().auth;
    const token = sessionData.token;
    const { progresoSecciones } = getState().progreso;

    try {
      const { data: response } = await AppAPI(token).put(`/progreso/seccion`, data);
      if (response.status === ResponseStatus.OK) {

        // 🔄 Update progresoAlumno in Redux if needed
        const updatedSecciones = progresoSecciones.map((l) =>
          l._id === data._id ? response.data : l
        );

        dispatch(
          setProgresoSecciones(
            updatedSecciones
          )
        );
      }
    } catch (err) {
      AuthTokenVerification(err, dispatch);
    }
  };
};

// 🟦 Full update of a ProgresoEvaluacion
export const updateProgresoEvaluacion = (data) => {
  return async (dispatch, getState) => {
    const { sessionData } = getState().auth;
    const token = sessionData.token;
    const { progresoEvaluaciones } = getState().progreso;

    try {
      const { data: response } = await AppAPI(token).put(`/progreso/evaluacion`, data);
      if (response.status === ResponseStatus.OK) {
        const updatedEvaluaciones = progresoEvaluaciones.map((e) =>
          e._id === response.data._id ? response.data : e
        );

        dispatch(
          setProgresoEvaluaciones(
            updatedEvaluaciones
          )
        );
      }
    } catch (err) {
        console.error(err);
      AuthTokenVerification(err, dispatch);
    }
  };
};

