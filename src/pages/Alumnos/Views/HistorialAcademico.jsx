import { useSelector } from "react-redux";
import { leccionesData } from "../../../data/lecciones";
import { getLeccionById } from "../../../helpers/getterOptionsForData";
import { evaluacionesData } from "../../../data/evaluaciones";
import { seccionesData } from "../../../data/secciones";

export const HistorialAcademico = ({ alumno }) => {
    const { progresoLecciones, progresoEvaluaciones } = useSelector(state => state.progreso);

    return (
        <section className="bg-gray-900 text-white rounded-2xl p-8 mt-6 shadow-lg border border-gray-700">

            {/* Header */}
            <div className="text-center py-10 text-3xl font-bold tracking-wide text-orange-400">
                Historial Académico de {alumno.nombreCompleto}
            </div>

            {/* Contenedor grande */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* PROGRESO LECCIONES */}
                <div className="bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700">
                    <h2 className="text-xl font-semibold mb-4 text-cyan-400">
                        Progreso de Lecciones
                    </h2>

                    <div className="space-y-3">
                        {
                            progresoLecciones.filter(p => p.progreso !== "PENDIENTE").map(p => {
                                const leccion = getLeccionById(p.leccion, leccionesData);
                                const seccion = getLeccionById(leccion.seccionId, seccionesData)

                                return (
                                    <div
                                        key={p._id}
                                        className="bg-gray-700 p-4 rounded-lg flex justify-between items-center shadow-sm hover:bg-gray-600 transition"
                                    >
                                        <div>
                                            <p className="font-medium">{leccion.nombre}</p>
                                            <p className="text-sm text-gray-300">
                                                {new Date(p.attemptDate).toLocaleDateString()}
                                            </p>
                                        </div>

                                        <span className={`px-3 py-1 rounded-md text-sm font-semibold bg-blue-600`}>
                                            {seccion.nombre}
                                        </span>

                                        <span className={`px-3 py-1 rounded-md text-sm font-semibold
                                            ${p.progreso === "COMPLETADO"
                                                ? "bg-green-600"
                                                : "bg-yellow-600"
                                            }`}>
                                            {p.progreso}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* PROGRESO EVALUACIONES */}
                <div className="bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700">
                    <h2 className="text-xl font-semibold mb-4 text-purple-400">
                        Progreso de Evaluaciones
                    </h2>

                    <div className="space-y-3">
                        {
                            progresoEvaluaciones.filter(p => p.progreso !== "PENDIENTE").map(p => {
                                const evaluacion = getLeccionById(p.evaluacion, evaluacionesData);
                                const seccion = getLeccionById(evaluacion.seccion, seccionesData)

                                return (
                                    <div
                                        key={p._id}
                                        className="bg-gray-700 p-4 rounded-lg flex justify-between items-center shadow-sm hover:bg-gray-600 transition"
                                    >
                                        <div>
                                            <p className="font-medium">{evaluacion.nombreEvaluacion}</p>
                                            <p className="text-sm text-gray-300">
                                                {new Date(p.attemptDate).toLocaleDateString()}
                                            </p>
                                        </div>

                                        <span className={`px-3 py-1 rounded-md text-sm font-semibold bg-blue-600`}>
                                            {seccion.nombre}
                                        </span>

                                        <span className={`px-3 py-1 rounded-md text-sm font-semibold
                                            ${p.progreso === "APROBADA"
                                                ? "bg-green-600"
                                                : "bg-red-600"
                                            }`}>
                                            {p.progreso}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </section>
    );
};
