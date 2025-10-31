import { HalfMalf, Spinner } from 'react-spinner-animated'
import 'react-spinner-animated/dist/index.css'

const text = 'Cargando Datos...';

export const LoadingSpinnerWithText = () => {
    return (
        <div className='text-white fw-bold' data-testid="text">
            <HalfMalf text={text} bgColor={'#0697FF'} center={true} width={"200px"} height={"200px"} speed={5} />
        </div>
    )
}

// Loading Page sin Background y sin texto.

export const LoadingSpinnerWhite = () => {
    return (
        <div className='text-white fw-bold'>
            <HalfMalf text={text} bgColor={'#asdds2'} center={true} speed={5} /> {/* width={"200px"} height={"200px"} */}
        </div>
    )
}

export const LoadingSpinnerForGrafics = () => {
    return (
        <div className='text-white fw-bold'>
            <Spinner bgColor={'#asdds2'} center={true} width={"200px"} height={"200px"} speed={5} />
        </div>
    )
}