import { estadoLeccion } from "../../helpers/Enums"
import { ActionButtonLection } from "../Buttons/ActionButton"
import { SeparatorWithoutText } from "../UI/Separator"

export const LeccionCard = ({ title, difficulty, state, quantity, leccionId }) => {


    return (
        <section className="bg-gray-800 p-4 mx-5 my-2 rounded-lg">

            <h1 className="text-center text-xl mx-4 bg-indigo-500 rounded-md p-2">{title}</h1>
            <SeparatorWithoutText />
            <div className="flex justify-between">
                <span className="text-center mt-4 mr-2 text-lg bg-indigo-500 p-2 w-4/6 rounded-md  "> {difficulty} </span>
                <span className="text-center mt-4 text-lg bg-indigo-500 p-2 w-4/6 rounded-md ml-2 "> <span className="bg-orange-400 px-2 py-1 rounded-md mr-2 text-black text-xl font-semibold"> {quantity}</span>  Juegos </span>
            </div>
            <div className="flex justify-between">
                <h1 className={`${(state === estadoLeccion.COMPLETADO) ? 'bg-teal-500 text-center w-full' : 'bg-rose-500 w-4/6 '}  mt-4 text-xl p-2 rounded-md`}> {state} </h1>
                {(state === estadoLeccion.PENDIENTE) && <ActionButtonLection idLeccion={leccionId} label={'Resolver'} />}
            </div>

        </section >
    )
}





