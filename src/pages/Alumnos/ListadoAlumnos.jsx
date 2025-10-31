import { useDispatch, useSelector } from "react-redux";
import { MessageDataCard } from "../../components/Cards/MessageDataCard";
import { FilterTableWithoutSelectors } from "../../components/Filter/FilterTableDataComponent";
import { getAlumnosByName } from "../../helpers/getterOptionsForData";
import { useFilterHook } from "../../hooks/useFilter";
import { TableListAlumnos } from "./TableListAlumnos"
import { useEffect } from "react";
import { getAlumnosList } from "../../redux/slices/alumnos/thunks";
import { useState } from "react";
import { LoadingScreen } from "../LoadingSpinners";
import { useNavigate } from "react-router-dom";

export const ListadoAlumnos = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { alumnosList, isLoading } = useSelector(state => state.alumnos);

    const [alumnosListState, setAlumnosListState] = useState([]);

    const {
        search, handleInputChange,
        dataFilter: alumnosFilter, hasSearchQuery, hasFilteredData: hasFilteredAlumnos
    } = useFilterHook(alumnosListState, getAlumnosByName);

    useEffect(() => {
        dispatch(getAlumnosList(navigate));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setAlumnosListState(alumnosList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(alumnosList)]);

    if (isLoading) { return (<LoadingScreen />) }

    return (
        <section>

            <FilterTableWithoutSelectors
                title={'Listado de Alumnos'} placeholderText={'Nombre Alumno'}
                search={search} handleInputChange={handleInputChange}
            />

            <div className="mt-2 overflow-x-auto">

                {(alumnosListState.length === 0)
                    ? <MessageDataCard message={'No Existen Alumnos Asociados a este docente'} type={'error'} />
                    : <>
                        {(!hasSearchQuery) && <TableListAlumnos alumnosList={alumnosListState} />}

                        {(hasSearchQuery && hasFilteredAlumnos) && <TableListAlumnos alumnosList={alumnosFilter} />}

                        {(hasSearchQuery && !hasFilteredAlumnos) && <MessageDataCard message={'No Existe el Alumno que buscas'} type={'error'} />}
                    </>
                }
                
            </div>

        </section>
    )
}
