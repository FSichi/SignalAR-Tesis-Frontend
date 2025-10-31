import { dificultad, estadoLeccion } from "../helpers/Enums";


export const leccionesData = [
    {
        id: 1,
        seccionId: 1,
        nombre: 'Mi Familia - Introduccion',
        dificultad: dificultad.BAJA,
        estado: estadoLeccion.COMPLETADA,
        cantidadRecursos: 5,
    },
    {
        id: 2,
        seccionId: 1,
        nombre: 'Mi Familia - 2',
        dificultad: dificultad.MEDIA,
        estado: estadoLeccion.COMPLETADA,
        cantidadRecursos: 4,
    },
    {
        id: 3,
        seccionId: 1,
        nombre: 'Integrantes de mi Familia',
        dificultad: dificultad.MEDIA,
        estado: estadoLeccion.PENDIENTE,
        cantidadRecursos: 5,
    },
    {
        id: 4,
        seccionId: 1,
        nombre: 'Palabras - Familia',
        dificultad: dificultad.BAJA,
        estado: estadoLeccion.COMPLETADA,
        cantidadRecursos: 4,
    },
    {
        id: 5,
        seccionId: 2,
        nombre: 'Parentezco Familiar',
        dificultad: dificultad.ALTA,
        estado: estadoLeccion.PENDIENTE,
        cantidadRecursos: 3,
    },
    {
        id: 6,
        seccionId: 3,
        nombre: 'Medios de comunicacion',
        dificultad: dificultad.BAJA,
        estado: estadoLeccion.COMPLETADA,
        cantidadRecursos: 5,
    },
    

]
