import { getHasParamsFilterOptions } from '../helpers/getterOptionsForData';
import { useFormHook } from './useForm'

export const useFilterHook = (data, functionFilter) => {

    const [formValues, handleInputChange] = useFormHook({
        search: ''
    });

    const { search } = formValues;

    const dataFilter = functionFilter(search, data);

    const { hasSearchQuery, hasFilteredData } = getHasParamsFilterOptions(search, dataFilter);

    return { search, handleInputChange, hasSearchQuery, hasFilteredData, dataFilter };
}