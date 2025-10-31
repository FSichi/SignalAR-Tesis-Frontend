import { Button, Grid } from '@mui/material';
import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import './JuegoDeLaMemoria.css'
import { useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import dorso from './dorso.png';
import { inPlaceShuffle } from '../inPlaceShuffle';
import { SwalForResources } from '../../../utils/ToastSweetAlert';

export const JuegoDeLaMemoria = ({ data, onComplete, showGif }) => {

    const [tarjetas, setTarjetas] = useState([]);
    const [flipping, setFlipping] = useState(false);
    const cardWidth = 200;

    useEffect(() => {
        const newTarjetas = [];
        data.imagenes.forEach((imagen, index) => {
            newTarjetas.push({
                img: imagen,
                id: index,
                flipped: false,
                matched: false,
            });
            newTarjetas.push({
                img: imagen,
                id: index,
                flipped: false,
                matched: false,
            });
        })
        inPlaceShuffle(newTarjetas);
        setTarjetas(newTarjetas);
    }, []);

    const flipBack = () => {
        const notMatched = tarjetas.filter(t => t.flipped && !t.matched);
        notMatched[0].flipped = false;
        notMatched[1].flipped = false;
        notMatched[0].matched = false;
        notMatched[1].matched = false;
        setFlipping(false);
    }

    const handleClick = (tarjeta) => {
        console.log(tarjetas);
        if (!tarjeta.flipped && !flipping) {
            const paridad = tarjetas.filter(t => t.flipped).length % 2;
            if (paridad == 0) {
                tarjeta.flipped = true;
                showGif(tarjeta.id);
            } else {
                showGif(-1);
                const notMatched = tarjetas.filter(t => t.flipped && !t.matched)[0];
                tarjeta.flipped = true;
                if (notMatched.id == tarjeta.id) {
                    console.log(tarjeta);
                    console.log(notMatched)
                    notMatched.matched = true;
                    tarjeta.matched = true;
                } else {
                    setFlipping(true);
                    setTimeout(flipBack, 1000);
                }
            }
            setTarjetas([...tarjetas]);
        }
    }

    const juegoGanado = tarjetas.length > 0 && tarjetas.length == tarjetas.filter(t => t.matched).length

    if(juegoGanado){
        SwalForResources.fire({
            title: 'Juego terminado',
            text: 'Ganaste!',
            icon: 'success'
        });
    }

    return (
        <>
            <Grid container spacing={2}>
                {tarjetas.map((tarjeta, index) =>
                    <Grid item xs={3} onClick={() => { handleClick(tarjeta) }} key={index}>
                        <ReactCardFlip isFlipped={tarjeta.flipped} >
                            <img src={dorso} style={{ width: cardWidth, aspectRatio: 1, borderRadius: 15 }} />

                            <img src={tarjeta.img} style={{ width: cardWidth, aspectRatio: 1, opacity: tarjeta.matched?0.5:1 }} />
                        </ReactCardFlip>
                    </Grid>
                )}

            </Grid>
            {juegoGanado &&
                <div style={{
                    margin: 10,
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <button className='bg-orange-400 px-6 py-2 rounded-md text-md mt-7' onClick={() => {
                        onComplete();
                    }}>
                        Siguiente!
                    </button>
                </div>
            }
        </>

    )
}
