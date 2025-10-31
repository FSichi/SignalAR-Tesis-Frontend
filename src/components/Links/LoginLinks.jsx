import { Link } from "react-router-dom"

export const LoginLinks = ({ url, title, clssName = '', idType }) => {

    return (
        <div className={clssName}>
            <Link
                to={url} className="text-lg text-cyan-500 hover:text-orange-500 hover:cursor-pointer"
            >
                <h2 className={(idType) === 0 ? 'text-center mt-4' : 'text-center'}>
                    {title}
                </h2>
            </Link>
        </div>
    )
}
