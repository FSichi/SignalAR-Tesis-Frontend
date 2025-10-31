import { Link } from "react-router-dom"

export const ActionButton = ({ actionMethod, title, type }) => {
    return (
        <div className="mt-8 flex justify-center">
            <button
                className="bg-cyan-500 text-xl px-6 py-3 rounded-lg hover:bg-violet-500"
                onClick={actionMethod} type={type}
            >
                {title}
            </button>
        </div>
    )
}

export const ActionButtonPracticalContent = ({ actionMethod, title, type }) => {
    return (
        <div className="mt-8 flex justify-center">
            <button
                className="bg-orange-500 text-lg px-6 py-3 rounded-lg hover:bg-cyan-500"
                onClick={actionMethod} type={type}
            >
                {title}
            </button>
        </div>
    )
}

export const ActionButtonLection = ({ idLeccion, label }) => {
    return (
        <div className=" ml-1 flex justify-start">
            <Link
                className=" mt-4 mb-1 text-lg p-2  rounded-lg outline outline-[1px] hover:bg-violet-500"
                to={`../leccion/resolver/${idLeccion}`}
            >

                {label}
            </Link>
        </div>
    )
}

export const ActionButtonCustomize = ({ actionMethod, title, type, color = 'bg-cyan-500', colorHover = 'bg-violet-500' }) => {
    return (
        <div className="mt-5 flex justify-center">
            <button
                className={`${color} text-xl px-6 py-3 rounded-lg w-full mx-10 hover:${colorHover}`}
                onClick={actionMethod}
                type={type}
            >
                {title}
            </button>
        </div>
    )
}