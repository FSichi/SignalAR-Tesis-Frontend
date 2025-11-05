import { useParams } from "react-router-dom";
import { seccionesData } from "../../data/secciones";
import { getLeccionBySeccionId, getSeccionByID } from "../../helpers/getterOptionsForData";
import { LeccionCard } from "../../components/Cards/LeccionCard";
import { leccionesData } from "../../data/lecciones";
import { useSelector } from "react-redux";

export const VisualizarSeccion = () => {

    const { idSeccion } = useParams();
    const { nombre } = getSeccionByID(idSeccion, seccionesData);
    const leccionesFiltered = getLeccionBySeccionId(idSeccion, leccionesData);
    const { progresoLecciones } = useSelector(state => state.progreso);


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
