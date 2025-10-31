import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from 'react-select';
import { NumberInputWithTitle, TextInputWithTitle } from "../../components/Inputs/TextInput";
import { ActionButton } from "../../components/Buttons/ActionButton";
import { SeparatorWithoutText } from "../../components/UI/Separator";
import { DiscapacidadOptions, ParentescoOptions, customStyles } from "../../helpers/OptionsSelect";
import { ToastNotification } from "../../components/Notifications/ToastNotification";
import { useDispatch } from "react-redux";
import { agregarAlumno } from "../../redux/slices/alumnos/thunks";
import { checkFormAlumnosValidation } from "../../utils/formValidations";
import { goToURL } from "../../helpers/redirectTo";

export const AgregarAlumno = () => {

    const dispatch = useDispatch();

    const [optionValueParentesco, setOptionValueParentesco] = useState({ label: '', value: '0' });
    const [optionValueDiscapacidad, setOptionValueDiscapacidad] = useState({ label: '', value: '0' });

    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        const formData = {
            ...data,
            parentesco: optionValueParentesco.value,
            discapacidad: optionValueDiscapacidad.value
        }

        const { status, error } = checkFormAlumnosValidation(formData)
        if (!status) return ToastNotification.fire({ icon: 'error', title: error });

        dispatch(agregarAlumno(formData, {
            sucessCallBack: () => {
                setTimeout(() => { goToURL('/app/alumnos/listado') }, 1300);
            }
        }));
    }

    return (
        <section className="bg-gray-900 rounded-xl text-white py-10">

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="lg:flex lg:justify-center">

                    <div className="bg-gray-800 rounded-lg lg:w-5/12 px-5 py-7 lg:mr-5 md:mx-4 lg:mx-0">

                        <h1 className="text-center text-2xl mt-2">Ingresa los Siguientes Datos del Alumno</h1>
                        <SeparatorWithoutText color={'border-orange-400'} />

                        <TextInputWithTitle
                            inputName={'name'} inputType={'text'} inputTitle={'Nombre Completo'}
                            placeholder={'Nombre...'} keyPressEvent={() => { }}
                            registerForm={{ ...register("nombre", { required: false }) }}
                        />

                        <div className="flex justify-between text-center">

                            <NumberInputWithTitle
                                inputName={'edad'} inputTitle={'Edad'} customContainerClassName={'mr-2'}
                                placeholder={'0'} keyPressEvent={() => { }}
                                registerForm={{ ...register("edad", { required: false }) }}
                            />

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

                        </div>

                        <TextInputWithTitle
                            inputName={'escuela'} inputType={'text'} inputTitle={'Escuela'}
                            placeholder={'Escuela...'} keyPressEvent={() => { }}
                            registerForm={{ ...register("escuela", { required: false }) }}
                        />

                    </div>

                    <div className="bg-gray-800 rounded-lg lg:w-5/12 px-5 py-7 lg:ml-5 md:mt-8 lg:mt-0 md:mx-4 lg:mx-0">

                        <h1 className="text-center text-2xl mt-2">Ingresa los Siguientes Datos del Tutor</h1>
                        <SeparatorWithoutText color={'border-orange-400'} />

                        <TextInputWithTitle
                            inputName={'tutor'} inputType={'text'} inputTitle={'Nombre Tutor'}
                            placeholder={'Nombre...'} keyPressEvent={() => { }}
                            registerForm={{ ...register("tutor", { required: false }) }}
                        />

                        <div className="w-full text-center">
                            <p className="mt-7 text-xl">Parentesco</p>
                            <Select
                                className='font-bold text-center text-white mt-2' styles={customStyles}
                                options={ParentescoOptions} onChange={setOptionValueParentesco}
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

                        <div className="flex justify-between text-center">

                            <TextInputWithTitle
                                inputName={'email'} inputType={'email'} inputTitle={'Correo Electronico'}
                                placeholder={'mail@email.com'} keyPressEvent={() => { }}
                                registerForm={{ ...register("email", { required: false, pattern: /^\S+@\S+$/i }) }}
                                customContainerClassName={'mr-2'}
                            />

                            <TextInputWithTitle
                                inputName={'phone'} inputType={'text'} inputTitle={'Telefono de Contacto'}
                                placeholder={'Telefono (+54)'} keyPressEvent={() => { }}
                                registerForm={{ ...register("telefono", { required: false }) }}
                                customContainerClassName={'ml-2'}
                            />

                        </div>
                    </div>

                </div>

                <ActionButton actionMethod={() => { }} title={'Agregar Alumno'} type={'submit'} />

            </form>

        </section>
    )
}
