import { HiReply } from "react-icons/hi"
import { BackButtonLogin } from "../components/Buttons/BackButton"
import { TitleForForms } from "../components/LoginComponents/TitleForForms"
import { SeparatorWithoutText } from "../components/UI/Separator"
import { backtoLogin } from "../helpers/redirectTo"

export const HelpPage = () => {
    return (
        <section className="bg-orange-400 flex min-h-screen">

            <div className="m-auto">

                <div className="bg-gray-700 px-12 py-16 rounded-xl text-white max-w-3xl w-screen">

                    <BackButtonLogin icon={<HiReply />} actionMethod={() => { backtoLogin('/auth/login') }} />

                    <TitleForForms
                        title={'Seccion de Ayuda'} titleEmphasis={'Signalar'} colorTitle={'text-orange-400'}
                        subTitle={'Selecciona el Tema en el que quieres mas informacion'}
                    />

                    <SeparatorWithoutText color={'border-orange-400'} />

                </div>

            </div>

        </section>
    )
}
