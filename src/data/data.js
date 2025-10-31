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

/* PROGRESOS */

export const progresoAlumno = {
    id: 1,
    alumno: 1,
    secciones: [
        "",
    ],
    lecciones: [
        "1",
        "2",
    ],
    evaluaciones: [
        "",
    ]
}

export const progresoLeccion = {
    id: 1,
    alumno: 1,
    leccion: 1,
    progreso: "PENDIENTE",
    teoria: true,
    practica: false,
    attemptDate: "2021-09-01T00:00:00.000Z",
}

export const progresoEvaluacion = {
    id: 1,
    alumno: 1,
    evaluacion: 1,
    progreso: "PENDIENTE",
    completionDate: "2021-09-01T00:00:00.000Z",
}

export const progresoSeccion = {
    id: 1,
    alumno: 1,
    seccion: 1,
    progreso: "PENDIENTE",
    leccionesCompletadas: 2,
    completionDate: "2021-09-01T00:00:00.000Z",
}


/* CONTENIDO */

export const seccionesData = [
    {
        id: 1,
        nombre: 'CLIMA',
        //area: areasSecciones.CNATURALES,
        cantidadLecciones: 12,
        estado: "ACTIVO",
    },
]

export const leccionesData = [
    {
        id: 3,
        seccionId: 1,
        nombre: 'Tipos de climas',
        //dificultad: dificultad.BAJA,
        estado: "ACTIVO",
        cantidadRecursos: 5,
        contenidoLeccion: {
            teoria: [
                "1",
                "2",
            ],
            practica: [
                1,
                2,
                3,
                4,
                5,
            ]
        }
    },
]

export const evaluacionesData = [
    {
        id: 1,
        leccion: 1,
        nombreEvaluacion: 'Tipos de Clima',
        nombreSeccion: 'CLIMA',
        //area: areasSecciones.CNATURALES,
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

export const contenidoPractico = [
    {
        //Ahorcadito
        id: 1,
        idJuego: 1,
        palabras: [
            'HERMANO'
        ],
        imagenes: [],
        gifs: [
            hermanoGif
        ]
    },
    {
        //Juego De La Memoria
        id: 2,
        idJuego: 2,
        palabras: [],
        gifs: [
            abueloGif, 
            abuelaGif, 
            mama, 
            papa
        ],
        imagenes: [
            abuelo,
            abuela,
            mamaImg,
            papaImg
        ]
    },
    {
        //Ruleta
        id: 3,
        idJuego: 3,
        palabras: [
            'Abuelo', 
            'Abuela', 
            'Mama', 
            'Papa',
            'Hermanos',
        ],
        imagenes: [
            abuelo,
            abuela,
            mamaImg,
            papaImg,
            hermanos
        ],
        gifs: [
            abueloGif, 
            abuelaGif, 
            mama, 
            papa,
            hermanoGif, 
        ]
    },
    {
        //Unir Correspondientes
        id: 4,
        idJuego: 4,
        palabras: [
            'Abuelo', 
            'Abuela', 
            'Mama', 
            'Papa',
        ],
        imagenes: [
            abuelo,
            abuela,
            mamaImg,
            papaImg,
        ],
        gifs: [
            abueloGif, 
            abuelaGif, 
            mama, 
            papa,
        ]
    },
    {
        //Buscar Coincidencias
        id: 5,
        idJuego: 5,
        palabras: [
            'Abuelo', 
            'Abuela', 
            'Mama', 
            'Papa',
            'Hermanos',
        ],
        imagenes: [
            abuelo,
            abuela,
            mamaImg,
            papaImg,
            hermanos
        ],
        gifs: [
            abueloGif, 
            abuelaGif, 
            mama, 
            papa,
            hermanoGif, 
        ],
    },
]

