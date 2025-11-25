import { useEffect, useState } from "react"
import { DashboardParticular } from "./DashboardParticular";
import { DashboardProfesional } from "./DashboardProfesional";
import { UserRoles } from "../../helpers/Enums";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardInfo } from "../../redux/slices/dashboard/thunks";
import { fetchOrCreateProgresoAlumno, getProgresoEvaluacionesByAlumno, getProgresoLeccionesByAlumno, getProgresoSeccionesByAlumno } from "../../redux/slices/progreso";

const roleLicenseMap = {
    [UserRoles.ADMIN_ROLE]: 2,
    [UserRoles.PROFESIONAL_ROLE]: 2,
    [UserRoles.PARTICULAR_ROLE]: 1
};

export const Dashboard = () => {

    // Tomar licencia del usuario y renderizar Dashboard que corresponda
    const [licenseType, setLicenseType] = useState(0); // 0 = Sin Renderizar || 1 = Particular || 2 = Profesional

    const { sessionData } = useSelector(state => state.auth);

    useEffect(() => {
        const mappedLicenseType = roleLicenseMap[sessionData?.user?.rol] || 0;
        setLicenseType(mappedLicenseType);
    }, [sessionData]);
    
    return (
        <>
            {(licenseType === 1) && <DashboardParticular />}
            {(licenseType === 2) && <DashboardProfesional />}
        </>
    )
}
