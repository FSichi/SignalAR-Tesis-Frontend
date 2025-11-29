import { LicenceTypeButton } from "../../components/Buttons/LicenceTypeButton"
import { LoginButtonDisabled } from "../../components/Buttons/LoginButton"
import { LoginLinks } from "../../components/Links/LoginLinks"
import { TitleForForms } from "../../components/LoginComponents/TitleForForms"
import { SeparatorWithoutText } from "../../components/UI/Separator"
import { InfoForLicences } from "../../components/UI/Info"
import { ActionButton } from "../../components/Buttons/ActionButton"

// eslint-disable-next-line react/prop-types
export const SelectLicence = ({ licenceType, changeLicenceSelected, changeRegisterPageComponent }) => {
    return (
        <div className="bg-gray-700 px-12 py-10 rounded-xl text-white max-w-xl mt-5 mb-5">

            <TitleForForms
                title={'Bienvenido a'} titleEmphasis={'Signalar'} colorTitle={'text-orange-400'}
                subTitle={'Necesitamos cierta informacion para la creacion de tu licencia'}
            />

            <SeparatorWithoutText color={'border-orange-400'} />

            <div className="text-center mt-7">

                <div className="flex justify-center">
                    <h2 className="text-2xl">Tipo de Licencia a utilizar ? </h2>
                    <div className="ml-3 px-2 -mt-2">
                        <InfoForLicences text={'Hola'} />
                    </div>
                </div>

                <div className="flex justify-center">
                    <div>
                        <LicenceTypeButton title={'Personal'} licenceType={licenceType} changeLicenceSelected={changeLicenceSelected} idType={1} />
                        <LicenceTypeButton title={'Profesional Particular'} licenceType={licenceType} changeLicenceSelected={changeLicenceSelected} idType={2} />
                        <LicenceTypeButton title={'Institucional'} licenceType={licenceType} changeLicenceSelected={changeLicenceSelected} idType={3} />
                    </div>
                </div>

                {
                    (licenceType === 0)
                        ? <LoginButtonDisabled title={'Siguiente'} />
                        : <ActionButton actionMethod={changeRegisterPageComponent} title={'Siguiente'} type={'button'} />
                }

                <div className="mt-10">
                    <SeparatorWithoutText color={'border-blue-400'} />
                </div>

                <div className="mt-5">
                    <LoginLinks title={'Ya tienes una Licencia? Inicia Sesion'} url={'/auth/login'} idType={0} />
                    {/* <LoginLinks title={'Necesitas Ayuda?'} url={'/auth/help-page'} clssName={'mt-5'} idType={0} /> */}
                </div>

            </div>
        </div>
    )
}
