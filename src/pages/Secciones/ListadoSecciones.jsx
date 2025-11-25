import { useState } from "react";
import { MessageDataCard } from "../../components/Cards/MessageDataCard";
import { FilterTableWithSelectors } from "../../components/Filter/FilterTableDataComponent";
import { seccionesData } from "../../data/secciones";
import { filterSectionsByArea, getSeccionesByName } from "../../helpers/getterOptionsForData";
import { useFilterHook } from "../../hooks/useFilter";
import { TableListSecciones } from "./TableListSecciones";
import { useEffect } from "react";


export const ListadoSecciones = () => {

    const [optionValueArea, setOptionValueArea] = useState({
        label: 'Todas',
        value: '1'
    });
    
    const [sectionFilterlist, setSectionFilterlist] = useState([]);

    useEffect(() => {
        setSectionFilterlist(filterSectionsByArea(optionValueArea.label, seccionesData))
    }, [optionValueArea])
    

    const {
        search, handleInputChange, dataFilter: seccionesFilter, hasSearchQuery, hasFilteredData: hasFilteredSecciones
    } = useFilterHook(sectionFilterlist, getSeccionesByName);

    return (
        <section>

            <FilterTableWithSelectors
                title={'Listado de Secciones'}
                search={search} handleInputChange={handleInputChange}
                changeSelect={setOptionValueArea}
            />

            <div className="mt-2 overflow-x-auto">

                {(!hasSearchQuery) && <TableListSecciones seccionesList={sectionFilterlist} />}

                {(hasSearchQuery && hasFilteredSecciones) && <TableListSecciones seccionesList={seccionesFilter} />}

                {(hasSearchQuery && !hasFilteredSecciones) && <MessageDataCard message={'No Existe la sección que busca'} type={'error'} />}

            </div>

        </section>
    )
}

