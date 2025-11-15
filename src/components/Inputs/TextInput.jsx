
export const TextInputWithoutTitle = ({ registerForm, inputName, inputType, keyPressEvent, placeholder, customClassName }) => {
    return (
        <input
            type={inputType}
            placeholder={placeholder}
            name={inputName}
            onKeyPress={keyPressEvent}
            className={`text-lg px-3 py-2 rounded-lg w-full text-black text-center
            bg-white border-2 border-gray-300 placeholder-gray-500 shadow-md
            focus:border-orange-600  
            focus:outline-none ${customClassName}`}
            {...registerForm}
        />
    )
}

export const TextInputWithTitle = ({
    registerForm, inputName, inputTitle, inputType, keyPressEvent, placeholder,
    customInputClassName, customContainerClassName, inputSelectOptions
}) => {
    return (
        <div className={`w-full text-center ${customContainerClassName}`}>
            <p className="mt-7 text-xl">{inputTitle}</p>
            { inputType==='select'?
                <select 
                    name={inputName}
                    className={`text-lg px-3 py-2 rounded-lg w-full text-black text-center
                    bg-white border-2 border-gray-300 placeholder-gray-500 shadow-md
                    focus:border-orange-600  
                    focus:outline-none mt-2 ${customInputClassName}`}
                    {...registerForm}>
                    {inputSelectOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                :
                <input
                    type={inputType}
                    placeholder={placeholder}
                    name={inputName}
                    onKeyPress={keyPressEvent}
                    className={`text-lg px-3 py-2 rounded-lg w-full text-black text-center
                    bg-white border-2 border-gray-300 placeholder-gray-500 shadow-md
                    focus:border-orange-600  
                    focus:outline-none mt-2 ${customInputClassName}`}
                    {...registerForm}
                />
            }
        </div>
    )
}

export const TextInputWithTitleDisabled = ({
    inputName, inputTitle, inputValue, customInputClassName, customContainerClassName
}) => {
    return (
        <div className={`w-full ${customContainerClassName}`}>
            <p className="mt-7 text-xl">{inputTitle}</p>
            <input
                type='text'
                name={inputName}
                disabled
                value={inputValue}
                className={`text-xl px-3 py-2 rounded-md w-full text-white text-center
                bg-gray-900 border-2 border-gray-700 shadow-md mt-2 ${customInputClassName}`}
            />
        </div>
    )
}

export const NumberInputWithTitle = ({
    registerForm, inputName, inputTitle, keyPressEvent, placeholder,
    customInputClassName, customContainerClassName
}) => {
    return (
        <div className={`w-full text-center ${customContainerClassName}`}>
            <p className="mt-7 text-xl">{inputTitle}</p>
            <input
                type={'number'}
                min={0}
                max={120}
                placeholder={placeholder}
                name={inputName}
                onKeyPress={keyPressEvent}
                className={`text-lg px-3 py-2 rounded-lg w-full text-black text-center
                bg-white border-2 border-gray-300 placeholder-gray-500 shadow-md
                focus:border-orange-600  
                focus:outline-none mt-2 ${customInputClassName}`}
                {...registerForm}
            />
        </div>
    )
}
