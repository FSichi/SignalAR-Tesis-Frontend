import { useEffect, useState } from "react"
import { SideBar } from "../../Lecciones/LectionComponents/SideBar"
import { recursos } from "../../../data/recursos"
import { EvaluacionesEjemplosData } from '../../../data/TemasEjemplos'
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { SwalForResources } from "../../../utils/ToastSweetAlert"

export const EvaluacionContent = ({ evalId, onCompleteEval }) => {

    console.log(evalId)

    const navigate = useNavigate();

    const [sidebarData, setSidebarData] = useState([]);
    const [contentData, setContentData] = useState([]);
    const [themeNumber, setThemeNumber] = useState(0);

    const [currentGif, setCurrentGif] = useState(-1);
    const [gifs, setGifs] = useState([]);

    const [finishState, setFinishState] = useState(false);

    const [cantidadErrores, setCantidadErrores] = useState(0);
    const [mostrarPerdioModal, setMostrarPerdioModal] = useState(false);
    const maxErrores = 5;

    useEffect(() => {
        //si vamos a guardar el progreso del alumno basta con setear este numero al ultimo ejercicio completado :)
        setThemeNumber(4);
    }, [evalId])

    useEffect(() => {
        let evalActual = EvaluacionesEjemplosData.filter(t => t.idEvaluacion == evalId)[0].contenidoPractico;
        setContentData(evalActual);
        setSidebarData(evalActual.map((c, index) => {
            let r = recursos.filter(recurso => recurso.id == c.idJuego)[0]
            return {
                tema: r.title,
                completado: themeNumber > index,
                enCurso: index == themeNumber,
            }
        }))
        setGifs(evalActual[themeNumber]?.gifs);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [themeNumber])

    useEffect(() => {
        if (mostrarPerdioModal) {
            Swal.fire({
                title: 'Has perdido :(',
                text: 'Alcanzaste el máximo de errores permitidos.',
                icon: 'error',
                background: '#1f2937',
                color: '#fff',
                allowOutsideClick: true,
                allowEscapeKey: true,
                showCloseButton: true,
                confirmButtonText: 'Aceptar',
                customClass: {
                    title: 'text-4xl text-red-500',
                    confirmButton: 'bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded'
                }
            }).then(() => {
                if (onCompleteEval) {
                    onCompleteEval(false);
                    setMostrarPerdioModal(false);
                }
            });
        }
    }, [mostrarPerdioModal]);

    const nextTopic = () => {
        if (themeNumber < contentData.length - 1) {
            setThemeNumber(prev => prev + 1)
        } else {
            SwalForResources.fire({
                title: 'Evaluacion completada',
                text: 'Completaste el contenido practico de esta evaluacion. Bien hecho!',
                icon: 'success'
            });
            setFinishState(true);
        }
    }

    const handleError = () => {
        console.log("ERROR AAAAA")
        if(cantidadErrores == 4)
            setMostrarPerdioModal(true);
        setCantidadErrores(cantidadErrores + 1);
    }

    const finishLesson = () => {
        if(onCompleteEval) {
            onCompleteEval(true);
        }
        let timerInterval;
        Swal.fire({
            title: "GENIAL!",
            html: "ALMACENANDO EL PROGRESO DEL ALUMNO",
            timer: 2000,
            timerProgressBar: true,
            background: '#1f2937',
            color: '#fff',
            customClass: {
                title: 'text-4xl text-orange-500',
                text: 'text-white text-3xl',
            },
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {

            Swal.fire({
                title: 'Evaluacion completada',
                background: '#1f2937',
                color: '#fff',
            
                text: 'Progreso guardado de la evaluacion actual. Bien hecho.',
                // text: 'PROGRESO DE LA EVALUACION ACTUAL ALMACENADO CORRECTAMENTE. BIEN HECHO.',
                icon: 'success',
                customClass: {
                    title: 'text-4xl text-orange-500',
                },
            }).then(() => {
                navigate('/app/dashboard', { replace: true });
            });

            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    }

    const Recurso = recursos[themeNumber]?.component

    return (
        <div className="mx-2 flex justify">
            <div className="w-1/5">
                <SideBar data={sidebarData} title="Juegos" />
            </div>
            {
                contentData.length !== 0 && Recurso &&
                <div className="w-3/5 ">
                    <div className="bg-slate-300 rounded-lg p-2 m-5 mr-3 border-4 border-gray-800 hTopicContainer" >
                        <div className="text-2xl" style={{ height: '100%' }}>
                            <Recurso
                                data={contentData[themeNumber]}
                                onComplete={() => {
                                    let currentSidebar = sidebarData[themeNumber];
                                    currentSidebar.completado = true
                                    setSidebarData([...sidebarData]);
                                    nextTopic();
                                    setCurrentGif(-1);
                                }}
                                evaluacion={true}
                                onError={handleError}
                                showGif={setCurrentGif}
                            />
                        </div>
                    </div>
                </div>
            }
            <div className="w-1/5 flex flex-col items-center justify-center gap-4">
                {currentGif != -1 && currentGif < gifs.length && (
                    <img src={gifs[currentGif]} />
                )}

                {
                    finishState &&
                    <button
                        onClick={finishLesson}
                        className="p-3 bg-cyan-500 rounded-md text-lg mx-auto hover:bg-emerald-500"
                    >
                        Finalizar Evaluacion
                    </button>
                }
                
                {
                    !finishState &&
                    <div
                        className="p-3 bg-cyan-500 rounded-md text-lg mx-auto hover:bg-emerald-500"
                    >
                        Errores: {cantidadErrores}/{maxErrores}
                    </div>
                }
            </div>

        </div>
    )
}
