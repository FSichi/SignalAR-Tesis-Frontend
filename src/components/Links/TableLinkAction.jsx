import { Link } from "react-router-dom"

export const TableLinkAction = ({ linkAction, title, color }) => {
    return (
        <Link
            className={`px-3 py-3 rounded-lg text-lg border-2 text-white border-${color} hover:bg-${color} mx-1`}
            to={linkAction}
        >
            {title}
        </Link>
    )
}
