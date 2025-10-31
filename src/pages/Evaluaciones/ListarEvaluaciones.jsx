import { MessageDataCard } from "../../components/Cards/MessageDataCard";
import { FilterTableWithoutSelectors } from "../../components/Filter/FilterTableDataComponent";
import { evaluacionesData } from "../../data/evaluaciones";
import { getEvaluacionesByName } from "../../helpers/getterOptionsForData";
import { useFilterHook } from "../../hooks/useFilter";
import { TableListEvaluaciones } from "./TableListEvaluaciones";

export const ListarEvaluaciones = () => {

    const {
        search, handleInputChange, dataFilter: evaluacionesFilter, hasSearchQuery, hasFilteredData: hasFilteredEvaluaciones
    } = useFilterHook(evaluacionesData, getEvaluacionesByName);

    return (
        <section>

            <FilterTableWithoutSelectors
                title={'Listado de Evaluaciones'} placeholderText={'Nombre Evaluacion'}
                search={search} handleInputChange={handleInputChange}
            />

            <div className="mt-2 overflow-x-auto">

                {(!hasSearchQuery) && <TableListEvaluaciones evaluacionesList={evaluacionesData} />}

                {(hasSearchQuery && hasFilteredEvaluaciones) && <TableListEvaluaciones evaluacionesList={evaluacionesFilter} />}

                {(hasSearchQuery && !hasFilteredEvaluaciones) && <MessageDataCard message={'No Existe la Evaluacion que buscas'} type={'error'} />}

            </div>

        </section>
    )
}
