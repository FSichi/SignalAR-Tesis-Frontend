
export const LoginButton = ({ title, type }) => {
    return (
        <div className="mt-8 flex justify-center">
            <button
                className="bg-cyan-500 text-xl px-6 py-3 rounded-lg hover:bg-violet-500"
                type={type}
            >
                {title}
            </button>
        </div>
    )
}

export const LoginButtonDisabled = ({ title }) => {
    return (
        <div className="mt-8 flex justify-center">
            <button
                className="bg-cyan-800 text-2xl px-5 py-3 rounded-lg"
                disabled
            >
                {title}
            </button>
        </div>
    )
}
