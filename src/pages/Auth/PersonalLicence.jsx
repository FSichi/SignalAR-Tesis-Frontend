import { useState } from "react";
import { HiReply } from 'react-icons/hi';
import Select from 'react-select';
import { BackButtonLogin } from "../../components/Buttons/BackButton";
import { LoginButton } from "../../components/Buttons/LoginButton"
import { TitleForForms } from "../../components/LoginComponents/TitleForForms";
import { SeparatorWithoutText } from "../../components/UI/Separator";
import { DiscapacidadOptions, customStyles } from "../../helpers/OptionsSelect";
import { useForm } from "react-hook-form";
import { NumberInputWithTitle, TextInputWithTitle } from "../../components/Inputs/TextInput";

export const PersonalLicence = ({ setPage }) => {

    const [optionValueDiscapacidad, setOptionValueDiscapacidad] = useState({});
    console.log(optionValueDiscapacidad);

    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="bg-gray-700 px-12 py-16 rounded-xl text-white md:max-w-2xl xl:max-w-4xl w-screen">

            <BackButtonLogin icon={<HiReply />} actionMethod={() => { setPage(0) }} />

            <TitleForForms
                title={'Cuenta'} titleEmphasis={'Particular'} colorTitle={'text-green-400'}
                subTitle={'Datos para la confeccion de la Licencia'}
            />

            <SeparatorWithoutText color={'border-orange-400'} />

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="flex justify-between text-center">

                    <TextInputWithTitle
                        inputName={'name'} inputType={'text'} inputTitle={'Nombre Completo'}
                        placeholder={'Nombre...'} keyPressEvent={() => { }}
                        registerForm={{ ...register("nombre", { required: true }) }}
                    />

                    <TextInputWithTitle
                        inputName={'email'} inputType={'email'} inputTitle={'Correo Electronico'}
                        placeholder={'mail@email.com'} keyPressEvent={() => { }}
                        registerForm={{ ...register("email", { required: true, pattern: /^\S+@\S+$/i }) }}
                        customContainerClassName={'ml-3'}
                    />

                </div>

                <div className="flex justify-between text-center">

                    <NumberInputWithTitle
                        inputName={'edad'} inputTitle={'Edad'}
                        placeholder={'0'} keyPressEvent={() => { }}
                        registerForm={{ ...register("edad", { required: true }) }}
                    />

                    <TextInputWithTitle
                        inputName={'phone'} inputType={'text'} inputTitle={'Telefono de Contacto'}
                        placeholder={'Telefono (+54)'} keyPressEvent={() => { }}
                        registerForm={{ ...register("telefono", { required: true }) }}
                        customContainerClassName={'ml-3'}
                    />

                </div>

                <div className="w-full text-center">
                    <p className="mt-7 text-xl">Tipo de Discapacidad</p>
                    <Select
                        className='font-bold text-center text-white mt-2' styles={customStyles}
                        options={DiscapacidadOptions} onChange={setOptionValueDiscapacidad}
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

                <LoginButton
                    actionMethod={() => { }}
                    title={'Solicitar Licencia'} type={'submit'}
                />

            </form>

        </div>
    )
}
