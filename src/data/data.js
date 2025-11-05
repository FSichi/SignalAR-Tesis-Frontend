import abuela from '../assets/img/recursos/abuela.png'
import abuelo from '../assets/img/recursos/abuelo.png'
import hermanos from '../assets/img/recursos/hermanos.png'
import mamaImg from '../assets/img/recursos/mama.png'
import papaImg from '../assets/img/recursos/papa.png'

import mama from '../assets/img/gifs/mama.gif'
import hermanoGif from '../assets/img/gifs/hermana.gif'
import hermanaGif from '../assets/img/gifs/hermano.gif'
import papa from '../assets/img/gifs/papa.gif'
import abueloGif from '../assets/img/gifs/abuelo.gif'
import abuelaGif from '../assets/img/gifs/abuela.gif'

/* CONTENIDO */
export const seccionesData = [
    {
        id: 1,
        nombre: 'CLIMA',
        cantidadLecciones: 12,
        estado: "ACTIVO",
    },
]

export const leccionesData = [
    {
        id: '6907e51d2908af1a4a35f950',
        seccionId: '6908b79986774e0849179da3',
        nombre: 'Tipos de climas',
        estado: "ACTIVO",
    },

    {
        id: '6908aa2b608b9e84725403ee',
        seccionId: '6908b79986774e0849179da3',
        nombre: 'Tipos de climas',
        estado: "ACTIVO",
    },
]



export const evaluacionesData = [
    {
        id: 1,
        leccion: 1,
        nombreEvaluacion: 'Tipos de Clima',
        nombreSeccion: 'CLIMA',
        contenidoEvaluacion: [
            "1",
        ]
    }
]


export const contenidoTeorico = [
    {
        id: 1,
        img: "../assets/Icons/sun.png",
        gif: "alucard",
        tema: "Sol",
        body: [
            `<p class="text-gray-900">Hola Soy el <span class="text-violet-500"> Sol </span>. </p>`,
            `<p class="text-gray-900"> El <span class="text-violet-500  mt-2"> Sol </span> sale todos los días.</p>`
        ]
    },
    {
        id: 2,
        img: "../assets/Icons/sun.png",
        gif: "alucard",
        tema: "Lluvia",
        body: [
            `<p class="text-gray-900">Hola La <span class="text-violet-500"> Lluvia </span>. </p>`,
            `<p class="text-gray-900"> La <span class="text-violet-500  mt-2"> Lluvia </span> sale todos los días.</p>`
        ]
    },
]

