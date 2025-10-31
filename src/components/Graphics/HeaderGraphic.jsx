import { Toast } from "../../utils/ToastSweetAlert"

export const HeaderGraphic = ({ buttonSelected, setButtonSelected, theoryState, title1, title2 }) => {

    const changeButtonState = (id) => {

        if ((id === 2) && (theoryState === false)) {
            return Toast.fire({
                icon: 'error',
                title: 'NECESITAS COMPLETAR EL CONTENIDO TEORICO'
            });
        }

        setButtonSelected(id === 1 ? true : false)
    }

    return (
        <div className="flex p-2 justify-center">
            <HeaderButton
                state={buttonSelected} setState={changeButtonState} id={1}
                title={title1}
                activeBg={'bg-cyan-500'} disabledBg={'bg-gray-800'}
                activeText={'text-black'} disabledText={'text-cyan-100'}
            />

            <HeaderButton
                state={buttonSelected} setState={changeButtonState} id={2}
                title={title2}
                activeBg={'bg-gray-800'} disabledBg={'bg-cyan-500'}
                activeText={'text-cyan-100'} disabledText={'text-black'}
            />

        </div>
    )
}

const HeaderButton = ({ title, state, setState, activeBg, disabledBg, activeText, disabledText, id }) => {
    return (
        <button className={`w-1/2 ${state ? activeBg : disabledBg} hover:bg-indigo-300 mx-1 rounded-md px-2 py-4`}
            onClick={() => { setState(id) }}
        >
            <h1 className={`text-center ${state ? activeText : disabledText} text-xl`}>
                {title}
            </h1>
        </button>
    )
}