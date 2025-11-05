import { useEffect, useState } from "react"
import { SideBar } from "./SideBar"
import { recursos } from "../../../data/recursos"
import { TemasEjemplosData } from '../../../data/TemasEjemplos'
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { SwalForResources } from "../../../utils/ToastSweetAlert"

export const PracticalContent = ({ lectionId, onCompletePractice }) => {

    const navigate = useNavigate();

    const [sidebarData, setSidebarData] = useState([]);
    const [contentData, setContentData] = useState([]);
    const [themeNumber, setThemeNumber] = useState(0);

    const [currentGif, setCurrentGif] = useState(-1);
    const [gifs, setGifs] = useState([]);

    const [finishState, setFinishState] = useState(false);

    useEffect(() => {
        //si vamos a guardar el progreso del alumno basta con setear este numero al ultimo ejercicio completado :)
        setThemeNumber(0);
    }, [lectionId])

    useEffect(() => {
        let contenidoPracticoActual = TemasEjemplosData.filter(t => t.idLeccion == lectionId)[0].contenidoPractico;
        setContentData(contenidoPracticoActual);
        setSidebarData(contenidoPracticoActual.map((c, index) => {
            let r = recursos.filter(recurso => recurso.id == c.idJuego)[0]
            return {
                tema: r.title,
                completado: themeNumber > index,
                enCurso: index == themeNumber,
            }
        }))
        setGifs(contenidoPracticoActual[themeNumber]?.gifs);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [themeNumber])


    const nextTopic = () => {
        if (themeNumber < contentData.length - 1) {
            setThemeNumber(prev => prev + 1)
        } else {
            SwalForResources.fire({
                title: 'Leccion completada',
                text: 'Completaste el contenido practico de esta leccion. Bien hecho!',
                icon: 'success'
            });
            setFinishState(true);
        }
    }

    const finishLesson = () => {
        if(onCompletePractice) {
            onCompletePractice();
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
                title: 'Leccion completada',
                background: '#1f2937',
                color: '#fff',
            
                text: 'Progreso guardado de la leccion actual. Bien hecho.',
                // text: 'PROGRESO DE LA LECCION ACTUAL ALMACENADO CORRECTAMENTE. BIEN HECHO.',
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
                                showGif={setCurrentGif}
                            />
                        </div>
                    </div>
                </div>
            }
            <div className="w-1/5" style={{ display: 'flex', alignItems: 'center' }}>
                {currentGif != -1 && currentGif < gifs.length && (
                    <img src={gifs[currentGif]} />
                )}

                {
                    finishState &&
                    <button
                        onClick={finishLesson}
                        className="p-3 bg-cyan-500 rounded-md text-lg mx-auto hover:bg-emerald-500"
                    >
                        Finalizar Leccion
                    </button>
                }


            </div>

        </div>
    )
}
