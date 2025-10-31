import { useState } from 'react'
import { useForm } from "react-hook-form";
import { LoginLinks } from '../../components/Links/LoginLinks';
import { LoginButton } from '../../components/Buttons/LoginButton';
import { ShowPassword } from '../../components/LoginComponents/ShowPassword';
import { TitleForForms } from '../../components/LoginComponents/TitleForForms';
import { SeparatorWithoutText } from '../../components/UI/Separator';
import { TextInputWithoutTitle } from '../../components/Inputs/TextInput';
import { useDispatch } from 'react-redux';
import { getAuthentication } from '../../redux/slices/auth/thunks';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const dataToSend = { correo: data.email, password: data.password }
        dispatch(getAuthentication(dataToSend, navigate));
    }

    return (
        <section className="bg-orange-400 flex min-h-screen">

            <div className="m-auto">

                <div className="bg-gray-700 px-12 py-16 rounded-xl text-white max-w-xl w-screen">

                    <TitleForForms
                        title={'Bienvenido a'} titleEmphasis={'Signando'} colorTitle={'text-orange-400'}
                        subTitle={'Ingresa las credenciales de tu licencia'}
                    />

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <TextInputWithoutTitle
                            inputName={'email'} inputType={'email'}
                            placeholder={'Correo Electronico'} keyPressEvent={() => { }}
                            registerForm={{ ...register("email", { required: true, pattern: /^\S+@\S+$/i }) }}
                            customClassName={'mt-10'}
                        />

                        <div className="py-2 mt-5">
                            <div className="relative">

                                <TextInputWithoutTitle
                                    inputName={'password'} inputType={(!showPassword) ? 'password' : 'text'}
                                    placeholder={'Contraseña'} keyPressEvent={() => { }}
                                    registerForm={{ ...register("password", { required: true, maxLength: 15 }) }}
                                />

                                <ShowPassword setShowPassword={setShowPassword} showPassword={showPassword} />
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            {/* <label>
                                <input type="checkbox" className="rounded-lg" />
                                <span className="py-2 text-lg white leading-snug"> Recordarme </span>
                            </label> */}

                            <LoginLinks title={'Olvidaste tu contraseña?'} url={'/auth/reset-password'} idType={1} />
                        </div>

                        <LoginButton title={'Iniciar Sesion'} type={'submit'} />

                    </form>

                    <div className="mt-10">
                        <SeparatorWithoutText color={'border-blue-400'} />
                    </div>

                    <LoginLinks title={'No tienes una cuenta? Registrate'} url={'/auth/register'} clssName={'mt-7'} idType={0} />
                    <LoginLinks title={'Necesitas Ayuda?'} url={'/auth/help-page'} idType={0} />

                </div>

            </div >

        </section >
    )
}
