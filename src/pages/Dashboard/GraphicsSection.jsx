
import { useState } from "react"
import { BarChart } from "../../components/Graphics/BarChart"
import { HeaderGraphic } from "../../components/Graphics/HeaderGraphic"
import { PierChart } from "../../components/Graphics/PierChart"
import { SeparatorWithoutTextForDashboard } from "../../components/UI/Separator"

export const GraphicsSection = () => {

    const [buttonSelected, setButtonSelected] = useState(true);

    return (
        <section className="w-3/5 bg-gray-800 rounded-lg"> {/*  h-auto */}

            <HeaderGraphic buttonSelected={buttonSelected} setButtonSelected={setButtonSelected} title1={'Secciones mas usadas'} title2={'Historial de Lecciones'}/>

            <SeparatorWithoutTextForDashboard color={"border-indigo-500"} />

            <div className="mt-5 mx-3">
                {
                    (buttonSelected)
                        ? <BarChart />
                        : <PierChart />
                }
            </div>

        </section>
    )
}
