import { useParams } from "react-router-dom";
import { seccionesData } from "../../data/secciones";
import { getLeccionBySeccionId, getSeccionByID } from "../../helpers/getterOptionsForData";
import { LeccionCard } from "../../components/Cards/LeccionCard";
import { leccionesData } from "../../data/lecciones";

export const VisualizarSeccion = () => {

    const { idSeccion } = useParams();
    const { nombre } = getSeccionByID(idSeccion, seccionesData);
    const leccionesFiltered = getLeccionBySeccionId(idSeccion, leccionesData);


    return (
        <>
            <h1 className="text-center m-auto mb-10 p-4 text-2xl bg-gray-700 rounded-md ">SECCIÓN: <span className="italic font-bold text-teal-500">{nombre}</span></h1>
            <div className="justify-center text-center ">
                <section className="grid grid-cols-4 w-100 ">
                    {leccionesFiltered.map((leccion, i) => (
                        <LeccionCard title={leccion.nombre} difficulty={leccion.dificultad} state={leccion.estado} quantity={leccion.cantidadRecursos} leccionId={leccion.id} key={i} />
                    ))}
                </section>
            </div>
        </>
    )
}
