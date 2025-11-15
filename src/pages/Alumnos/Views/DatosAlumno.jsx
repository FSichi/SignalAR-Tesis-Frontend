import Tabs from '@mui/base/Tabs';
import TabPanel from '@mui/base/TabPanel';
import { TabsListComponent } from "../../../components/Tabs/TabsListComponent"
import { TextInputWithTitleDisabled, TextInputWithTitle } from '../../../components/Inputs/TextInput';
import { SeparatorWithoutText } from '../../../components/UI/Separator';
import { Button } from '@mui/base';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAlumno } from '../../../redux/slices/alumnos/thunks';
import { discapacidad } from '../../../helpers/Enums';
import { ToastNotification } from '../../../components/Notifications/ToastNotification';
import { DiscapacidadOptions, ParentescoOptions } from '../../../helpers/OptionsSelect'

const tabViewAlumnoOptions = ['Datos Alumno', 'Datos Tutor'];

export const DatosAlumno = ({ alumno }) => {

    const dispatch = useDispatch();

    const [editMode, setEditMode] = useState(false);

    // Local editable version of alumno
    const [editableAlumno, setEditableAlumno] = useState(alumno);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditableAlumno(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        const requiredFields = [
            "nombreCompleto",
            "edad",
            "gradoHipoacusia",
            "escuela",
            'nombreTutor',
            'parentesco',
            'correoTutor',
            'telefonoTutor',
        ];

        const missing = requiredFields.some(field => {
            const v = editableAlumno[field];
            return v === null || v === undefined || v === "";
        });

        if (missing) {
            ToastNotification.fire('','Todos los campos son obligatiorios', 'error')
            return; // No continuar
        }

        dispatch(updateAlumno(editableAlumno, {sucessCallBack: ()=>{}}));
        setEditMode(false);
    };

    const tabContentAlumnoOptions = [
        {
            value: 0, component: <DatosAlumnoView
                alumno={editableAlumno}
                editMode={editMode}
                onChange={handleInputChange}
            />
        },
        {
            value: 1, component: <DatosTutorView
                alumno={editableAlumno}
                editMode={editMode}
                onChange={handleInputChange}
            />
        },
    ];

    return (
        <section className=" text-gray-100 mt-3"> {/* bg-gray-900 text-gray-100 rounded-2xl p-4 mt-3 */}

            <Tabs defaultValue={0} className='flex'>

                <div className='w-1/3'>
                    <TabsListComponent dataTabOptions={tabViewAlumnoOptions} tabType={'v'} />
                    <Button
                        className='tab-list-v'
                        style={{ margin: 20, width: 100 }}
                        onClick={() => editMode ? handleSave() : setEditMode(true)}
                    >
                        {editMode ? 'Guardar' : 'Editar'}
                    </Button>
                    {
                        editMode &&
                        <Button
                            className='tab-list-v'
                            style={{ margin: 20, width: 100 }}
                            onClick={() => { setEditMode(false); setEditableAlumno(alumno) }}
                        >
                            Cancelar
                        </Button>
                    }
                </div>

                <div className='w-2/3 ml-5'>
                    {tabContentAlumnoOptions.map(({ value, component }) => (
                        <TabPanel value={value} key={value}>
                            {component}
                        </TabPanel>
                    ))}
                </div>
            </Tabs>

        </section>
    )
}

const DatosAlumnoView = ({ alumno, editMode, onChange }) => {
    return (
        <div className='bg-gray-800 rounded-lg p-5'>
            <h1 className="text-center text-3xl">Ficha del Alumno</h1>
            <SeparatorWithoutText color={'border-orange-400'} />

            {editMode ? (
                <TextInputWithTitle
                    inputName="nombreCompleto"
                    inputTitle="Nombre Completo"
                    inputType="text"
                    placeholder=""
                    registerForm={{ value: alumno.nombreCompleto, onChange }}
                />
            ) : (
                <TextInputWithTitleDisabled
                    inputValue={alumno.nombreCompleto}
                    inputTitle="Nombre Completo"
                    inputName="nombreCompleto"
                />
            )}

            {editMode ? (
                <TextInputWithTitle
                    inputName="edad"
                    inputTitle="Edad"
                    inputType="number"
                    registerForm={{ value: alumno.edad, onChange }}
                />
            ) : (
                <TextInputWithTitleDisabled
                    inputValue={alumno.edad}
                    inputTitle="Edad"
                    inputName="edad"
                />
            )}

            {editMode ? (
                <TextInputWithTitle
                    inputName="gradoHipoacusia"
                    inputTitle="Tipo de Discapacidad"
                    inputType="select"
                    registerForm={{ value: alumno.gradoHipoacusia, onChange }}
                    inputSelectOptions={DiscapacidadOptions}
                />
            ) : (
                <TextInputWithTitleDisabled
                    inputValue={alumno.gradoHipoacusia}
                    inputTitle={'Tipo de Discapacidad'}
                    inputName={'gradoHipoacusia'}
                />
            )}

            {editMode ? (
                <TextInputWithTitle
                    inputName="escuela"
                    inputTitle="Escuela"
                    inputType="text"
                    registerForm={{ value: alumno.escuela, onChange }}
                />
            ) : (
                <TextInputWithTitleDisabled
                    inputValue={alumno.escuela}
                    inputTitle={'Escuela'}
                    inputName={'escuela'}
                />
            )}

        </div>
    );
};

const DatosTutorView = ({ alumno, editMode, onChange }) => {
    return (
        <div className='bg-gray-800 rounded-lg p-5'>

            <h1 className="text-center text-3xl ">Ficha del Tutor del Alumno</h1>
            <SeparatorWithoutText color={'border-orange-400'} />

            {editMode ? (
                <TextInputWithTitle
                    inputName="nombreTutor"
                    inputTitle="Nombre del Tutor"
                    inputType="text"
                    registerForm={{ value: alumno.nombreTutor, onChange }}
                />
            ) : (
                <TextInputWithTitleDisabled
                    inputValue={alumno.nombreTutor}
                    inputTitle={'Nombre del Tutor'}
                    inputName={'nombreTutor'}
                />
            )}
            {editMode ? (
                <TextInputWithTitle
                    inputName="parentesco"
                    inputTitle="Parentesco"
                    inputType="select"
                    registerForm={{ value: alumno.parentesco, onChange }}
                    inputSelectOptions={ParentescoOptions}
                />
            ) : (
                <TextInputWithTitleDisabled
                    inputValue={alumno.parentesco}
                    inputTitle={'Parentesco'}
                    inputName={'parentesco'}
                />
            )}
            {editMode ? (
                <TextInputWithTitle
                    inputName="telefonoTutor"
                    inputTitle="Telefono del Tutor"
                    inputType="text"
                    registerForm={{ value: alumno.telefonoTutor, onChange }}
                />
            ) : (
                <TextInputWithTitleDisabled
                    inputValue={alumno.telefonoTutor}
                    inputTitle={'Telefono del Tutor'}
                    inputName={'telefonoTutor'}
                />
            )}
            {editMode ? (
                <TextInputWithTitle
                    inputName="correoTutor"
                    inputTitle="Correo de Contacto"
                    inputType="text"
                    registerForm={{ value: alumno.correoTutor, onChange }}
                />
            ) : (
                <TextInputWithTitleDisabled
                    inputValue={alumno.correoTutor}
                    inputTitle={'Correo de Contacto'}
                    inputName={'correoTutor'}
                />
            )}

        </div>
    )
}
