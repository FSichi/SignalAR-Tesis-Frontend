import { useEffect } from "react";
import { DataInfoCard } from "../../../components/Cards/DataInfoCard"
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useDispatch } from "react-redux";

export const Resumen = ({ alumno }) => {
    return (
        <section className="flex">
            <SeccionIzquieda alumno={alumno} />
            <SeccionDerecha alumno={alumno} />
        </section>
    )
}

const SeccionIzquieda = ({ alumno }) => {
    return alumno?(
        <div className="bg-gray-800 text-gray-100 rounded-2xl p-4 mt-3 w-1/3">
            <img
                className="w-72 rounded-full mb-10 mx-auto bg-orange-400 p-1 mt-4"
                src='https://avatars.githubusercontent.com/u/68669763?v=4' alt="Profile Pic"
            />
            <div className="mx-auto">
                <h1 className="text-center text-3xl">{alumno.nombreCompleto}</h1>
                <DataInfoCard title={'Discapacidad'} data={alumno.gradoHipoacusia} colorData={'text-orange-500'} textSize={'text-2xl'} />
                <DataInfoCard title={'Ultima Seleccion'} data={'28/05/2023'} colorData={'text-green-400'} textSize={'text-xl'} />
            </div>
        </div>
    ):(<></>);
}

const SeccionDerecha = ({ alumno }) => {
    return alumno?(
        <div className="bg-gray-800 text-gray-100 rounded-2xl p-4 mt-3 w-2/3 ml-5">

            <h1 className="text-3xl mb-3 text-center">Padre / Tutor</h1>

            <div className="bg-gray-700 p-5 rounded-lg">
                <div className="flex justify-between">
                    <h1 className="text-2xl mt-1">{alumno.nombreTutor}</h1>
                    <div className="flex justify-end">
                        <ContactButton title={'WhatsApp'} bgColor={'bg-emerald-500'} type={1} />
                        <ContactButton title={'Correo Electronico'} bgColor={'bg-cyan-500'} type={2} />
                    </div>
                </div>
            </div>

            <div className="flex mt-8">

                <div className="w-1/2 mr-5">
                    <h1 className="text-3xl mb-3 text-center">Ultimas Lecciones</h1>
                    <SectionCardInfo title={'Clima - Tipos de Clima'} state={'Listo para Evaluar'} colorState={'text-green-400'} />
                    <SectionCardInfo title={'Clima - Tipos de Clima'} state={'Necesario Repetir'} colorState={'text-rose-400'} />
                </div>

                <div className="w-1/2 ml-5 mt-10 flex">
                    <div className="m-auto text-center">
                        <ActionButton title={'Establecer como Alumno Activo'} bgColor={'bg-indigo-600'} />
                        <ActionButton title={'Acceder a las Lecciones'} bgColor={'bg-green-600'} />
                        <ActionButton title={'Acceder a las Evaluaciones'} bgColor={'bg-green-600'} />
                    </div>
                </div>

            </div>

        </div>
    ):(<></>)
}

const SectionCardInfo = ({ title, state, colorState }) => {
    return (
        <div className="bg-gray-700 p-5 rounded-lg mt-6">
            <h1 className="text-center text-2xl">{title}</h1>
            <div className="bg-gray-900 w-fit mx-auto px-3 py-2 rounded-lg mt-2">
                <h2 className="text-center text-xl">Estado:
                    <span className={`italic font-bold ${colorState}`}> {state}</span>
                </h2>
            </div>
        </div>
    )
}

const ContactButton = ({ title, bgColor, type }) => {
    return (
        <button className={`${bgColor} px-3 py-2 text-center rounded-lg mx-2 flex`}>
            {type === 1 ? <FaWhatsapp className="mr-2 text-xl" /> : <FaEnvelope className="mr-2 text-xl" />}
            {title}
        </button>
    )
}

const ActionButton = ({ title, bgColor }) => {
    return (
        <button className={`${bgColor} px-3 py-4 w-80 text-center rounded-lg mx-2 text-xl mt-7`}>
            {title}
        </button>
    )
}
