import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLeccionById } from "../../helpers/getterOptionsForData";
import { evaluacionesData } from "../../data/evaluaciones";
import { SeparatorWithoutTextForDashboard } from "../../components/UI/Separator";
import { crearProgresoEvaluacion, updateProgresoEvaluacion,  } from "../../redux/slices/progreso/thunks"
import { EvaluacionContent } from "./EvaluacionComponents/EvaluacionContent";
import { HeaderGraphicEval } from "../../components/Graphics/HeaderGraphicEval";

export const ResolverEvaluacion = () => {
    const { idEvaluacion } = useParams();
    const dispatch = useDispatch();
    const nav = useNavigate();

    const { progresoEvaluaciones, isProgresoEvaluacionesLoaded, progresoSecciones } = useSelector((state) => state.progreso);
    const { alumnoSelected } = useSelector((state) => state.alumnos);

    // 🧩 Find this evaluación’s progreso
    const progresoEvaluacion = progresoEvaluaciones?.find(
        (p) => p.evaluacion === idEvaluacion
    );

    // 🟢 Local state to prevent multiple dispatches
    const [progresoLoaded, setProgresoLoaded] = useState(false);

    // ✅ Fetch or create progreso if missing
    useEffect(() => {
        if (isProgresoEvaluacionesLoaded && !progresoLoaded && alumnoSelected?._id) {
            setProgresoLoaded(true);

            if (progresoEvaluacion) {
                console.log('Progreso encontrado');
            }
            else {
                console.log('Progreso no encontrado, creando...')
                dispatch(crearProgresoEvaluacion({ alumno: alumnoSelected?._id, evaluacion: idEvaluacion, progreso: 'PENDIENTE' }, { successCallback: () => { } }));
            }
        }
    }, [alumnoSelected?._id, idEvaluacion, dispatch, progresoLoaded, alumnoSelected?.rol, isProgresoEvaluacionesLoaded]);
    const { nombreEvaluacion, seccionId } = getLeccionById(idEvaluacion, evaluacionesData);

    const progresoSeccion = progresoSecciones?.filter(s => s.seccion == seccionId)[0];

    return (
        <>
            <div className="flex">
                <div className="sm:w-1/2 xl:w-1/3 bg-slate-500 rounded-t-lg">
                    <HeaderGraphicEval
                        title1={"EVALUACION"}
                    />
                    <SeparatorWithoutTextForDashboard color={"bg-red-300"} />
                </div>

                <p className="bg-gray-800 p-5 text-center rounded-t-lg text-2xl w-2/3 ml-1">
                    Evaluación:
                    <span className="text-red-300"> {nombreEvaluacion} </span>
                </p>
            </div>
            <div className="bg-slate-500 rounded-b-lg">
                <EvaluacionContent evalId={idEvaluacion} 
                    onCompleteEval={async (aprobada) => {
                        if (!progresoEvaluacion?._id) return;

                        try {
                            // Call thunk to update backend
                            await dispatch(updateProgresoEvaluacion(
                                {...progresoEvaluacion, progreso: aprobada? 'APROBADA': 'DESAPROBADA'}
                            ));

                            console.log("Evaluacion actualizada");
                            nav('/app/evaluacion/listado');
                        } catch (err) {
                            console.error("Error al marcar practica como completada", err);
                        }
                    }}
                />
            </div>
        </>
    );
};