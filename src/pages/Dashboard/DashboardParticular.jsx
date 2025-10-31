import { DashboardCardDerecha, DashboardCardIzquierda } from "../../components/Cards/DashboardCard"
import { ReactComponent as AprobadasIcon } from '../../assets/Icons/aprobadas.svg'
import { ReactComponent as PendientesIcon } from '../../assets/Icons/pendientes.svg'
import { TestSection } from "./TestSection"
import { GraphicsSection } from "./GraphicsSection"
import { LastSection } from "./LastSection"

export const DashboardParticular = () => {
    
    const time = Date.now();

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

    const lastSetionData = [
        {
            title: 'Clima - Tipos de Clima',
            date: new Date(time).toLocaleDateString(),
        },
    ]

    return (
        <section className="flex">
            <div className="w-2/5">

                <div className="flex justify-center">
                    <DashboardCardIzquierda Icon={AprobadasIcon} title={"Evaluaciones Aprobadas"} amount={10} />
                    <DashboardCardDerecha Icon={PendientesIcon} title={"Evaluaciones Pendientes"} amount={10} />
                </div>

                <LastSection data={lastSetionData} />
                <TestSection data={testData} />

            </div>

            <GraphicsSection />

        </section>
    )
}
