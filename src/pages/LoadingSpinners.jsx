import { HalfMalf, DoubleBubble} from 'react-spinner-animated'
import 'react-spinner-animated/dist/index.css'

export const LoadingScreen = () => {
    return (
        <div className='text-white fw-bold' data-testid="text">
            <DoubleBubble text={'...'} center={true} width={"200px"} height={"200px"} speed={5} />
        </div>
    )
}

export const LoadingSpinners = () => {
    return (
        <div className='text-white fw-bold' data-testid="text">
            <HalfMalf text={'Cargando...'} bgColor={'#0697FF'} center={true} width={"200px"} height={"200px"} speed={5} />
        </div>
    )
}