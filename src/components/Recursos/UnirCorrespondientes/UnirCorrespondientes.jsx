import { Button, Grid } from "@mui/material"
import { DndContext } from "@dnd-kit/core"
import { Droppable } from "./Droppable"
import { Draggable } from "./Draggable"
import { useState } from "react"
import { useMemo } from "react"
import { inPlaceShuffle } from "../inPlaceShuffle"
import Swal from "sweetalert2"

export const UnirCorrespondientes = ({ data, onComplete, showGif, onError, evaluacion }) => {
    const [matchedIndex, setMatchedIndex] = useState([]);
    const [lastError, setLastError] = useState(-1);

    const handleDrop = (dropInformation) => {
        showGif(-1);
        const activeId = Number.parseInt(dropInformation.active.id.substring(1))
        if (dropInformation.over) {
            const overId = Number.parseInt(dropInformation.over.id.substring(1))
            if (activeId == overId) {
                setMatchedIndex([...matchedIndex, activeId]);
                setLastError(-1);
            }
            else {
                setLastError(overId);
                if(onError)
                    onError();
            }
        }
    }

    const randomizer = useMemo(() => {
        const arr = data.palabras.map((_, i) => i)
        inPlaceShuffle(arr);
        return arr;
    }, [])

    const juegoTerminado = matchedIndex.length == data.palabras.length;

    if(juegoTerminado){
        Swal.fire({
            title: 'Juego terminado',
            text: 'Ganaste!',
            icon: 'success',
            didClose: onComplete
        })
    }

    return (
        <DndContext onDragEnd={handleDrop}>
            <Grid sx={{ color: 'black', height: '100%' }} container>
                <Grid item xs={12}>{!juegoTerminado ? 'Une las imagenes con sus palabras correspondientes!' : 'Ganaste!'}</Grid>
                <Grid item xs={6} sx={{ display: 'flex', height: 450, alignContent: 'space-evenly', alignItems: 'space-evenly', flexWrap: 'wrap' }}>
                    {data.palabras.map((p, index) =>
                        <Droppable key={index} id={index} divStyle={{ backgroundColor: matchedIndex.includes(index) ? '#caffbf' : (index == lastError ? '#ffadad' : 'lightblue'), height: 100, alignContent: 'center'}}>
                            <div style={{
                                paddingLeft: 20,
                                paddingRight: 20,
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%',
                                alignItems: 'center'
                            }}>
                                <p>{p}</p>
                                {matchedIndex.includes(index) ? 
                                    <img style={{ display: "inline-flex", width: 70, aspectRatio: 1, margin: 10, justifySelf: 'flex-end' }} src={data.imagenes[index]} /> 
                                    : 
                                    <Button onClick={()=>showGif(index)} variant="contained">
                                        Mostrar Gif
                                    </Button>
                                }
                            </div>
                        </Droppable>
                    )}
                </Grid>
                <Grid
                    sx={{ display: !juegoTerminado ? 'flex' : undefined, flexWrap: 'wrap' }}
                    item xs={6}>
                    {!juegoTerminado &&
                        randomizer.map((i) => {
                            const img = data.imagenes.filter((_, index) => index == i)[0];
                            return (
                                !matchedIndex.includes(i) &&
                                <Draggable key={i} id={i} matchedIndex={matchedIndex}>
                                    <img style={{ width: 200, aspectRatio: 1, margin: 10 }} src={img} />
                                </Draggable>
                            )
                        })
                    }
                    
                </Grid>
            </Grid>


        </DndContext>
    )
}
