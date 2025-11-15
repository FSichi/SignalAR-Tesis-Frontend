import { useParams } from 'react-router';
import Tabs from '@mui/base/Tabs';
import TabPanel from '@mui/base/TabPanel';
import { DatosAlumno, HistorialAcademico, RegistroActividad, Resumen } from './Views';
import { TabsListComponent } from '../../components/Tabs/TabsListComponent';
import { useItemGetterHook } from '../../hooks/useItemGetter';
import { getAlumnoByID } from '../../helpers/getterOptionsForData';
import { LoadingSpinnerWhite } from '../../components/LoadingSpinner/LoadingSpinner';
import { ErrorCardWithAction } from '../../components/Cards/ErrorCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAlumnosList } from '../../redux/slices/alumnos/thunks';
import { useEffect } from 'react';

// const tabViewAlumnoOptions = ['RESUMEN', 'DATOS DEL ALUMNO', 'HISTORIAL ACADEMICO', 'REGISTRO DE ACTIVIDAD'];
const tabViewAlumnoOptions = ['RESUMEN', 'DATOS DEL ALUMNO', 'HISTORIAL ACADEMICO'];

export const VisualizarAlumno = () => {

    const { idAlumno } = useParams();
    const { alumnosList } = useSelector(state => state.alumnos);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!alumnosList || alumnosList.length < 1) {
            dispatch(getAlumnosList())
        }
    }, [alumnosList])

    const { item: alumno, isLoading, error } = useItemGetterHook(idAlumno, getAlumnoByID, alumnosList);

    const tabContentAlumnoOptions = [
        { value: 0, component: <Resumen alumno={alumno} /> },
        { value: 1, component: <DatosAlumno alumno={alumno} /> },
        { value: 2, component: <HistorialAcademico alumno={alumno} /> },
        // { value: 3, component: <RegistroActividad alumno={alumno} /> },
    ];

    if (isLoading) { return <LoadingSpinnerWhite />; }

    if (error) { return <ErrorFetchingAlumno />; }

    return (
        <>
            {alumnosList &&
                <Tabs defaultValue={0}>

                    <TabsListComponent dataTabOptions={tabViewAlumnoOptions} tabType={'h'} />

                    {tabContentAlumnoOptions.map(({ value, component }) => (
                        <TabPanel value={value} className='tab-panel-h' key={value}>
                            {component}
                        </TabPanel>
                    ))}

                </Tabs>
            }
        </>
    )
}

const ErrorFetchingAlumno = () => (
    <ErrorCardWithAction
        type={'error'} message={'Ocurrio un error al obtener los datos del Alumno'}
        linkAction={'/app/alumnos/listado'} linkTitle={'Volver al Listado de Alumnos'}
    />
);