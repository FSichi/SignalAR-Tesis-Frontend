
export const TableActionButton = ({ action, color, title }) => {
    return (
        <button
            className={`px-2 py-2 rounded-lg text-lg border-2 text-white border-${color} hover:bg-${color} mx-1 xl:mb-5 2xl:mb-0`}
            onClick={action}
        >
            {title}
        </button>
    )
}
