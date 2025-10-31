
export const MessageDataCard = ({ message, type }) => {

    const colorOptions = {
        success: { bgColor: 'bg-green-500', textColor: 'text-white' },
        error: { bgColor: 'bg-rose-600', textColor: 'text-white' },
        warning: { bgColor: 'bg-yellow-500', textColor: 'text-black' },
        default: { bgColor: 'bg-gray-500', textColor: 'text-white' }
    };

    const { bgColor, textColor } = colorOptions[type] || colorOptions.default;

    return (
        <div className={`p-5 rounded-lg shadow-lg ${bgColor} mt-2`}>
            <h2 className={`text-center text-2xl font-bold ${textColor}`}>{message}</h2>
        </div>
    )
}
