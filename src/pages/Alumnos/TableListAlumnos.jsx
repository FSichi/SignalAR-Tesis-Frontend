import { Table, TableBody, TableContainer, TableRow } from '@mui/material';
import { TableCellBackgroundComponent, TableCellComponent, TableCellMultiActionComponent, TableCellMultiComponent } from '../../components/Table/TableCellComponents';
import { TableHeaderComponent } from '../../components/Table/TableHeaderComponent';
import { useTablePaginationHook } from '../../hooks/useTablePagination';
import { getDiscapacidadBackground } from '../../helpers/getterOptionsForData';
import { TableRowPagination } from '../../components/Table/TableRowComponents';
import { useDispatch } from 'react-redux';
import { setAlumnoActivo } from '../../redux/slices/alumnos/thunks';

const headerTableAlumnosData = ['APELLIDO Y NOMBRE', 'PADRE / TUTOR', 'ESCUELA', 'DISCAPACIDAD', 'ACCIONES'];

const alumnoTableStyles = {
    headerTable: 'bg-gray-800 border-b-2 border-gray-900',
    apellidoyNombre: 'text-gray-100 text-xl',
    tutor: 'text-gray-100 text-xl',
    parentesco: 'text-cyan-500 text-xl',
    escuela: 'text-gray-100 text-xl',
};

export const TableListAlumnos = ({ alumnosList }) => {

    const { page, handleChangePage, rowsPerPage, handleChangeRowsPerPage } = useTablePaginationHook(5);

    return (
        <TableContainer className='rounded-xl' style={{ maxWidth: 2000 }}>

            <Table className='table-styles'>

                <TableHeaderComponent headerData={headerTableAlumnosData} customClassName={alumnoTableStyles.headerTable} />

                <TableBody className='bg-gray-700'>

                    {alumnosList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                        <TableRowAlumnos alumno={row} key={i} />
                    ))}

                    <TableRowPagination
                        count={alumnosList.length} page={page} rowsPerPage={rowsPerPage}
                        handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage}
                    />

                </TableBody>

            </Table>

        </TableContainer>
    )
}

export const TableRowAlumnos = ({ alumno }) => {

    const dispatch = useDispatch();

    const establecerAlumnoActivo = (id) => {
        dispatch(setAlumnoActivo(id));
    }

    return (
        <TableRow key={alumno.id}>

            <TableCellComponent data={alumno.nombreCompleto} classNameCustom={alumnoTableStyles.apellidoyNombre} />

            <TableCellMultiComponent
                dataTitle={alumno.nombreTutor} dataSubTitle={alumno.parentesco}
                classNameCustomTitle={alumnoTableStyles.tutor} classNameCustomSubTitle={alumnoTableStyles.parentesco}
            />

            <TableCellComponent data={alumno.escuela} classNameCustom={alumnoTableStyles.escuela} centerTextCell />

            <TableCellBackgroundComponent
                data={alumno.gradoHipoacusia} customWidth={135}
                customBackgroundStyles={getDiscapacidadBackground(alumno.gradoHipoacusia)}
            />

            <TableCellMultiActionComponent
                title1={'Establecer Activo'} color1={'indigo-500'} type1={'button'} action1={() => { establecerAlumnoActivo(alumno._id) }}
                title2={'Visualizar'} color2={'cyan-500'} type2={'link'} action2={`../alumnos/visualizar/${alumno._id}`}
            />

        </TableRow>
    )
}
