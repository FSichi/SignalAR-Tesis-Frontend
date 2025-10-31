import { SeparatorWithoutTextForDashboard } from "../../components/UI/Separator"
import { ReactComponent as HappyIcon } from '../../assets/Icons/happy.svg'
import { ReactComponent as SadIcon } from '../../assets/Icons/sad.svg'


export const TestSection = ({ data }) => {

    return (
        <section className="mt-3 bg-gray-800 rounded-lg p-3 mr-2 h-64">

            <h1 className="font-bold text-center mt-2">ULTIMAS EVALUACIONES</h1>

            <SeparatorWithoutTextForDashboard color={"border-indigo-500"} />

            <div className="mt-3">

                {data.map((test, i) => (
                    <TestCard title={test.title} state={test.state} key={i} />
                ))}

            </div>

        </section>
    )
}


export const TestCard = ({ title, state }) => {
    return (
        <div className={`w-full h-12 ${state ? 'bg-teal-500' : 'bg-rose-500'} my-4 rounded-lg`}>

            <div className="flex justify-between">

                <h1 className="mt-3 ml-5 text-lg">{title}</h1>

                <div className='w-10 mt-1 mr-4'>
                    {state ? <HappyIcon /> : <SadIcon />}
                </div>

            </div>

        </div>
    )
}
