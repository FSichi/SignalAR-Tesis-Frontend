import { useParams } from "react-router-dom";
import { seccionesData } from "../../data/secciones";
import { getLeccionBySeccionId, getSeccionByID } from "../../helpers/getterOptionsForData";
import { LeccionCard } from "../../components/Cards/LeccionCard";
import { leccionesData } from "../../data/lecciones";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { crearProgresoSeccion } from "../../redux/slices/progreso/thunks";
import { UserRoles } from "../../helpers/Enums";

export const VisualizarSeccion = () => {

    const { idSeccion } = useParams();
    const { nombre } = getSeccionByID(idSeccion, seccionesData);
    const leccionesFiltered = getLeccionBySeccionId(idSeccion, leccionesData);
    const { progresoLecciones, progresoSecciones, isProgresoSeccionesLoaded } = useSelector(state => state.progreso);

    const dispatch = useDispatch();

    const { sessionData } = useSelector(state => state.auth);
    const { alumnoSelected } = useSelector(state => state.alumnos);

    
    useEffect(() => {
        if (!isProgresoSeccionesLoaded) return;

        const idAlumno = sessionData.user.rol === UserRoles.PROFESIONAL_ROLE || sessionData.user.rol === UserRoles.ADMIN_ROLE
            ? alumnoSelected?._id
            : sessionData.user.uid;

        if (!idAlumno) return;

        const existe = progresoSecciones.some(p => p.seccion == idSeccion);

        if (!existe) {
            dispatch(crearProgresoSeccion(
                {
                    alumno: idAlumno,
                    seccion: idSeccion,
                    progreso: 'PENDIENTE',
                    leccionesCompletadas: 0,
                },
                { successCallback: () => { } }
            ));
        }
    }, [progresoSecciones, isProgresoSeccionesLoaded]);

    return (
        <>
            <h1 className="text-center m-auto mb-10 p-4 text-2xl bg-gray-700 rounded-md ">SECCIÓN: <span className="italic font-bold text-teal-500">{nombre}</span></h1>
            <div className="justify-center text-center ">
                <section className="grid grid-cols-4 w-100 ">
                    {leccionesFiltered.map((leccion, i) => {
                        const progreso = progresoLecciones.filter(p => p.leccion == leccion.id)[0];
                        return (
                            <LeccionCard title={leccion.nombre} difficulty={leccion.dificultad} state={progreso?.progreso ?? 'PENDIENTE'} quantity={leccion.cantidadRecursos} leccionId={leccion.id} key={i} />
                        )
                    })}
                </section>
            </div>
        </>
    )
}
