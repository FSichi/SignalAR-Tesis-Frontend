import { Button, Grid } from '@mui/material';
import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import Swal from 'sweetalert2';
import { SwalForResources } from '../../../utils/ToastSweetAlert';

export const Ahorcadito = ({ data, onComplete, showGif }) => {

    const [fallos, setFallos] = useState(0);
    const [letrasAdividadas, setLetrasAdivinadas] = useState([]);
    const abecedario = useRef('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
    const palabraArray = data.palabras[0].split('');
    const intentosPermitidos = useRef(5);

    const juegoGanado = palabraArray.every(letra => letrasAdividadas.includes(letra));
    const juegoPerdido = fallos >= intentosPermitidos.current;
    const juegoTerminado = juegoGanado || juegoPerdido

    if (juegoGanado) {
        showGif(0);
    }

    if (juegoTerminado) {
        if (juegoGanado) {
            SwalForResources.fire({
                title: 'Juego terminado',
                text: 'Ganaste!',
                icon: 'success'
            });
        } else {
            SwalForResources.fire({
                title: 'Juego terminado',
                text: 'Perdiste, pero puedes intentarlo nuevamente',
                icon: 'error'
            });
        }
    }

    return (
        <Grid container justifyContent={"center"} color='black' sx={{ m: 2 }}>
            <Grid item className='mx-20 my-5'>
                {palabraArray.map(letra =>
                    letrasAdividadas.includes(letra) ? ` ${letra} ` : ' _ '
                ).join('')}
            </Grid>

            <Grid item xs={12}>
                <Grid container>
                    {abecedario.current.split('').map((letra, index) =>
                        <Grid container item xs={2} justifyContent='center' alignContent='center' key={index}>
                            <Button
                                disabled={juegoTerminado || letrasAdividadas.includes(letra)}
                                variant={"contained"}
                                sx={{ my: 1, py: 2 }}
                                onClick={() => {
                                    if (!letrasAdividadas.includes(letra) && !juegoTerminado) {
                                        setLetrasAdivinadas([...letrasAdividadas, letra])
                                        if (!palabraArray.includes(letra)) {
                                            setFallos(fallos + 1);
                                        }
                                    }
                                }}>
                                {letra}
                            </Button>
                        </Grid>

                    )}
                </Grid>

            </Grid>
            <Grid item justifyContent='center'>
                {letrasAdividadas.sort().map(letra =>
                    letra
                )}
            </Grid>
            <Grid item xs={12} justifyContent='center'>
                Fallos: {fallos}
            </Grid>
            {juegoTerminado &&
                <div className='-mt-6'>
                    <Grid item >
                        {juegoGanado &&
                            <button className='bg-orange-400 px-6 py-2 rounded-md text-md' onClick={() => {
                                onComplete();
                            }}>
                                Siguiente!
                            </button>
                        }
                        {juegoPerdido &&
                            <Button variant='contained' onClick={() => {
                                setFallos(0);
                                setLetrasAdivinadas([]);
                            }}>
                                Reintentar!
                            </Button>
                        }
                    </Grid>
                </div>

            }

        </Grid>
    )
}
