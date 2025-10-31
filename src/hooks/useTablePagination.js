import { useState } from 'react';

export const useTablePaginationHook = (amountRows) => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(amountRows);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage };
}