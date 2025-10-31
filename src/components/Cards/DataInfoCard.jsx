
export const DataInfoCard = ({ title, data, colorData, textSize }) => {
    return (
        <div className="bg-gray-900 w-fit mx-auto px-3 py-2 rounded-lg mt-3">
            <h2 className={`text-center ${textSize}`}>
                {title}:
                <span className={`italic font-bold ${colorData}`}> {data}</span>
            </h2>
        </div>
    )
}
