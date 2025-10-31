import { useMemo } from "react";
import WheelComponent from "./WheelComponent"
import { Button, Grid } from "@mui/material";
import { useState } from "react";

export const Ruleta = ({ data, onComplete }) => {

    const colors = useMemo(() => ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', 'bdb2ff'], []);
    const segmentColors = useMemo(() => data.palabras.map((_, i) => colors[i % 7]), [])

    const [currentText, setCurrentText] = useState('');
    const [started, setStarted] = useState(false);
    const [cartaSeleccionada, setCartaSeleccionada] = useState('');

    const juegoTerminado = cartaSeleccionada != ''
    const juegoGanado = cartaSeleccionada == currentText;

    return (
        <Grid container>
            <Grid item xs={6}>
                <div style={{ color: "black" }}>
                    {!juegoTerminado ? (currentText == '' ? 'Gira la ruleta para empezar!' : 'Selecciona a ' + currentText) : (juegoGanado ? 'Ganaste!' : 'Perdiste!')}
                </div>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                    {data.imagenes.map((image, index) =>
                        <img
                            src={image}
                            style={{ width: 200, aspectRatio: 1, margin: 5 }}
                            onClick={() => {
                                if (!juegoTerminado)
                                    setCartaSeleccionada(data.palabras[index])
                            }} />
                    )}
                </div>
                {juegoTerminado && (
                    juegoGanado ?
                        <Button variant='contained' onClick={()=>onComplete()}>
                            Siguiente
                        </Button>
                        :
                        <Button variant='contained' onClick={()=>{
                            setCurrentText('');
                            setStarted(false)
                            setCartaSeleccionada('');
                        }}>
                            Reintentar
                        </Button>
                )}
            </Grid>
            <Grid
                item xs={6}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    color: 'black'
                }}
                className="xs-6">
                <WheelComponent
                    segColors={segmentColors}
                    segments={data.palabras}
                    primaryColor="#64748b"
                    contrastColor="black"
                    size={250}
                    onStart={() => {setStarted(true)}}
                    isOnlyOnce={false}
                    onFinished={(winner) => { setCurrentText(`${winner}`) }}
                    isReady={!started}
                    buttonText='Girar'
                />
            </Grid>


        </Grid>
    )
}
