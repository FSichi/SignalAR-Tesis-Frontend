import { useSelector } from "react-redux";
import { MessageDataCard } from "../../components/Cards/MessageDataCard";
import { FilterTableWithoutSelectors } from "../../components/Filter/FilterTableDataComponent";
import { evaluacionesData } from "../../data/evaluaciones";
import { getEvaluacionesByName } from "../../helpers/getterOptionsForData";
import { useFilterHook } from "../../hooks/useFilter";
import { TableListEvaluaciones } from "./TableListEvaluaciones";

export const ListarEvaluaciones = () => {
    const { progresoLecciones } = useSelector(state => state.progreso);

    const evaluacionesDisponibles = evaluacionesData.filter(e => {
        const progresoLeccionAsociada = progresoLecciones.filter(p => p.leccion == e.leccionAsociada)[0];
        if (progresoLeccionAsociada && progresoLeccionAsociada.progreso === "COMPLETADO")
            return true;
        return false;
    });

    const {
        search, handleInputChange, dataFilter: evaluacionesFilter, hasSearchQuery, hasFilteredData: hasFilteredEvaluaciones
    } = useFilterHook(evaluacionesDisponibles, getEvaluacionesByName);

    return (
        <section>

            <FilterTableWithoutSelectors
                title={'Listado de Evaluaciones'} placeholderText={'Nombre Evaluacion'}
                search={search} handleInputChange={handleInputChange}
            />

            <div className="mt-2 overflow-x-auto">

                {(evaluacionesDisponibles.length === 0)
                    ? <MessageDataCard message={'No existen evaluaciones disponibles, realiza lecciones primero!'} type={'error'} />
                    : <>

                        {(!hasSearchQuery) && <TableListEvaluaciones evaluacionesList={evaluacionesDisponibles} />}

                        {(hasSearchQuery && hasFilteredEvaluaciones) && <TableListEvaluaciones evaluacionesList={evaluacionesFilter} />}

                        {(hasSearchQuery && !hasFilteredEvaluaciones) && <MessageDataCard message={'No Existe la Evaluacion que buscas'} type={'error'} />}
                    </>
                }

            </div>

        </section>
    )
}
