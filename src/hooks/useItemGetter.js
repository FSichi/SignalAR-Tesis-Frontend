import { useEffect, useState, useCallback } from "react";

export const useItemGetterHook = (idParam, functionGetter, dataFromDB) => {

    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getItem = useCallback(async () => {
        try {
            const item = await functionGetter(idParam, dataFromDB);
            setItem(item);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, [idParam, functionGetter, dataFromDB]);

    useEffect(() => {
        getItem();
    }, [getItem]);

    return { item, isLoading, error };
};