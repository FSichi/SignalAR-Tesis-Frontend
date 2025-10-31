import { TableRow, TablePagination } from '@mui/material';

export const TableRowPagination = ({ count, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage }) => {
    return (
        <TableRow className='border-t-2 border-gray-900 dark:border-gray-900'>
            <TablePagination
                component='td' count={count}
                rowsPerPage={rowsPerPage} page={page} rowsPerPageOptions={[5, 10, 15, 20]}
                onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableRow>
    )
}
