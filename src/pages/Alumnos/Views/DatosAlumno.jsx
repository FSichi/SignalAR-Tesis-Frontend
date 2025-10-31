import Tabs from '@mui/base/Tabs';
import TabPanel from '@mui/base/TabPanel';
import { TabsListComponent } from "../../../components/Tabs/TabsListComponent"
import { TextInputWithTitleDisabled } from '../../../components/Inputs/TextInput';
import { SeparatorWithoutText } from '../../../components/UI/Separator';

const tabViewAlumnoOptions = ['Datos Alumno', 'Datos Tutor'];

export const DatosAlumno = ({ alumno }) => {

    const tabContentAlumnoOptions = [
        { value: 0, component: <DatosAlumnoView alumno={alumno} /> },
        { value: 1, component: <DatosTutorView alumno={alumno} /> },
    ];

    return (
        <section className=" text-gray-100 mt-3"> {/* bg-gray-900 text-gray-100 rounded-2xl p-4 mt-3 */}

            <Tabs defaultValue={0} className='flex'>

                <div className='w-1/3'>
                    <TabsListComponent dataTabOptions={tabViewAlumnoOptions} tabType={'v'} />
                </div>

                <div className='w-2/3 ml-5'>
                    {tabContentAlumnoOptions.map(({ value, component }) => (
                        <TabPanel value={value} className='tab-panel-h' key={value}>
                            {component}
                        </TabPanel>
                    ))}
                </div>
            </Tabs>

        </section>
    )
}


const DatosAlumnoView = ({ alumno }) => {
    return (
        <div className='bg-gray-800 rounded-lg p-5'>

            <h1 className="text-center text-3xl">Ficha del Alumno</h1>
            <SeparatorWithoutText color={'border-orange-400'} />

            <TextInputWithTitleDisabled
                inputValue={alumno.nombreCompleto}
                inputTitle={'Nombre Completo'}
                inputName={'name'}
            />

            <TextInputWithTitleDisabled
                inputValue={alumno.edad}
                inputTitle={'Edad'}
                inputName={'edad'}
            />

            <TextInputWithTitleDisabled
                inputValue={alumno.gradoHipoacusia}
                inputTitle={'Tipo de Discapacidad'}
                inputName={'discapacidad'}
            />

            <TextInputWithTitleDisabled
                inputValue={alumno.escuela}
                inputTitle={'Escuela'}
                inputName={'escuela'}
            />

        </div>
    )
}

const DatosTutorView = ({ alumno }) => {
    return (
        <div className='bg-gray-800 rounded-lg p-5'>

            <h1 className="text-center text-3xl ">Ficha del Tutor del Alumno</h1>
            <SeparatorWithoutText color={'border-orange-400'} />

            <TextInputWithTitleDisabled
                inputValue={alumno.nombreTutor}
                inputTitle={'Nombre del Tutor'}
                inputName={'nameTutor'}
            />

            <TextInputWithTitleDisabled
                inputValue={alumno.parentesco}
                inputTitle={'Parentesco'}
                inputName={'parentesco'}
            />

            <TextInputWithTitleDisabled
                inputValue={alumno.telefonoTutor}
                inputTitle={'Numero de Tutor'}
                inputName={'numeroTutor'}
            />

            <TextInputWithTitleDisabled
                inputValue={alumno.correoTutor}
                inputTitle={'Correo de Contacto'}
                inputName={'correoTutor'}
            />

        </div>
    )
}
