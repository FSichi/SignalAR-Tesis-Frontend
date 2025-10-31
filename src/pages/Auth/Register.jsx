import { useState } from "react"
import { SelectLicence } from "./SelectLicence";
import { PersonalLicence } from "./PersonalLicence";
import { ProfesionalPart } from "./ProfesionalPart";
import { ProfesionalInst } from "./ProfesionalInst";

export const Register = () => {

    const [licenceSelected, setLicenceSelected] = useState(false); // False - No selecciono Ninguna || True - Selecciono una licencia
    const [licenceType, setLicenceType] = useState(0); // 0 - Ninguna || 1 - Personal || 2 - Profesional Particular || 3 - Profesional Institucional
    const [pageComponent, setPageComponent] = useState(0); // 0 - Seleccionar Cuenta || 1 - Personal Pag || 2 - ProfPar Pag   || 3 - ProfIns Pag

    const changeLicenceSelected = (id) => {
        setLicenceType(id);
        setLicenceSelected(true);
    };

    const changeRegisterPageComponent = () => {
        if (!licenceSelected) return;

        const pageComponentMap = {
            1: 1,
            2: 2,
            3: 3,
            default: 0,
        };

        const selectedPageComponent = pageComponentMap[licenceType] || pageComponentMap.default;
        setPageComponent(selectedPageComponent);
    };

    return (
        <section className="bg-orange-400 flex min-h-screen">

            <div className="m-auto">

                {
                    (pageComponent === 0) &&
                    <SelectLicence
                        licenceType={licenceType} changeLicenceSelected={changeLicenceSelected}
                        changeRegisterPageComponent={changeRegisterPageComponent}
                    />
                }

                {(pageComponent === 1) && <PersonalLicence setPage={setPageComponent} />}

                {(pageComponent === 2) && <ProfesionalPart setPage={setPageComponent} />}

                {(pageComponent === 3) && <ProfesionalInst setPage={setPageComponent} />}

            </div>

        </section>
    )
}
