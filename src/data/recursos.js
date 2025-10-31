import { Ahorcadito } from "../components/Recursos/Ahorcadito/Ahorcadito"
import { BuscarCoincidencia } from "../components/Recursos/BuscarCoincidencia/BuscarCoincidencia"
import { JuegoDeLaMemoria } from "../components/Recursos/JuegoDeLaMemoria/JuegoDeLaMemoria"
import { Ruleta } from "../components/Recursos/Ruleta/Ruleta"
import { UnirCorrespondientes } from "../components/Recursos/UnirCorrespondientes/UnirCorrespondientes"

export const recursos = [
    {
        id: 1,
        title: 'Ahorcadito',
        component: Ahorcadito,
    },
    {
        id: 2,
        title: 'Juego de la Memoria',
        component: JuegoDeLaMemoria,
    },
    {
        id: 3,
        title: 'Ruleta',
        component: Ruleta,
    },
    {
        id: 4,
        title: 'Unir los Correspondientes',
        component: UnirCorrespondientes,
    },
    {
        id: 5,
        title: 'Buscar la Coincidencia',
        component: BuscarCoincidencia,
    },
]