import { Table, TableBody, TableContainer, TableRow } from '@mui/material';
import { TableCellActionComponent, TableCellBackgroundComponent, TableCellComponent } from '../../components/Table/TableCellComponents';
import { TableHeaderComponent } from '../../components/Table/TableHeaderComponent';
import { useTablePaginationHook } from '../../hooks/useTablePagination';
import { colorDiscapacidad, areasSecciones } from '../../helpers/Enums';
import { TableRowPagination } from '../../components/Table/TableRowComponents';
import { useSelector } from 'react-redux';

const headerTableSeccionesData = ['NOMBRE', 'AREA', 'CANTIDAD LECCIONES', 'PROGRESO', 'ACCIONES'];

export const TableListSecciones = ({ seccionesList }) => {

    const { page, handleChangePage, rowsPerPage, handleChangeRowsPerPage } = useTablePaginationHook(5);
    const { progresoSecciones } = useSelector(state => state.progreso);

    return (
        <TableContainer className='rounded-xl' style={{ maxWidth: 2000 }}>

            <Table className='table-styles'>

                <TableHeaderComponent
                    headerData={headerTableSeccionesData}
                    customClassName={'bg-gray-800 border-b-2 border-gray-900'}
                />

                <TableBody className='bg-gray-700'>

                    {seccionesList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
                        const progreso = progresoSecciones.filter(p => p.seccion == row.id)[0];
                        return Array.isArray(progresoSecciones) && (
                            <TableRowSecciones seccion={row} progreso={progreso} key={i} />
                        )
                    })}

                    <TableRowPagination
                        count={seccionesList.length} page={page} rowsPerPage={rowsPerPage}
                        handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage}
                    />

                </TableBody>

            </Table>

        </TableContainer>
    )
}

export const TableRowSecciones = ({ seccion, progreso }) => {
    return (
        <TableRow key={seccion.id}>

            <TableCellComponent data={seccion.nombre} classNameCustom={'text-gray-100 text-xl'} />

            <TableCellBackgroundComponent
                data={seccion.area} customWidth={135}
                customBackgroundStyles={(
                    (seccion.area === areasSecciones.MATEMATICAS && colorDiscapacidad.LEVE) ||
                    (seccion.area === areasSecciones.LENGUA && colorDiscapacidad.MODERADA) ||
                    (seccion.area === areasSecciones.CSOCIALES && colorDiscapacidad.SEVERA) ||
                    (seccion.area === areasSecciones.CNATURALES && colorDiscapacidad.PROFUNDA)
                )}
            />

            <TableCellComponent data={seccion.cantidadLecciones} classNameCustom={'text-gray-100 text-xl'} centerTextCell />

            <TableCellComponent data={`${((progreso?.leccionesCompletadas ?? 0) / seccion.cantidadLecciones * 100).toFixed(1)}%`} classNameCustom={'text-gray-100 text-xl'} centerTextCell />

            <TableCellActionComponent
                title={'Visualizar'} color={'indigo-500'} linkAction={`../lecciones/visualizar/${seccion.id}`}
            />

        </TableRow>
    )
}

