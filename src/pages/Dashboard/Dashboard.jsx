import { useEffect, useState } from "react"
import { DashboardParticular } from "./DashboardParticular";
import { DashboardProfesional } from "./DashboardProfesional";

export const Dashboard = () => {

    // Tomar licencia del usuario y renderizar Dashboard que corresponda
    const [licenseType, setLicenseType] = useState(0); // 0 = Sin Renderizar || 1 = Particular || 2 = Profesional

    useEffect(() => {
        setLicenseType(2);
    }, [])

    return (
        <>
            {(licenseType === 1) && <DashboardParticular />}
            {(licenseType === 2) && <DashboardProfesional />}
        </>
    )
}
