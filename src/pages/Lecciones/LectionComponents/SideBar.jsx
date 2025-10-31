import { ActionButtonCustomize } from "../../../components/Buttons/ActionButton"
import { SeparatorWithoutTextForDashboard } from "../../../components/UI/Separator"

export const SideBar = ({ data, title }) => {
    return (
        <div className="bg-gray-800 text-white mx-3 my-5 flex flex-col rounded-lg">
            <div className="py-3 text-center mt-2">
                <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            <div className="flex-grow overflow-y-auto">
                <SeparatorWithoutTextForDashboard color={"border-indigo-500"} />

                <div className="mt-3 mb-5">

                    {data.map((topic, i) => (
                        (!topic.enCurso && !topic.completado)
                            ?
                            <ActionButtonCustomize
                                title={topic.tema} key={i}
                                color="bg-slate-500"
                                colorHover=""
                            />
                            :
                            <ActionButtonCustomize
                                title={topic.tema} key={i}
                                color={(topic.completado) ? "bg-teal-500" : "bg-cyan-500"}
                                colorHover={(topic.completado) ? "bg-violet-500" : ""}
                            />
                    ))}

                </div>
            </div>
        </div>
    )
}
