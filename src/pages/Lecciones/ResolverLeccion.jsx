import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderGraphic } from "../../components/Graphics/HeaderGraphic";
import { getLeccionById } from "../../helpers/getterOptionsForData";
import { leccionesData } from "../../data/lecciones";
import { PracticalContent } from "./LectionComponents/PracticalContent";
import { TheoreticalContent } from "./LectionComponents/TheoreticalContent";
import { SeparatorWithoutTextForDashboard } from "../../components/UI/Separator";
import { crearProgresoLeccion, updateProgresoLeccion, updateProgresoSeccion } from "../../redux/slices/progreso/thunks"
import { estadoLeccion } from "../../helpers/Enums";

export const ResolverLeccion = () => {
    const { idLeccion } = useParams();
    const [buttonSelected, setButtonSelected] = useState(true);
    const dispatch = useDispatch();

    const { progresoLecciones, isProgresoLeccionesLoaded, progresoSecciones } = useSelector((state) => state.progreso);
    const { alumnoSelected } = useSelector((state) => state.alumnos);

    // 🧩 Find this lección’s progreso
    const progresoLeccion = progresoLecciones?.find(
        (p) => p.leccion === idLeccion
    );

    // 🟢 Local state to prevent multiple dispatches
    const [progresoLoaded, setProgresoLoaded] = useState(false);

    // ✅ Fetch or create progreso if missing
    useEffect(() => {
        if (isProgresoLeccionesLoaded && !progresoLoaded && alumnoSelected?._id) {
            setProgresoLoaded(true);

            if (progresoLeccion) {
                console.log('Progreso encontrado');
            }
            else {
                console.log('Progreso no encontrado, creando...')
                dispatch(crearProgresoLeccion({ alumnoId: alumnoSelected?._id, leccionId: idLeccion, userRol: alumnoSelected?.rol }, { successCallback: () => { } }));
            }
        }
    }, [alumnoSelected?._id, idLeccion, dispatch, progresoLoaded, alumnoSelected?.rol, isProgresoLeccionesLoaded]);

    const theoryCompleted = progresoLeccion?.teoria ?? false;
    const { nombre, seccionId } = getLeccionById(idLeccion, leccionesData);

    // 🧩 Ensure practice button is disabled if theory not done
    useEffect(() => {
        if (!theoryCompleted && !buttonSelected) {
            setButtonSelected(true);
        }
    }, [theoryCompleted, buttonSelected]);

    const progresoSeccion = progresoSecciones?.filter(s => s.seccion == seccionId)[0];

    return (
        <>
            <div className="flex">
                <div className="sm:w-1/2 xl:w-1/3 bg-slate-500 rounded-t-lg">
                    <HeaderGraphic
                        buttonSelected={buttonSelected}
                        setButtonSelected={(val) => {
                            if (val === false && !theoryCompleted) return;
                            setButtonSelected(val);
                        }}
                        theoryState={theoryCompleted}
                        title1={"Contenido Teorico"}
                        title2={"Contenido Práctico"}
                    />
                    <SeparatorWithoutTextForDashboard color={"bg-red-300"} />
                </div>

                <p className="bg-gray-800 p-5 text-center rounded-t-lg text-2xl w-2/3 ml-1">
                    Lección:{" "}
                    <span className="text-red-300">&quot;{nombre}&quot;</span>
                </p>
            </div>

            {buttonSelected ? (
                <div className="bg-slate-500 rounded-b-lg hCustomContainer">
                    <TheoreticalContent 
                        lectionId={idLeccion}
                        onCompleteTheory={async () => {
                            if (!progresoLeccion?._id) return;

                            try {
                                // Call thunk to update backend
                                await dispatch(updateProgresoLeccion(
                                    {...progresoLeccion, teoria: true}
                                ));

                                // Optionally, update local state immediately
                                // You can also rely on Redux slice update
                                console.log("Teoría marcada como completada!");
                            } catch (err) {
                                console.error("Error al marcar teoría como completada", err);
                            }
                        }}
                    />
                </div>
            ) : (
                <div className="bg-slate-500 rounded-b-lg">
                    <PracticalContent lectionId={idLeccion} 
                        onCompletePractice={async () => {
                            if (!progresoLeccion?._id) return;

                            try {
                                // Si no estaba completada la leccion, actualizar el estado de la seccion para tener una leccion completada mas
                                if(progresoLeccion.progreso == estadoLeccion.PENDIENTE){
                                    await dispatch(updateProgresoSeccion(
                                        {...progresoSeccion, leccionesCompletadas: progresoSeccion.leccionesCompletadas + 1}
                                    ))
                                }

                                // Call thunk to update backend
                                await dispatch(updateProgresoLeccion(
                                    {...progresoLeccion, practica: true, progreso: estadoLeccion.COMPLETADO}
                                ));

                                // Optionally, update local state immediately
                                // You can also rely on Redux slice update
                                console.log("Practica marcada como completada!");
                            } catch (err) {
                                console.error("Error al marcar practica como completada", err);
                            }
                        }}
                    />
                </div>
            )}
        </>
    );
};