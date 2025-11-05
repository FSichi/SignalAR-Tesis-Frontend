import azusa from '../assets/img/azusa.png'
import seedbornmuse from '../assets/img/seedbornmuse.png'
import manacrypt from '../assets/img/manacrypt.png'
import fellwarstone from '../assets/img/fellwarstone.png'
import ornithopter from '../assets/img/ornithopter.png'
import omnath from '../assets/img/omnath.png'
import alucard from '../assets/img/alucard.gif'

import mamaGif from '../assets/img/gifs/mama.gif'
import papaGif from '../assets/img/gifs/papa.gif'
import abuelaGif from '../assets/img/gifs/abuela.gif'
import abueloGif from '../assets/img/gifs/abuelo.gif'
import hermanaGif from '../assets/img/gifs/hermano.gif'
import hermanoGif from '../assets/img/gifs/hermana.gif'

import mamaImg from '../assets/img/recursos/mama.png'
import papaImg from '../assets/img/recursos/papa.png'
import abuelaImg from '../assets/img/recursos/abuela.png'
import abueloImg from '../assets/img/recursos/abuelo.png'
import hermanaImg from '../assets/img/recursos/hermanos.png'
import hermanoImg from '../assets/img/recursos/hermanos.png'

export const TemasEjemplosData = [
    //------------------------------------------LECCION INTEGRANTES DE MI FAMILIA------------------------------------------------
    {
        id: 1,
        idLeccion: '6907e51d2908af1a4a35f950',
        contenidoTeorico: [
            {
                id: 1,
                tema: 'Mama',
                completado: false,
                enCurso: true,
                img: mamaImg,
                gif: mamaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> me ama. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> pone la mesa. </p>
                            <p class="text-gray-900 p-3">La <span class="text-cyan-500 font-bold"> MAMA </span> de Malena toma jugo. </p>
                            <p class="text-gray-900 p-3">Me gusta cuando mi <span class="text-cyan-500 font-bold"> MAMA </span> me abraza. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> cocina rico. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> canta. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> juega conmigo. </p>
                        `
                    },
                ]
            },
            {
                id: 2,
                tema: 'Papa',
                completado: false,
                enCurso: false,
                img: papaImg,
                gif: papaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> me ama. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> trabaja mucho. </p>
                            <p class="text-gray-900 p-3">El <span class="text-cyan-500 font-bold"> PAPA </span> de Martin es alto. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> es un superheroe. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> toma mate con mi mama. </p>
                            <p class="text-gray-900 p-3">Mañana veremos un partido de futbol con mi <span class="text-cyan-500 font-bold"> PAPA </span>. </p>
                        `
                    },
                ]
            },
            {
                id: 3,
                tema: 'Hermano',
                completado: false,
                enCurso: false,
                img: hermanoImg,
                gif: hermanoGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> y yo nos divertimos mucho. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> juega al futbol. </p>
                            <p class="text-gray-900 p-3">Tengo un <span class="text-cyan-500 font-bold"> HERMANO </span> mayor. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> pequeño se llama Carlos. </p>
                            <p class="text-gray-900 p-3">A mi <span class="text-cyan-500 font-bold"> HERMANO </span> le gusta leerme cuentos. </p>
                            <p class="text-gray-900 p-3">Hoy voy al parque con mi <span class="text-cyan-500 font-bold"> HERMANO </span>. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> y yo compartimos juguetes. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> mayor se llama Luis. </p>
                        `
                    },
                ]
            },
            {
                id: 4,
                tema: 'Hermana',
                enCurso: false,
                completado: false,
                img: hermanaImg,
                gif: hermanaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> y yo nos divertimos mucho. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> juega al voley. </p>
                            <p class="text-gray-900 p-3">Tengo una <span class="text-cyan-500 font-bold"> HERMANA </span> menor. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> pequeña se llama Maria. </p>
                            <p class="text-gray-900 p-3">A mi <span class="text-cyan-500 font-bold"> HERMANA </span> le gusta dibujar. </p>
                            <p class="text-gray-900 p-3">Hoy voy al parque con mi <span class="text-cyan-500 font-bold"> HERMANA </span>. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> y yo compartimos juguetes. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> mayor se llama Antonela. </p>
                        `
                    },
                ]
            },
            {
                id: 5,
                tema: 'Abuelo',
                completado: false,
                enCurso: false,
                img: abueloImg,
                gif: abueloGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELO </span> me enseña a pescar. </p>
                            <p class="text-gray-900 p-3">El <span class="text-cyan-500 font-bold"> ABUELO </span> de Ana es muy inteligente. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELO </span> me lleva al parque en bicicleta. </p>
                            <p class="text-gray-900 p-3">Los sabados, visito a mi <span class="text-cyan-500 font-bold"> ABUELO </span>. </p>
                            <p class="text-gray-900 p-3">A mi <span class="text-cyan-500 font-bold"> ABUELO </span> le gusta contar chistes. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELO </span> me da caramelos. </p>
                            <p class="text-gray-900 p-3">El <span class="text-cyan-500 font-bold"> ABUELO </span> de Juan tiene un jardin hermoso. </p>
                        `
                    },
                ]
            },
            {
                id: 6,
                tema: 'Abuela',
                completado: false,
                enCurso: false,
                img: abuelaImg,
                gif: abuelaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span> me cuenta historias. </p>
                            <p class="text-gray-900 p-3">La <span class="text-cyan-500 font-bold"> ABUELA </span> de Maria cocina delicioso. </p>
                            <p class="text-gray-900 p-3">Hoy ire a la casa de mi <span class="text-cyan-500 font-bold"> ABUELA </span>. </p>
                            <p class="text-gray-900 p-3">Los domingos, visito a mi <span class="text-cyan-500 font-bold"> ABUELA </span>. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span>  y yo paseamos por el parque. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span> siempre me sonrie. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span> me regala caramelos. </p>
                        `
                    },
                ]
            },

        ],
        contenidoPractico: [
            {
                //Ahorcadito
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
                idJuego: 2,
                palabras: [],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg
                ]
            },
            {
                //Ruleta
                idJuego: 3,
                palabras: [
                    'Abuelo',
                    'Abuela',
                    'Mama',
                    'Papa',
                    'Hermanos',
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg,
                    hermanoImg
                ],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif,
                    hermanoGif,
                ]
            },
            {
                //Unir Correspondientes
                idJuego: 4,
                palabras: [
                    'Abuelo',
                    'Abuela',
                    'Mama',
                    'Papa',
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg,
                ],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif,
                ]
            },
            {
                //Buscar Coincidencias
                idJuego: 5,
                palabras: [
                    'Abuelo',
                    'Abuela',
                    'Mama',
                    'Papa',
                    'Hermanos',
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg,
                    hermanoImg
                ],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif,
                    hermanoGif,
                ],
            },
        ]
    },
    //------------------------------------------LECCION INTRODUCCION FAMILIA------------------------------------------------
    {
        id: 1,
        idLeccion: '6908aa2b608b9e84725403ee',
        contenidoTeorico: [
            {
                id: 1,
                tema: 'Mama',
                completado: false,
                enCurso: true,
                img: mamaImg,
                gif: mamaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> me ama. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> pone la mesa. </p>
                            <p class="text-gray-900 p-3">La <span class="text-cyan-500 font-bold"> MAMA </span> de Malena toma jugo. </p>
                            <p class="text-gray-900 p-3">Me gusta cuando mi <span class="text-cyan-500 font-bold"> MAMA </span> me abraza. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> cocina rico. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> canta. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> juega conmigo. </p>
                        `
                    },
                ]
            },
            {
                id: 2,
                tema: 'Papa',
                completado: false,
                enCurso: false,
                img: papaImg,
                gif: papaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> me ama. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> trabaja mucho. </p>
                            <p class="text-gray-900 p-3">El <span class="text-cyan-500 font-bold"> PAPA </span> de Martin es alto. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> es un superheroe. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> toma mate con mi mama. </p>
                            <p class="text-gray-900 p-3">Mañana veremos un partido de futbol con mi <span class="text-cyan-500 font-bold"> PAPA </span>. </p>
                        `
                    },
                ]
            },
            {
                id: 3,
                tema: 'Hermano',
                completado: false,
                enCurso: false,
                img: hermanoImg,
                gif: hermanoGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> y yo nos divertimos mucho. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> juega al futbol. </p>
                            <p class="text-gray-900 p-3">Tengo un <span class="text-cyan-500 font-bold"> HERMANO </span> mayor. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> pequeño se llama Carlos. </p>
                            <p class="text-gray-900 p-3">A mi <span class="text-cyan-500 font-bold"> HERMANO </span> le gusta leerme cuentos. </p>
                            <p class="text-gray-900 p-3">Hoy voy al parque con mi <span class="text-cyan-500 font-bold"> HERMANO </span>. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> y yo compartimos juguetes. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> mayor se llama Luis. </p>
                        `
                    },
                ]
            },
            {
                id: 4,
                tema: 'Hermana',
                enCurso: false,
                completado: false,
                img: hermanaImg,
                gif: hermanaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> y yo nos divertimos mucho. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> juega al voley. </p>
                            <p class="text-gray-900 p-3">Tengo una <span class="text-cyan-500 font-bold"> HERMANA </span> menor. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> pequeña se llama Maria. </p>
                            <p class="text-gray-900 p-3">A mi <span class="text-cyan-500 font-bold"> HERMANA </span> le gusta dibujar. </p>
                            <p class="text-gray-900 p-3">Hoy voy al parque con mi <span class="text-cyan-500 font-bold"> HERMANA </span>. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> y yo compartimos juguetes. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> mayor se llama Antonela. </p>
                        `
                    },
                ]
            },
            {
                id: 5,
                tema: 'Abuelo',
                completado: false,
                enCurso: false,
                img: abueloImg,
                gif: abueloGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELO </span> me enseña a pescar. </p>
                            <p class="text-gray-900 p-3">El <span class="text-cyan-500 font-bold"> ABUELO </span> de Ana es muy inteligente. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELO </span> me lleva al parque en bicicleta. </p>
                            <p class="text-gray-900 p-3">Los sabados, visito a mi <span class="text-cyan-500 font-bold"> ABUELO </span>. </p>
                            <p class="text-gray-900 p-3">A mi <span class="text-cyan-500 font-bold"> ABUELO </span> le gusta contar chistes. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELO </span> me da caramelos. </p>
                            <p class="text-gray-900 p-3">El <span class="text-cyan-500 font-bold"> ABUELO </span> de Juan tiene un jardin hermoso. </p>
                        `
                    },
                ]
            },
            {
                id: 6,
                tema: 'Abuela',
                completado: false,
                enCurso: false,
                img: abuelaImg,
                gif: abuelaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span> me cuenta historias. </p>
                            <p class="text-gray-900 p-3">La <span class="text-cyan-500 font-bold"> ABUELA </span> de Maria cocina delicioso. </p>
                            <p class="text-gray-900 p-3">Hoy ire a la casa de mi <span class="text-cyan-500 font-bold"> ABUELA </span>. </p>
                            <p class="text-gray-900 p-3">Los domingos, visito a mi <span class="text-cyan-500 font-bold"> ABUELA </span>. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span>  y yo paseamos por el parque. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span> siempre me sonrie. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span> me regala caramelos. </p>
                        `
                    },
                ]
            },

        ],
        contenidoPractico: [
            {
                //Ahorcadito
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
                idJuego: 2,
                palabras: [],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg
                ]
            },
            {
                //Ruleta
                idJuego: 3,
                palabras: [
                    'Abuelo',
                    'Abuela',
                    'Mama',
                    'Papa',
                    'Hermanos',
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg,
                    hermanoImg
                ],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif,
                    hermanoGif,
                ]
            },
            {
                //Unir Correspondientes
                idJuego: 4,
                palabras: [
                    'Abuelo',
                    'Abuela',
                    'Mama',
                    'Papa',
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg,
                ],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif,
                ]
            },
            {
                //Buscar Coincidencias
                idJuego: 5,
                palabras: [
                    'Abuelo',
                    'Abuela',
                    'Mama',
                    'Papa',
                    'Hermanos',
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg,
                    hermanoImg
                ],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif,
                    hermanoGif,
                ],
            },
        ]
    },

    //------------------------------------------LECCION INTRODUCCION CLIMA------------------------------------------------
    {
        id: 1,
        idLeccion: '6908aa33b80a58d246f963c9',
        contenidoTeorico: [
            {
                id: 1,
                tema: 'Mama',
                completado: false,
                enCurso: true,
                img: mamaImg,
                gif: mamaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> me ama. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> pone la mesa. </p>
                            <p class="text-gray-900 p-3">La <span class="text-cyan-500 font-bold"> MAMA </span> de Malena toma jugo. </p>
                            <p class="text-gray-900 p-3">Me gusta cuando mi <span class="text-cyan-500 font-bold"> MAMA </span> me abraza. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> cocina rico. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> canta. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> juega conmigo. </p>
                        `
                    },
                ]
            },
            {
                id: 2,
                tema: 'Papa',
                completado: false,
                enCurso: false,
                img: papaImg,
                gif: papaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> me ama. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> trabaja mucho. </p>
                            <p class="text-gray-900 p-3">El <span class="text-cyan-500 font-bold"> PAPA </span> de Martin es alto. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> es un superheroe. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> toma mate con mi mama. </p>
                            <p class="text-gray-900 p-3">Mañana veremos un partido de futbol con mi <span class="text-cyan-500 font-bold"> PAPA </span>. </p>
                        `
                    },
                ]
            },
            {
                id: 3,
                tema: 'Hermano',
                completado: false,
                enCurso: false,
                img: hermanoImg,
                gif: hermanoGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> y yo nos divertimos mucho. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> juega al futbol. </p>
                            <p class="text-gray-900 p-3">Tengo un <span class="text-cyan-500 font-bold"> HERMANO </span> mayor. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> pequeño se llama Carlos. </p>
                            <p class="text-gray-900 p-3">A mi <span class="text-cyan-500 font-bold"> HERMANO </span> le gusta leerme cuentos. </p>
                            <p class="text-gray-900 p-3">Hoy voy al parque con mi <span class="text-cyan-500 font-bold"> HERMANO </span>. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> y yo compartimos juguetes. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> mayor se llama Luis. </p>
                        `
                    },
                ]
            },
            {
                id: 4,
                tema: 'Hermana',
                enCurso: false,
                completado: false,
                img: hermanaImg,
                gif: hermanaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> y yo nos divertimos mucho. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> juega al voley. </p>
                            <p class="text-gray-900 p-3">Tengo una <span class="text-cyan-500 font-bold"> HERMANA </span> menor. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> pequeña se llama Maria. </p>
                            <p class="text-gray-900 p-3">A mi <span class="text-cyan-500 font-bold"> HERMANA </span> le gusta dibujar. </p>
                            <p class="text-gray-900 p-3">Hoy voy al parque con mi <span class="text-cyan-500 font-bold"> HERMANA </span>. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> y yo compartimos juguetes. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> mayor se llama Antonela. </p>
                        `
                    },
                ]
            },
            {
                id: 5,
                tema: 'Abuelo',
                completado: false,
                enCurso: false,
                img: abueloImg,
                gif: abueloGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELO </span> me enseña a pescar. </p>
                            <p class="text-gray-900 p-3">El <span class="text-cyan-500 font-bold"> ABUELO </span> de Ana es muy inteligente. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELO </span> me lleva al parque en bicicleta. </p>
                            <p class="text-gray-900 p-3">Los sabados, visito a mi <span class="text-cyan-500 font-bold"> ABUELO </span>. </p>
                            <p class="text-gray-900 p-3">A mi <span class="text-cyan-500 font-bold"> ABUELO </span> le gusta contar chistes. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELO </span> me da caramelos. </p>
                            <p class="text-gray-900 p-3">El <span class="text-cyan-500 font-bold"> ABUELO </span> de Juan tiene un jardin hermoso. </p>
                        `
                    },
                ]
            },
            {
                id: 6,
                tema: 'Abuela',
                completado: false,
                enCurso: false,
                img: abuelaImg,
                gif: abuelaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span> me cuenta historias. </p>
                            <p class="text-gray-900 p-3">La <span class="text-cyan-500 font-bold"> ABUELA </span> de Maria cocina delicioso. </p>
                            <p class="text-gray-900 p-3">Hoy ire a la casa de mi <span class="text-cyan-500 font-bold"> ABUELA </span>. </p>
                            <p class="text-gray-900 p-3">Los domingos, visito a mi <span class="text-cyan-500 font-bold"> ABUELA </span>. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span>  y yo paseamos por el parque. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span> siempre me sonrie. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span> me regala caramelos. </p>
                        `
                    },
                ]
            },

        ],
        contenidoPractico: [
            {
                //Ahorcadito
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
                idJuego: 2,
                palabras: [],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg
                ]
            },
            {
                //Ruleta
                idJuego: 3,
                palabras: [
                    'Abuelo',
                    'Abuela',
                    'Mama',
                    'Papa',
                    'Hermanos',
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg,
                    hermanoImg
                ],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif,
                    hermanoGif,
                ]
            },
            {
                //Unir Correspondientes
                idJuego: 4,
                palabras: [
                    'Abuelo',
                    'Abuela',
                    'Mama',
                    'Papa',
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg,
                ],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif,
                ]
            },
            {
                //Buscar Coincidencias
                idJuego: 5,
                palabras: [
                    'Abuelo',
                    'Abuela',
                    'Mama',
                    'Papa',
                    'Hermanos',
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg,
                    hermanoImg
                ],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif,
                    hermanoGif,
                ],
            },
        ]
    },

    //------------------------------------------LECCION PRONOSTICO CLIMA------------------------------------------------
    {
        id: 1,
        idLeccion: '6908b71929a42907b5589a73',
        contenidoTeorico: [
            {
                id: 1,
                tema: 'Mama',
                completado: false,
                enCurso: true,
                img: mamaImg,
                gif: mamaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> me ama. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> pone la mesa. </p>
                            <p class="text-gray-900 p-3">La <span class="text-cyan-500 font-bold"> MAMA </span> de Malena toma jugo. </p>
                            <p class="text-gray-900 p-3">Me gusta cuando mi <span class="text-cyan-500 font-bold"> MAMA </span> me abraza. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> cocina rico. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> canta. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> juega conmigo. </p>
                        `
                    },
                ]
            },
            {
                id: 2,
                tema: 'Papa',
                completado: false,
                enCurso: false,
                img: papaImg,
                gif: papaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> me ama. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> trabaja mucho. </p>
                            <p class="text-gray-900 p-3">El <span class="text-cyan-500 font-bold"> PAPA </span> de Martin es alto. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> es un superheroe. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> toma mate con mi mama. </p>
                            <p class="text-gray-900 p-3">Mañana veremos un partido de futbol con mi <span class="text-cyan-500 font-bold"> PAPA </span>. </p>
                        `
                    },
                ]
            },
            {
                id: 3,
                tema: 'Hermano',
                completado: false,
                enCurso: false,
                img: hermanoImg,
                gif: hermanoGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> y yo nos divertimos mucho. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> juega al futbol. </p>
                            <p class="text-gray-900 p-3">Tengo un <span class="text-cyan-500 font-bold"> HERMANO </span> mayor. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> pequeño se llama Carlos. </p>
                            <p class="text-gray-900 p-3">A mi <span class="text-cyan-500 font-bold"> HERMANO </span> le gusta leerme cuentos. </p>
                            <p class="text-gray-900 p-3">Hoy voy al parque con mi <span class="text-cyan-500 font-bold"> HERMANO </span>. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> y yo compartimos juguetes. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> mayor se llama Luis. </p>
                        `
                    },
                ]
            },
            {
                id: 4,
                tema: 'Hermana',
                enCurso: false,
                completado: false,
                img: hermanaImg,
                gif: hermanaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> y yo nos divertimos mucho. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> juega al voley. </p>
                            <p class="text-gray-900 p-3">Tengo una <span class="text-cyan-500 font-bold"> HERMANA </span> menor. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> pequeña se llama Maria. </p>
                            <p class="text-gray-900 p-3">A mi <span class="text-cyan-500 font-bold"> HERMANA </span> le gusta dibujar. </p>
                            <p class="text-gray-900 p-3">Hoy voy al parque con mi <span class="text-cyan-500 font-bold"> HERMANA </span>. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> y yo compartimos juguetes. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> mayor se llama Antonela. </p>
                        `
                    },
                ]
            },
            {
                id: 5,
                tema: 'Abuelo',
                completado: false,
                enCurso: false,
                img: abueloImg,
                gif: abueloGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELO </span> me enseña a pescar. </p>
                            <p class="text-gray-900 p-3">El <span class="text-cyan-500 font-bold"> ABUELO </span> de Ana es muy inteligente. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELO </span> me lleva al parque en bicicleta. </p>
                            <p class="text-gray-900 p-3">Los sabados, visito a mi <span class="text-cyan-500 font-bold"> ABUELO </span>. </p>
                            <p class="text-gray-900 p-3">A mi <span class="text-cyan-500 font-bold"> ABUELO </span> le gusta contar chistes. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELO </span> me da caramelos. </p>
                            <p class="text-gray-900 p-3">El <span class="text-cyan-500 font-bold"> ABUELO </span> de Juan tiene un jardin hermoso. </p>
                        `
                    },
                ]
            },
            {
                id: 6,
                tema: 'Abuela',
                completado: false,
                enCurso: false,
                img: abuelaImg,
                gif: abuelaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span> me cuenta historias. </p>
                            <p class="text-gray-900 p-3">La <span class="text-cyan-500 font-bold"> ABUELA </span> de Maria cocina delicioso. </p>
                            <p class="text-gray-900 p-3">Hoy ire a la casa de mi <span class="text-cyan-500 font-bold"> ABUELA </span>. </p>
                            <p class="text-gray-900 p-3">Los domingos, visito a mi <span class="text-cyan-500 font-bold"> ABUELA </span>. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span>  y yo paseamos por el parque. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span> siempre me sonrie. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span> me regala caramelos. </p>
                        `
                    },
                ]
            },

        ],
        contenidoPractico: [
            {
                //Ahorcadito
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
                idJuego: 2,
                palabras: [],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg
                ]
            },
            {
                //Ruleta
                idJuego: 3,
                palabras: [
                    'Abuelo',
                    'Abuela',
                    'Mama',
                    'Papa',
                    'Hermanos',
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg,
                    hermanoImg
                ],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif,
                    hermanoGif,
                ]
            },
            {
                //Unir Correspondientes
                idJuego: 4,
                palabras: [
                    'Abuelo',
                    'Abuela',
                    'Mama',
                    'Papa',
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg,
                ],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif,
                ]
            },
            {
                //Buscar Coincidencias
                idJuego: 5,
                palabras: [
                    'Abuelo',
                    'Abuela',
                    'Mama',
                    'Papa',
                    'Hermanos',
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg,
                    hermanoImg
                ],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif,
                    hermanoGif,
                ],
            },
        ]
    },
    
    //------------------------------------------LECCION MEDIOS DE COMUNICACION------------------------------------------------
    {
        id: 1,
        idLeccion: '6908fd9ab81b2e111cdfa4f5',
        contenidoTeorico: [
            {
                id: 1,
                tema: 'Mama',
                completado: false,
                enCurso: true,
                img: mamaImg,
                gif: mamaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> me ama. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> pone la mesa. </p>
                            <p class="text-gray-900 p-3">La <span class="text-cyan-500 font-bold"> MAMA </span> de Malena toma jugo. </p>
                            <p class="text-gray-900 p-3">Me gusta cuando mi <span class="text-cyan-500 font-bold"> MAMA </span> me abraza. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> cocina rico. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> canta. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> MAMA </span> juega conmigo. </p>
                        `
                    },
                ]
            },
            {
                id: 2,
                tema: 'Papa',
                completado: false,
                enCurso: false,
                img: papaImg,
                gif: papaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> me ama. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> trabaja mucho. </p>
                            <p class="text-gray-900 p-3">El <span class="text-cyan-500 font-bold"> PAPA </span> de Martin es alto. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> es un superheroe. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> PAPA </span> toma mate con mi mama. </p>
                            <p class="text-gray-900 p-3">Mañana veremos un partido de futbol con mi <span class="text-cyan-500 font-bold"> PAPA </span>. </p>
                        `
                    },
                ]
            },
            {
                id: 3,
                tema: 'Hermano',
                completado: false,
                enCurso: false,
                img: hermanoImg,
                gif: hermanoGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> y yo nos divertimos mucho. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> juega al futbol. </p>
                            <p class="text-gray-900 p-3">Tengo un <span class="text-cyan-500 font-bold"> HERMANO </span> mayor. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> pequeño se llama Carlos. </p>
                            <p class="text-gray-900 p-3">A mi <span class="text-cyan-500 font-bold"> HERMANO </span> le gusta leerme cuentos. </p>
                            <p class="text-gray-900 p-3">Hoy voy al parque con mi <span class="text-cyan-500 font-bold"> HERMANO </span>. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> y yo compartimos juguetes. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANO </span> mayor se llama Luis. </p>
                        `
                    },
                ]
            },
            {
                id: 4,
                tema: 'Hermana',
                enCurso: false,
                completado: false,
                img: hermanaImg,
                gif: hermanaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> y yo nos divertimos mucho. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> juega al voley. </p>
                            <p class="text-gray-900 p-3">Tengo una <span class="text-cyan-500 font-bold"> HERMANA </span> menor. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> pequeña se llama Maria. </p>
                            <p class="text-gray-900 p-3">A mi <span class="text-cyan-500 font-bold"> HERMANA </span> le gusta dibujar. </p>
                            <p class="text-gray-900 p-3">Hoy voy al parque con mi <span class="text-cyan-500 font-bold"> HERMANA </span>. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> y yo compartimos juguetes. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> HERMANA </span> mayor se llama Antonela. </p>
                        `
                    },
                ]
            },
            {
                id: 5,
                tema: 'Abuelo',
                completado: false,
                enCurso: false,
                img: abueloImg,
                gif: abueloGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELO </span> me enseña a pescar. </p>
                            <p class="text-gray-900 p-3">El <span class="text-cyan-500 font-bold"> ABUELO </span> de Ana es muy inteligente. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELO </span> me lleva al parque en bicicleta. </p>
                            <p class="text-gray-900 p-3">Los sabados, visito a mi <span class="text-cyan-500 font-bold"> ABUELO </span>. </p>
                            <p class="text-gray-900 p-3">A mi <span class="text-cyan-500 font-bold"> ABUELO </span> le gusta contar chistes. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELO </span> me da caramelos. </p>
                            <p class="text-gray-900 p-3">El <span class="text-cyan-500 font-bold"> ABUELO </span> de Juan tiene un jardin hermoso. </p>
                        `
                    },
                ]
            },
            {
                id: 6,
                tema: 'Abuela',
                completado: false,
                enCurso: false,
                img: abuelaImg,
                gif: abuelaGif,
                content: [
                    {
                        id: 1,
                        title: 'parrafo1',
                        body: `
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span> me cuenta historias. </p>
                            <p class="text-gray-900 p-3">La <span class="text-cyan-500 font-bold"> ABUELA </span> de Maria cocina delicioso. </p>
                            <p class="text-gray-900 p-3">Hoy ire a la casa de mi <span class="text-cyan-500 font-bold"> ABUELA </span>. </p>
                            <p class="text-gray-900 p-3">Los domingos, visito a mi <span class="text-cyan-500 font-bold"> ABUELA </span>. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span>  y yo paseamos por el parque. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span> siempre me sonrie. </p>
                            <p class="text-gray-900 p-3">Mi <span class="text-cyan-500 font-bold"> ABUELA </span> me regala caramelos. </p>
                        `
                    },
                ]
            },

        ],
        contenidoPractico: [
            {
                //Ahorcadito
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
                idJuego: 2,
                palabras: [],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg
                ]
            },
            {
                //Ruleta
                idJuego: 3,
                palabras: [
                    'Abuelo',
                    'Abuela',
                    'Mama',
                    'Papa',
                    'Hermanos',
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg,
                    hermanoImg
                ],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif,
                    hermanoGif,
                ]
            },
            {
                //Unir Correspondientes
                idJuego: 4,
                palabras: [
                    'Abuelo',
                    'Abuela',
                    'Mama',
                    'Papa',
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg,
                ],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif,
                ]
            },
            {
                //Buscar Coincidencias
                idJuego: 5,
                palabras: [
                    'Abuelo',
                    'Abuela',
                    'Mama',
                    'Papa',
                    'Hermanos',
                ],
                imagenes: [
                    abueloImg,
                    abuelaImg,
                    mamaImg,
                    papaImg,
                    hermanoImg
                ],
                gifs: [
                    abueloGif,
                    abuelaGif,
                    mamaGif,
                    papaGif,
                    hermanoGif,
                ],
            },
        ]
    },
]

