export const HeaderGraphicEval = ({ title1 }) => {
    return (
        <div className="flex p-2 justify-center">
            <div className={`bg-cyan-500 hover:bg-indigo-300 mx-1 rounded-md px-2 py-4`}>
                <h1 className={`text-center text-black text-xl`}>
                    {title1}
                </h1>
            </div>
        </div>
    )
}