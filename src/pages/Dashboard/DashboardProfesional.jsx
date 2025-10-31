import { DashboardCardDerecha, DashboardCardIzquierda } from "../../components/Cards/DashboardCard"
import { GraphicsSection } from "./GraphicsSection"
import { TestSection } from "./TestSection"

import { ReactComponent as AlumnoIcon } from '../../assets/Icons/alumnos.svg'
import { ReactComponent as LeccionesIcon } from '../../assets/Icons/leccionesCompletadas.svg'
import { ReactComponent as AprobadasIcon } from '../../assets/Icons/aprobadas.svg'
import { ReactComponent as PendientesIcon } from '../../assets/Icons/pendientes.svg'
import { useSelector } from "react-redux"

export const DashboardProfesional = () => {

    const { cards } = useSelector(state => state.dashboard);
    
    const { cantidadEstudiantes, leccionesCompletadas,
        evaluacionesAprobadas, evaluacionesPendientes
    } = cards;


    const testData = [
        {
            title: 'Clima - Tipos de Clima',
            state: false,
        },
        {
            title: 'Operaciones Matematicas - Sumas',
            state: true,
        },
        {
            title: 'Familia - Parentesco Familiar',
            state: true,
        },
    ]

    return (
        <section className="flex">
            <div className="w-2/5">

                <div className="flex justify-center">
                    <DashboardCardIzquierda Icon={AlumnoIcon} title={"Cantidad de Estudiantes"} amount={cantidadEstudiantes} />
                    <DashboardCardDerecha Icon={LeccionesIcon} title={"Lecciones Completadas"} amount={leccionesCompletadas} />
                </div>

                <div className="mt-2 flex justify-center">
                    <DashboardCardIzquierda Icon={AprobadasIcon} title={"Evaluaciones Aprobadas"} amount={evaluacionesAprobadas} />
                    <DashboardCardDerecha Icon={PendientesIcon} title={"Evaluaciones Pendientes"} amount={evaluacionesPendientes} />
                </div>

                <TestSection data={testData} />

            </div>

            <GraphicsSection />

        </section>
    )
}
