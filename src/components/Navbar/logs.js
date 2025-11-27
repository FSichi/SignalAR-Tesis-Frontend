import { CursorClickIcon, PlayIcon, SupportIcon, ViewGridIcon } from '@heroicons/react/outline'

export const alumnos = [
    {
        name: 'Agregar Alumno',
        description: 'Agregar un alumno a tu plantel de trabajo',
        href: '/app/alumnos/agregar',
        icon: CursorClickIcon,
    },
    {
        name: 'Listar Alumnos',
        description: "Visualizar el listado de alumnos asociados a tu plantel de trabajo ",
        href: '/app/alumnos/listado',
        icon: ViewGridIcon,
    }
]

export const submenuAlumnos = [
    { name: 'Seleccionar Alumno Activo', href: '/app/alumnos/activo', icon: PlayIcon },
]

export const aprendizaje = [
    {
        name: 'Secciones',
        description: 'Acceder al material academico disponible para alfabetización',
        href: '/app/seccion/listado',
        icon: CursorClickIcon,
    },
    {
        name: 'Evaluaciones',
        description: "Visualizar las evaluaciones disponibles para validar el aprendizaje",
        href: '/app/evaluacion/listado',
        icon: ViewGridIcon,
    }
]

export const perfil = [
    // {
    //     name: 'Perfil',
    //     description: 'Revisa tu informacion personal.',
    //     href: '/app/perfil',
    //     icon: SupportIcon,
    // },
]

export const menuCelular = [
    {
        name: 'Estado Academico',
        href: '/app/estado',
        icon: SupportIcon,
    },
    {
        name: 'Correlatividad para Cursar',
        href: '/app/correlativa-cursado',
        icon: CursorClickIcon,
    },
    {
        name: 'Correlatividad para Rendir',
        href: '/app/correlativa-rendir',
        icon: ViewGridIcon,
    },
    {
        name: 'Perfil Academico',
        href: '/app/profile',
        icon: SupportIcon,
    },
]