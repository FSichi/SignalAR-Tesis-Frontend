
export const BackButtonLogin = ({ actionMethod, icon }) => {
    return (
        <button
            className="absolute -mt-6 -ml-4 bg-gray-200 text-black rounded-xl p-2 text-2xl hover:bg-orange-400"
            onClick={actionMethod}
        >
            {icon}
        </button>
    )
}
