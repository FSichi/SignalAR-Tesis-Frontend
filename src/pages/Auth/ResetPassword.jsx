import { useState } from "react"
import { HiReply } from "react-icons/hi"
import { useForm } from "react-hook-form"
import { BackButtonLogin } from "../../components/Buttons/BackButton"
import { LoginButton } from "../../components/Buttons/LoginButton"
import { TitleForForms } from "../../components/LoginComponents/TitleForForms"
import { SeparatorWithoutText } from "../../components/UI/Separator"
import { ShowPassword } from "../../components/LoginComponents/ShowPassword"
import { backtoLogin } from "../../helpers/redirectTo"
import { TextInputWithTitle, TextInputWithoutTitle } from "../../components/Inputs/TextInput"
import { useDispatch } from "react-redux"
import { changePassword } from "../../redux/slices/auth/thunks"
import { ToastNotification } from "../../components/Notifications/ToastNotification"

export const ResetPassword = () => {

    const [validateEmail, setValidateEmail] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmitEmail = (data) => {
        setValidateEmail(!validateEmail);
    }

    const onSubmitPassword = (data) => {

        if (data.password !== data.repeatPassword) {
            ToastNotification.fire({ icon: 'error', title: 'El password debe coincidir' });
            return;
        }

        const dataToSend = {
            correo: data.email,
            password: data.password
        }

        dispatch(changePassword(dataToSend, {
            sucessCallBack: () => {
                setTimeout(() => { backtoLogin('/') }, 500);
            }, failureCallBack: () => {
                backtoLogin('/auth/reset-password');
            }
        }));

        setValidateEmail(!validateEmail)
    }

    return (
        <section className="bg-orange-400 flex h-screen">
            <div className="m-auto">
                <div className="bg-gray-700 px-12 py-16 rounded-xl text-white max-w-3xl w-screen">

                    <BackButtonLogin icon={<HiReply />} actionMethod={() => { backtoLogin('/') }} />

                    <TitleForForms
                        title={'Olvidaste tu Contraseña?'}
                        subTitle={'Ingresa las credenciales de tu licencia para poder iniciar el proceso de reestablecimiento de tu contraseña'}
                    />

                    <SeparatorWithoutText color={'border-orange-400'} />

                    {
                        (!validateEmail) &&
                        (
                            <form className="mt-8" onSubmit={handleSubmit(onSubmitEmail)}>

                                <TextInputWithTitle
                                    inputName={'email'} inputType={'email'} inputTitle={'Correo Electronico Asociado a tu Licencia'}
                                    placeholder={'mail@email.com'} keyPressEvent={() => { }}
                                    registerForm={{ ...register("email", { required: true, pattern: /^\S+@\S+$/i }) }}
                                />

                                <LoginButton actionMethod={() => { }} title={'Validar Correo'} type={'submit'} />

                            </form>
                        )
                    }

                    {
                        (validateEmail) &&
                        (
                            <form onSubmit={handleSubmit(onSubmitPassword)}>
                                <div className="w-full text-center mt-8">
                                    <p className="mt-7 text-xl">Nueva Contraseña</p>
                                    <div className="relative mt-2">

                                        <TextInputWithoutTitle
                                            inputName={'password'} inputType={(!showPassword) ? 'password' : 'text'}
                                            placeholder={'Contraseña'} keyPressEvent={() => { }}
                                            registerForm={{ ...register("password", { required: true, maxLength: 15 }) }}
                                        />

                                        <ShowPassword setShowPassword={setShowPassword} showPassword={showPassword} />

                                    </div>
                                </div>

                                <TextInputWithTitle
                                    inputName={'password'} inputType={(!showPassword) ? 'password' : 'text'}
                                    placeholder={'Contraseña'} keyPressEvent={() => { }}
                                    inputTitle={'Repetir Contraseña'}
                                    registerForm={{ ...register("repeatPassword", { required: true, maxLength: 15 }) }}
                                />

                                <LoginButton title={'Validar Correo'} type={'submit'} />

                            </form>
                        )
                    }

                </div>
            </div>
        </section>
    )
}
