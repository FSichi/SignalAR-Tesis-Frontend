import { Table, TableBody, TableContainer, TableRow } from '@mui/material';
import { TableCellActionComponent, TableCellBackgroundComponent, TableCellComponent } from '../../components/Table/TableCellComponents';
import { TableHeaderComponent } from '../../components/Table/TableHeaderComponent';
import { TableRowPagination } from '../../components/Table/TableRowComponents';
import { seccionesData } from '../../data/secciones';
import { useTablePaginationHook } from "../../hooks/useTablePagination";
import { getAreaBackground, getEstadoEvaluacionBackground, getSeccionByID } from '../../helpers/getterOptionsForData';
import { useSelector } from 'react-redux';


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
    const { progresoEvaluaciones } = useSelector(state => state.progreso)
    const progresoEvaluacion = progresoEvaluaciones.filter(p => p.evaluacion === evaluacion.id)[0];
    const seccion = getSeccionByID(evaluacion.seccion, seccionesData);

    return (
        <TableRow key={evaluacion.id}>

            <TableCellComponent
                data={evaluacion.nombreEvaluacion}
                classNameCustom={evaluacionesTableStyles.nombreEvaluacion} centerTextCell
            />

            <TableCellBackgroundComponent
                data={seccion.nombre} customWidth={290}
                customBackgroundStyles={'rgb(96 165 250)'}
            />

            <TableCellBackgroundComponent
                data={seccion.area}
                customWidth={135}
                customBackgroundStyles={getAreaBackground(seccion.area)}
            />

            <TableCellBackgroundComponent
                data={progresoEvaluacion?.progreso ?? 'PENDIENTE'}
                customWidth={175}
                customBackgroundStyles={getEstadoEvaluacionBackground(progresoEvaluacion?.progreso ?? 'PENDIENTE')}
            />

            {progresoEvaluacion?.progreso != "APROBADA" ? 
                <TableCellActionComponent
                    title={'Realizar'} color={'indigo-500'} linkAction={`../evaluacion/resolver/${evaluacion.id}`}
                />
                :
                <div></div>
            }
            

        </TableRow>
    )
}
