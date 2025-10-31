import { useMemo } from "react";
import { Button, Grid, Icon } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useInterval } from "../../../hooks/useInverval";
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import { inPlaceShuffle } from "../inPlaceShuffle";
import Swal from "sweetalert2";
import { SwalForResources } from "../../../utils/ToastSweetAlert";

export const BuscarCoincidencia = ({ data, onComplete, showGif }) => {
    //const juegoTerminado = cartaSeleccionada != ''

    const [cartasSeleccionadas, setCartasSeleccionadas] = useState([]);
    const imagenes = data.imagenes.filter(i => !cartasSeleccionadas.map(c => c.imagen).includes(i));
    const palabras = data.palabras.filter(p => !cartasSeleccionadas.map(c => c.palabra).includes(p));

    const [speed, setSpeed] = useState(0);
    const [position, setPosition] = useState(50);
    const [juegoEmpezado, setJuegoEmpezado] = useState(false);
    const [carruselParado, setCarruselParado] = useState(false);
    const [evitarJuego, setEvitarJuego] = useState(false);
    const cardLength = 250;
    const maxWidth = palabras.length * cardLength;
    const carrouselHeight = 250;
    const offset = -258;

    const [errores, setErrores] = useState(0);
    const [aciertos, setAciertos] = useState(0);
    const [perdido, setPerdido] = useState(false);

    const randomizer = useMemo(() => {
        const arr = palabras.map((_, i) => i)
        inPlaceShuffle(arr);
        return arr;
    }, [cartasSeleccionadas])

    useInterval(() => {
        setPosition(pos => (pos + speed) % maxWidth);
        if (speed > 0) {
            setSpeed(speed => Math.max(speed - 0.05, 0));
        }
    }, 20);

    useEffect(() => {
        if (speed == 0 && !carruselParado && juegoEmpezado) {
            setCarruselParado(true);
            const dif = Math.abs((position + offset) % cardLength - 125);
            if ((position + offset) % cardLength > 125) {
                showGif(selIndex);
                setPosition(position => position - dif)
            }
            else {
                setPosition(position => position + dif)
            }

        }
    }, [speed])

    const handleStart = () => {
        setJuegoEmpezado(true);
        setCarruselParado(false);
        setSpeed(Math.random() * 20 + 10);
    }

    const reset = () => {
        setSpeed(0);
        setPosition(50);
        setJuegoEmpezado(false);
        setCarruselParado(false);
        showGif(-1);
    }

    const seleccionarCarta = (i) => {
        setCartasSeleccionadas([...cartasSeleccionadas, { palabra: palabras[randomizer[i]], imagen: imagenes[randomizer[i]] }]);
        setAciertos(a => a + 1);
    }

    const handleClick = (i) => {
        if (speed == 0 && juegoEmpezado && carruselParado) {
            if (randomizer[i] == selIndex) {
                seleccionarCarta(i);
                SwalForResources.fire({
                    title: 'Correcto',
                    // text: 'Seleccionaste a ' + palabras[randomizer[i]],
                    icon: 'success'
                });
                
            } else {
                setErrores(e => e + 1);
                SwalForResources.fire({
                    title: 'Ups..Casi lo logras. Vuelve a intentarlo',
                    // text: 'Seleccionaste a ' + palabras[randomizer[i]],
                    icon: 'error'
                });
            }
        }
        reset();
    }

    const selIndex = ((palabras.length - (Math.floor((position + offset) / cardLength))) % palabras.length + palabras.length) % palabras.length;

    useEffect(() => {
        if (errores >= 3) {
            handlePerder();
        }
        if (aciertos >= 3) {
            handleGanar();
        }
    }, [errores, aciertos])

    function handlePerder() {
        SwalForResources.fire({
            title: 'Juego terminado',
            text: 'Perdiste, pero puedes intentarlo nuevamente',
            icon: 'error'
        });
        setPerdido(true);
    }

    function hardReset() {
        setPerdido(false);
        setAciertos(0);
        setErrores(0);
        setCartasSeleccionadas([]);
        reset();
    }

    function handleGanar() {
        SwalForResources.fire({
            title: 'Juego terminado',
            text: 'Felicidades, Ganaste!',
            icon: 'success'
        });
        onComplete();
        hardReset();
        setEvitarJuego(true);
    }

    useEffect(() => console.log(cartasSeleccionadas), [cartasSeleccionadas]);

    return (
        <div style={{ color: 'black' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>
                    Seleccione la palabra correspondiente!
                </p>
                <p>
                    Aciertos: {aciertos}/3 -- Errores: {errores}/3
                </p>
            </div>
            <div style={{ width: '100%', overflow: 'hidden', position: 'relative', height: carrouselHeight, marginTop: 50 }}>
                {imagenes.map((i, index) =>
                    <img key={index} style={{
                        position: 'absolute',
                        height: carrouselHeight,
                        transform: `translate(${((position + index * cardLength) % maxWidth - cardLength)}px)`
                    }} src={i} />
                )}
            </div>
            <div>
                <Icon fontSize="large" style={{ marginLeft: 200 }}>
                    <ArrowUpward />
                </Icon>
            </div>

            <></>

            {perdido ? (
                <Button onClick={hardReset} variant="contained">
                    Volver a intentar!
                </Button>
            ) : (
                juegoEmpezado ?
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {palabras.map((_, index) =>
                            <button className='bg-cyan-400 px-6 py-2 rounded-md text-md mt-4'onClick={() => handleClick(index)} key={index}>
                                {palabras[randomizer[index]]}
                            </button>
                        )}
                    </div>
                    :
                    !evitarJuego &&
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className='bg-orange-400 px-6 py-2 rounded-md text-md mt-7' onClick={handleStart}>
                            Comenzar
                        </button>
                    </div>

            )
            }
        </div>
    )
}
