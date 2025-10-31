
export const LicenceTypeButton = ({ title, licenceType, changeLicenceSelected, idType }) => {
    return (
        <button
            className={(licenceType === idType) ? 'bg-green-500 mx-6 px-3 py-3 text-2xl rounded-lg w-72 font-bold italic mt-6' : 'bg-gray-500 mx-6 px-3 py-3 text-2xl rounded-lg w-72 mt-6'}
            onClick={() => { changeLicenceSelected(idType) }}
        >
            {title}
        </button>
    )
}
export const LicenceProfessionalTypeButton = ({ title, licenceType, changeLicenceSelected, idType, marginActive }) => {
    return (
        <div className={(marginActive) ? 'flex mb-5' : 'flex'}>
            <button
                className={(licenceType === idType) ? 'bg-green-500 mx-6 px-3 py-3 text-xl rounded-lg w-72 font-bold italic' : 'bg-gray-500 mx-6 px-3 py-3 text-xl rounded-lg w-72'}
                onClick={() => { changeLicenceSelected(idType) }}
            >
                {title}
            </button>
        </div>

    )
}
