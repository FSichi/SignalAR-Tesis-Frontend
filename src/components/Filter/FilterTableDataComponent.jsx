import Select from 'react-select';
import { AreaOptions, customStylesArea } from "../../helpers/OptionsSelect"

export const FilterTableWithoutSelectors = ({ title, search, handleInputChange, placeholderText = '' }) => {

    return (
        <div className="bg-gray-800 rounded-lg py-3 flex justify-between">

            <h1 className="text-2xl ml-5 m-auto italic text-cyan-500">{title}</h1>

            <div className="flex">
                <span className='text-gray-100 text-2xl mr-10 m-auto'>Buscar</span>
                <input
                    type="text" placeholder={placeholderText} autoComplete='off'
                    name='search' value={search} onChange={handleInputChange}
                    className={`text-xl px-20 py-2 rounded-lg text-black text-center
                        bg-white border-2 border-gray-300 placeholder-gray-500
                        focus:border-orange-600 focus:outline-none mr-5`}
                />
            </div>

        </div>
    )
}

//todo hacer filtro con el select y con el input

export const FilterTableWithSelectors = ({ title, search, handleInputChange, changeSelect }) => {


    return (
        <div className="bg-gray-800 rounded-lg py-3 flex justify-between">

            <h1 className="text-2xl ml-5 m-auto italic text-cyan-500">{title}</h1>

            <div className=" flex mr-10 m-auto">
                <span className='text-gray-100 text-2xl mr-10 m-auto'>Area</span>
                <Select
                    className='font-bold text-center text-white mt-2' styles={customStylesArea}
                    options={AreaOptions} onChange={changeSelect}
                    isSearchable={false} placeholder={'Seleccione...'}
                    // defaultValue={optionValueProfesion}
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            primary25: '#E6E6E6',
                            primary: '#FB923C',
                        },
                    })}
                />
            </div>

            <div className="flex">
                <span className='text-gray-100 text-2xl mr-10 m-auto'>Buscar</span>
                <input
                    type="text" placeholder='Nombre Seccion' autoComplete='off'
                    name='search' value={search} onChange={handleInputChange}
                    className={`text-xl px-20 py-2 rounded-lg text-black text-center
                        bg-white border-2 border-gray-300 placeholder-gray-500
                        focus:border-orange-600 focus:outline-none mr-5`}
                />
            </div>

        </div>
    )
}