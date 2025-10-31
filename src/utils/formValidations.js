export const checkFormAlumnosValidation = (formData) => {

    const { nombre, edad, escuela, tutor, email, telefono, parentesco, discapacidad } = formData;

    const checkForm = {
        status: false,
        error: ''
    }

    if (nombre === '' || edad === '' || escuela === '' || tutor === '' || email === '' || telefono === '' ||
        parentesco === '' || discapacidad === '' ||
        parentesco === undefined || discapacidad === undefined
    ) {
        checkForm.error = 'Todos los campos son obligatorios';
        return { ...checkForm };
    }

    checkForm.status = true;
    return { ...checkForm };
}