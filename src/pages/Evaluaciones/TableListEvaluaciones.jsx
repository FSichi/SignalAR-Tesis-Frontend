import { Table, TableBody, TableContainer, TableRow } from '@mui/material';
import { TableCellActionComponent, TableCellBackgroundComponent, TableCellComponent } from '../../components/Table/TableCellComponents';
import { TableHeaderComponent } from '../../components/Table/TableHeaderComponent';
import { TableRowPagination } from '../../components/Table/TableRowComponents';

import { useTablePaginationHook } from "../../hooks/useTablePagination";
import { getAreaBackground, getEstadoEvaluacionBackground } from '../../helpers/getterOptionsForData';


const headerTableEvaluacionesData = ['LECCION A EVALUAR', 'SECCION', 'AREA', 'ESTADO', 'ACCIONES'];

const evaluacionesTableStyles = {
    headerTable: 'bg-gray-800 border-b-2 border-gray-900',
    nombreEvaluacion: 'text-gray-100 text-xl',
};

export const TableListEvaluaciones = ({ evaluacionesList }) => {

    const { page, handleChangePage, rowsPerPage, handleChangeRowsPerPage } = useTablePaginationHook(5);

    return (
        <TableContainer className='rounded-xl' style={{ maxWidth: 2000 }}>

            <Table className='table-styles'>

                <TableHeaderComponent headerData={headerTableEvaluacionesData} customClassName={evaluacionesTableStyles.headerTable} />

                <TableBody className='bg-gray-700'>

                    {evaluacionesList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                        <TableRowEvaluaciones evaluacion={row} key={i} />
                    ))}

                    <TableRowPagination
                        count={evaluacionesList.length} page={page} rowsPerPage={rowsPerPage}
                        handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage}
                    />

                </TableBody>

            </Table>

        </TableContainer>
    )
}

export const TableRowEvaluaciones = ({ evaluacion }) => {
    return (
        <TableRow key={evaluacion.id}>

            <TableCellComponent
                data={evaluacion.nombreEvaluacion}
                classNameCustom={evaluacionesTableStyles.nombreEvaluacion} centerTextCell
            />

            <TableCellBackgroundComponent
                data={evaluacion.seccion} customWidth={290}
                customBackgroundStyles={'rgb(96 165 250)'}
            />

            <TableCellBackgroundComponent
                data={evaluacion.area}
                customWidth={135}
                customBackgroundStyles={getAreaBackground(evaluacion.area)}
            />

            <TableCellBackgroundComponent
                data={evaluacion.estado}
                customWidth={135}
                customBackgroundStyles={getEstadoEvaluacionBackground(evaluacion.estado)}
            />

            <TableCellActionComponent
                title={'Realizar'} color={'indigo-500'} linkAction={`../evaluacion/resolver/${evaluacion.id}`}
            />

        </TableRow>
    )
}
