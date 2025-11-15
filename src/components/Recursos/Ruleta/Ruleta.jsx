import { useEffect, useMemo } from "react";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import './Ruleta.css';
import { useRef } from "react";
import { useInterval } from "../../../hooks/useInverval";
import { SwalForResources } from "../../../utils/ToastSweetAlert";

export const Ruleta = ({ data, onComplete, showGif, onError, evaluacion }) => {

    const [cartasSeleccionadas, setCartasSeleccionadas] = useState([]);
    const imagenes = data.imagenes.filter(i => !cartasSeleccionadas.map(c => c.imagen).includes(i));
    const palabras = data.palabras.filter(p => !cartasSeleccionadas.map(c => c.palabra).includes(p));
    const colors = useMemo(() => ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffadad', '#ffadad'], []);
    const segmentColors = useMemo(() => palabras.map((_, i) => colors[i % 7]), [cartasSeleccionadas])

    const [errores, setErrores] = useState(0);
    const [aciertos, setAciertos] = useState(0);

    //resetear estos {
    const [speed, setSpeed] = useState(0);
    const [position, setPosition] = useState(45 - 180 / imagenes.length);
    const [juegoEmpezado, setJuegoEmpezado] = useState(false);
    const [ruletaParada, setRuletaParada] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    //}

    const ruleta = useRef();

    const currentText = palabras[selectedIndex];

    const juegoTerminado = aciertos >= 3 || errores >= 3;
    const juegoGanado = aciertos >= 3 && errores < 3;

    const x = useMemo(() => (1 - Math.tan(Math.PI * (1 - 4 / imagenes.length) / 4)) * 100, [palabras]);

    function logState (){
        console.log({
            cartasSeleccionadas,
            imagenes,
            palabras,
            colors,
            segmentColors,
            errores,
            aciertos,
            speed,
            position,
            juegoEmpezado,
            ruletaParada,
            selectedIndex,
            juegoTerminado,
            juegoGanado,
            x
        })
    }

    useInterval(() => {
        setPosition(pos => (pos + speed) % 360);
        if (speed > 0) {
            setSpeed(speed => Math.max(speed - 0.05, 0));
        }
    }, 20);

    useEffect(() => {
        ruleta.current.style.transform = `rotate(${Math.round(position)}deg)`
        if (speed == 0 && !ruletaParada && juegoEmpezado) {
            const newIndex = (Math.floor((360 - position + 45 - 180 / imagenes.length) * imagenes.length / 360) + 1) % imagenes.length
            setSelectedIndex(newIndex);
            showGif(newIndex)
            setRuletaParada(true);
            SwalForResources.fire({
                title: 'Selecciona la imagen correcta!',
                text: 'Selecciona a ' + palabras[newIndex],
                width: 600,
            });
        }
    }, [speed])

    const handleSpin = () => {
        if (!juegoEmpezado && ruletaParada) {
            setJuegoEmpezado(true);
            setRuletaParada(false);
            setSpeed(Math.random() * 15 + 3);
        }
    }

    const reset = () => {
        setSpeed(0.000001);
        setPosition(45 - 180 / imagenes.length);
        setJuegoEmpezado(false);
        setRuletaParada(true);
        setSelectedIndex(0);
    }

    const seleccionar = (carta) => {
        if (carta.palabra != currentText) {
            setErrores(e => e + 1);
            SwalForResources.fire({
                title: 'Fallo',
                // text: 'Seleccionaste a ' + carta.palabra,
                icon: 'error'
            });
        }
        else {
            setAciertos(a => a + 1)
            if(aciertos < 2){
                let newCartas = [...cartasSeleccionadas, carta]
                setCartasSeleccionadas(newCartas);
            }
            SwalForResources.fire({
                title: 'Correcto',
                icon: 'success',
            });
        }
        reset();
    }

    const onFail = () => {
        reset();
        setErrores(0);
        setAciertos(0);
        setCartasSeleccionadas([]);
        if(onError)
            onError();
    }

    if(juegoTerminado){
        if(juegoGanado){
            SwalForResources.fire({
                title: 'Juego terminado',
                text: 'Ganaste!',
                icon: 'success'
            });
        }else{
            SwalForResources.fire({
                title: 'Juego terminado',
                text: 'Perdiste, pero puedes intentarlo nuevamente',
                icon: 'error'
            });
        }
    }

    return (
        <Grid container sx={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Grid container item xs={12} lg={6} sx={{ alignContent: 'center', justifyContent: 'center' }}>
                <div className="containerr">

                    <div className="spinBtn" onClick={handleSpin}>Spin</div>

                    <div className="wheel" ref={ruleta}>

                        {palabras.map((palabra, index) => {
                            return (
                                <div className="number" key={index} style={
                                    {
                                        position: 'absolute',
                                        width: "50%",
                                        height: "50%",
                                        background: segmentColors[index],
                                        transformOrigin: 'bottom right',
                                        transform: `rotate(calc(${360 / imagenes.length}deg * ${index}))`,
                                        clipPath: `polygon(0 0,${x}% 0, 100% 100%,0 ${x}%)`,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        userSelect: 'none',
                                        cursor: 'pointer',
                                    }
                                }>
                                    <span>{palabra}</span>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </Grid>
            <Grid item xs={12} lg={6}>
                <div style={{ color: "black", display: 'inline-block'}}>
                    Errores: {errores} / 3
                </div>
                <div style={{ color: "black", display: 'inline-block', margin: '0 20px'}}>
                    Aciertos: {aciertos} / 3
                </div>
                <div style={{ color: "black" }}>
                    {!juegoTerminado ? (!juegoEmpezado || !ruletaParada ? 'Gira la ruleta para empezar!' : 'Selecciona a ' + currentText) : (juegoGanado ? 'Ganaste!' : 'Perdiste!')}
                </div>
                <Grid container spacing={1}>
                    {imagenes.map((image, index) =>
                        <Grid item xs={3} lg={4} key={index}>
                            <img
                                src={image}
                                style={{ aspectRatio: 1 }}
                                onClick={() => {
                                    logState()
                                    if (!juegoTerminado && juegoEmpezado && ruletaParada)
                                        seleccionar({ palabra: palabras[index], imagen: imagenes[index] });
                                }} />
                        </Grid>
                    )}
                </Grid>
                
                <div style={{display: 'flex', justifyContent: 'center', margin: 30}}>
                    {juegoTerminado && (
                        juegoGanado ?
                            <button className='bg-orange-400 px-6 py-2 rounded-md text-md mt-7' onClick={() =>
                                onComplete()
                            }>
                                Siguiente
                            </button>
                            :
                            <Button variant='contained' onClick={() => {
                                onFail();
                            }}>
                                Reintentar
                            </Button>
                    )}
                </div>
                
            </Grid>
        </Grid>

    )
}
