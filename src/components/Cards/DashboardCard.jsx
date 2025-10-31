
export const DashboardCardIzquierda = ({ Icon, title, amount }) => {
    return (
        <section className="bg-gray-800 w-1/2 mr-2 p-4 rounded-lg">

            <div className='w-16 mx-auto'>
                <Icon />
            </div>

            <h1 className="text-center mt-3 text-lg">{title}</h1>
            <h2 className="text-center mt-2 text-lg bg-indigo-500 rounded-md hover:text-xl ">{amount}</h2> 
            {/* <h2 className="text-center mt-2 text-lg"> <span className="bg-indigo-500 px-4 py-2 rounded-lg">{amount}</span></h2> */}

        </section>
    )
}

export const DashboardCardDerecha = ({ Icon, title, amount }) => {
    return (
        <section className="bg-gray-800 w-1/2 mr-2 p-4 rounded-lg">

            <div className='w-16 mx-auto'>
                <Icon />
            </div>

            <h1 className="text-center mt-3 text-lg">{title}</h1>
            <h2 className="text-center mt-2 text-lg bg-indigo-500 rounded-md hover:text-xl ">{amount}</h2> 
            {/* <h2 className="text-center mt-2 text-lg"> <span className="bg-indigo-500 px-4 py-2 rounded-lg">{amount}</span></h2> */}

        </section>
    )
}