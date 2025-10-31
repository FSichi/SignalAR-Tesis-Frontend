import { useParams } from "react-router-dom";
import { HeaderGraphic } from "../../components/Graphics/HeaderGraphic";
import { useState } from "react";
import { getLeccionById } from "../../helpers/getterOptionsForData";
import { leccionesData } from "../../data/lecciones";
import { PracticalContent } from "./LectionComponents/PracticalContent";
import { TheoreticalContent } from "./LectionComponents/TheoreticalContent";
import { SeparatorWithoutTextForDashboard } from "../../components/UI/Separator";

export const ResolverLeccion = () => {

    const { idLeccion } = useParams();
    const [buttonSelected, setButtonSelected] = useState(true);
    const [theoryState, setTheoryState] = useState(false);
    const { nombre } = getLeccionById(idLeccion, leccionesData)

    return (
        <>
            <div className="flex">

                <div className="sm:w-1/2 xl:w-1/3 bg-slate-500 rounded-t-lg">
                    <HeaderGraphic
                        buttonSelected={buttonSelected} setButtonSelected={setButtonSelected}
                        theoryState={theoryState} 
                        title1={'Contenido Teorico'} title2={'Contenido Práctico'}
                    />
                    <SeparatorWithoutTextForDashboard color={'bg-red-300'} />
                </div>

                <p className="bg-gray-800 p-5 text-center rounded-t-lg text-2xl w-2/3 ml-1">Lección: <span className=" text-red-300">&quot;{nombre}&quot;</span></p>

            </div>
            {
                (buttonSelected)
                    ? <div className="bg-slate-500 rounded-b-lg hCustomContainer"><TheoreticalContent lectionId={idLeccion} setTheoryState={setTheoryState} /></div>
                    : <div className="bg-slate-500"><PracticalContent lectionId={idLeccion} /></div>
            }
        </>
    )
}