import { Table, TableBody, TableContainer, TableRow } from '@mui/material';
import { useTablePaginationHook } from "../../../hooks/useTablePagination";
import { TableHeaderComponent } from '../../../components/Table/TableHeaderComponent';
import { useItemGetterHook } from '../../../hooks/useItemGetter';
import { registrosActividadData } from '../../../data/registrosActividadAlumnos';
import { getRegistroActividadByAlumnoID } from '../../../helpers/getterOptionsForData';
import { LoadingSpinnerWhite } from '../../../components/LoadingSpinner/LoadingSpinner';
import { ErrorCardWithAction } from '../../../components/Cards/ErrorCard';
import { TableRowPagination } from '../../../components/Table/TableRowComponents';
import { TableCellBackgroundComponent } from '../../../components/Table/TableCellComponents';

const headerTableAlumnosData = ['FECHA'];

export const RegistroActividad = ({ alumno }) => {

    const { page, handleChangePage, rowsPerPage, handleChangeRowsPerPage } = useTablePaginationHook(5);
    const { item: registrosList, isLoading, error } = useItemGetterHook(alumno.id, getRegistroActividadByAlumnoID, registrosActividadData);

    if (isLoading) { return <LoadingSpinnerWhite />; }

    if (error) { return <ErrorFetchingRegistros />; }

    return (
        <section className="mt-2 overflow-x-auto w-3/5 mx-auto">
            <TableContainer className='rounded-xl' style={{ maxWidth: 2000 }}>

                <Table className='table-styles'>

                    <TableHeaderComponent
                        headerData={headerTableAlumnosData}
                        customClassName={'bg-gray-800 border-b-2 border-gray-900'}
                    />

                    <TableBody className='bg-gray-700'>

                        {registrosList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                            <TableRowRegistro registro={row} key={i} />
                        ))}

                        <TableRowPagination
                            count={registrosList.length} page={page} rowsPerPage={rowsPerPage}
                            handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage}
                        />

                    </TableBody>

                </Table>

            </TableContainer>

        </section>
    )
}

export const TableRowRegistro = ({ registro }) => {
    return (
        <TableRow key={registro.id}>

            <TableCellBackgroundComponent
                data={registro.fecha}
                customWidth={135}
                customBackgroundStyles={(
                    '#ffffff'
                )}
            />

        </TableRow>
    )
}

const ErrorFetchingRegistros = () => (
    <ErrorCardWithAction
        type={'error'} message={'Ocurrio un error al obtener los registros del Alumno'}
        linkAction={'/app/alumnos/listado'} linkTitle={'Volver al Listado de Alumnos'}
    />
);