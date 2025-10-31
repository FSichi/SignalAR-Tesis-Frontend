import { useForm } from "react-hook-form"
import { HiReply } from "react-icons/hi"
import { BackButtonLogin } from "../../components/Buttons/BackButton"
import { TitleForForms } from "../../components/LoginComponents/TitleForForms"
import { SeparatorWithoutText } from "../../components/UI/Separator"
import { LoginButton } from "../../components/Buttons/LoginButton"
import { NumberInputWithTitle, TextInputWithTitle } from "../../components/Inputs/TextInput"

export const ProfesionalInst = ({ setPage }) => {

    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <section className="bg-gray-700 px-12 py-10 rounded-xl text-white md:max-w-2xl xl:max-w-4xl w-screen mt-5 mb-5">

            <BackButtonLogin icon={<HiReply />} actionMethod={() => { setPage(0) }} />

            <TitleForForms
                title={'Cuenta'} titleEmphasis={'Profesional Institucional'} colorTitle={'text-green-400'}
                subTitle={'Datos para la confeccion de la Licencia'}
            />

            <SeparatorWithoutText color={'border-orange-400'} />

            <form className="text-center mt-2" onSubmit={handleSubmit(onSubmit)}>

                <div className="flex justify-between">

                    <TextInputWithTitle
                        inputName={'nameInstitucion'} inputType={'text'} inputTitle={'Nombre de la Institucion'}
                        placeholder={'Nombre...'} keyPressEvent={() => { }}
                        registerForm={{ ...register("nombreInstitucion", { required: true }) }}
                    />

                    <TextInputWithTitle
                        inputName={'siprosa'} inputType={'text'} inputTitle={'Habilitacion del SIPROSA'}
                        placeholder={'Numero SIPROSA'} keyPressEvent={() => { }}
                        registerForm={{ ...register("siprosa", { required: true }) }}
                        customContainerClassName={'ml-3'}
                    />

                </div>

                <div className="flex justify-between">

                    <TextInputWithTitle
                        inputName={'email'} inputType={'email'} inputTitle={'Correo Electronico'}
                        placeholder={'mail@email.com'} keyPressEvent={() => { }}
                        registerForm={{ ...register("email", { required: true, pattern: /^\S+@\S+$/i }) }}
                    />

                    <TextInputWithTitle
                        inputName={'phone'} inputType={'text'} inputTitle={'Telefono de Contacto'}
                        placeholder={'Telefono (+54)'} keyPressEvent={() => { }}
                        registerForm={{ ...register("telefono", { required: true }) }}
                        customContainerClassName={'ml-3'}
                    />

                </div>

                <div className="flex justify-between">

                    <NumberInputWithTitle
                        inputName={'cantProfesionales'} inputTitle={'Cantidad de Profesionales en la Institucion'}
                        placeholder={'0'} keyPressEvent={() => { }}
                        registerForm={{ ...register("cantidadProfesionales", { required: true }) }}
                    />
                    <NumberInputWithTitle
                        inputName={'cantLicencias'} inputTitle={'Cantidad de Licencias a Solicitar'}
                        placeholder={'0'} keyPressEvent={() => { }}
                        registerForm={{ ...register("cantidadLicencias", { required: true }) }}
                        customContainerClassName={'ml-3'}
                    />

                </div>

                <div className="mt-10">
                    <LoginButton actionMethod={() => { }} title={'Solicitar Licencia/s'} type={'submit'} />
                </div>

            </form>

        </section>
    )
}
