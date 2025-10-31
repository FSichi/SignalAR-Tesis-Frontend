import { SeparatorWithoutTextForDashboard } from "../../components/UI/Separator"



export const LastSection = ({ data }) => {

    return (
        <section className="mt-3 bg-gray-800 rounded-lg p-3 mr-2 h-40">

            <h1 className="font-bold text-center mt-2">ULTIMA LECCIÓN REALIZADA</h1>

            <SeparatorWithoutTextForDashboard color={"border-indigo-500"} />

            <div className="my-8">

                {data.map((test, i) => (
                    <LastSectionCard title={test.title} date={test.date} key={i} />
                ))}

            </div>

        </section>
    )
}


export const LastSectionCard = ({ title, date }) => {
    return (
        <div className={`w-full h-12  bg-indigo-500 rounded-lg`}>

            <div className="flex justify-between">

                <h1 className="mt-3 ml-5 text-lg">{title}</h1>
                <h1 className="mt-2 mr-3 text-lg  font-semibold bg-emerald-500 px-4 py-0.5 rounded-lg">{date}</h1>

            </div>

        </div>
    )
}
