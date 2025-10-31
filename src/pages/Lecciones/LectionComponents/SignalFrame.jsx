import signTest from '../../../assets/img/sign.jpg'

export const SignalFrame = ({ gifToShown }) => {
    return (
        <div className="bg-gray-800 rounded-lg p-0 m-5 flex h-72 w-auto">
            <img src={gifToShown ?? signTest} className='rounded-lg' />
        </div>
    )
}
