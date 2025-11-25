import { useState } from 'react';
import { HiReply } from "react-icons/hi"
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { ProfesionesOptions, customStyles } from "../../helpers/OptionsSelect"
import { BackButtonLogin } from "../../components/Buttons/BackButton"
import { TitleForForms } from "../../components/LoginComponents/TitleForForms"
import { SeparatorWithoutText } from "../../components/UI/Separator"
import { LoginButton } from "../../components/Buttons/LoginButton"
import { NumberInputWithTitle, TextInputWithTitle } from '../../components/Inputs/TextInput';
import { registerParticular } from "../../redux/slices/auth/thunks";
import { useNavigate } from 'react-router-dom';

export const ProfesionalPart = ({ setPage }) => {

    const dispatch = useDispatch();
    const [optionValueProfesion, setOptionValueProfesion] = useState(null);

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {

        const fichaData = {
            tipoProfesion: optionValueProfesion?.value,
            matriculaProfesional: data.matriculaProfesional,
            edad: data.edad,
            telefono: data.telefono
        };

        const payload = {
            nombreCompleto: data.nombreCompleto,
            correo: data.correo,
            password: data.password,
            rol: "PROFESIONAL_ROLE",
            fichaData
        };

        dispatch(registerParticular(payload, navigate));
    };

    return (
        <section className="bg-gray-700 px-12 py-10 rounded-xl text-white md:max-w-2xl xl:max-w-4xl w-screen mt-5 mb-5">

            <BackButtonLogin icon={<HiReply />} actionMethod={() => { setPage(0) }} />

            <TitleForForms
                title={'Cuenta'} titleEmphasis={'Profesional Particular'} colorTitle={'text-green-400'}
                subTitle={'Datos para la confeccion de la Licencia'}
            />

            <SeparatorWithoutText color={'border-orange-400'} />

            <form className="text-center mt-3" onSubmit={handleSubmit(onSubmit)}>

                <div className="flex justify-between">

                    <TextInputWithTitle
                        inputName={'name'} inputType={'text'} inputTitle={'Nombre Completo'}
                        placeholder={'Nombre...'} keyPressEvent={() => { }}
                        registerForm={{ ...register("nombreCompleto", { required: true }) }}
                    />

                    <TextInputWithTitle
                        inputName={'correo'} inputType={'email'} inputTitle={'Correo Electronico'}
                        placeholder={'mail@email.com'} keyPressEvent={() => { }}
                        registerForm={{ ...register("correo", { required: true, pattern: /^\S+@\S+$/i }) }}
                        customContainerClassName={'ml-3'}
                    />

                </div>

                <div className="flex justify-between">

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

                <div className="flex justify-between">

                    <div className="w-full">
                        <p className="mt-7 text-xl">Tipo de Profesion</p>

                        <Select
                            className='font-bold text-center text-white mt-2'
                            styles={customStyles}
                            options={ProfesionesOptions}
                            onChange={setOptionValueProfesion}
                            isSearchable={false}
                            placeholder={'Seleccione...'}
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

                    <TextInputWithTitle
                        inputName={'matriculaNumber'} inputType={'text'} inputTitle={'Matricula Profesional'}
                        placeholder={'Numero de Matricula'} keyPressEvent={() => { }}
                        registerForm={{ ...register("matriculaProfesional", { required: true }) }}
                        customContainerClassName={'ml-3'}
                    />

                </div>

                <div className="flex justify-between">
                    <TextInputWithTitle
                        inputName={'password'} inputType={'password'} inputTitle={'Password'}
                        placeholder={'Password'} keyPressEvent={() => { }}
                        registerForm={{ ...register("password", { required: true }) }}
                        customContainerClassName={'ml-3'}
                    />

                </div>

                <LoginButton title={'Solicitar Licencia'} type={'submit'} />

            </form>

        </section>
    )
}
