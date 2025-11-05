import { colorAreas, colorDiscapacidad, areasSecciones, colorEstadoEvaluacion } from "./Enums";

export const getAlumnosByName = (name, alumnos) => {

    if (name === '') {
        return [];
    }

    const lowerCaseName = name.toLowerCase();

    return alumnos.filter(({ nombreCompleto }) =>
        nombreCompleto.toLowerCase().includes(lowerCaseName)
    );

}

export const getAlumnoByID = (id, alumnos) => {
    return alumnos.find(alumno => alumno._id == id);
}

export const getHasParamsFilterOptions = (search, data) => {

    const hasSearchQuery = search !== '';
    const hasFilteredData = data.length !== 0;

    return { hasSearchQuery, hasFilteredData };
}

export const getRegistroActividadByAlumnoID = (idAlumno, registros) => {

    return registros.filter(({ alumnoId }) => alumnoId == idAlumno);

}

export const getDiscapacidadBackground = (discapacidad) => {

    const discapacidadStyles = {
        LEVE: colorDiscapacidad.LEVE,
        MODERADA: colorDiscapacidad.MODERADA,
        SEVERA: colorDiscapacidad.SEVERA,
        PROFUNDA: colorDiscapacidad.PROFUNDA,
    };

    return discapacidadStyles[discapacidad.toUpperCase()] || '';
};



// secciones 

export const getSeccionesByName = (name, secciones) => {

    if (name === '') {
        return [];
    }

    const lowerCaseName = name.toLowerCase();
    return secciones.filter(({ nombre }) =>
        nombre.toLowerCase().includes(lowerCaseName)
    );

}

export const getSeccionByID = (id, secciones) => {
    return secciones.find(seccion => seccion.id == id);
}

export const getLeccionBySeccionId = (id, lecciones) => {
    return lecciones.filter(leccion => leccion.seccionId == id);
}

export const filterSectionsByArea = (area, secciones) => {
    if (area === 'Todas') {
        return secciones;
    }
    return secciones.filter(seccion => seccion.area == area);
}

// EVALUACIONES

export const getEvaluacionesByName = (name, evaluaciones) => {

    if (name === '') {
        return [];
    }

    const lowerCaseName = name.toLowerCase();

    return evaluaciones.filter(({ nombreEvaluacion }) =>
        nombreEvaluacion.toLowerCase().includes(lowerCaseName)
    );

}

export const getAreaBackground = (area) => {

    const currentArea = Object.keys(areasSecciones).find(key =>
        areasSecciones[key] === area
    );

    const areaStyles = {
        CNATURALES: colorAreas.CNATURALES,
        CSOCIALES: colorAreas.CSOCIALES,
        MATEMATICAS: colorAreas.MATEMATICAS,
        LENGUA: colorAreas.LENGUA,
    };

    return areaStyles[currentArea] || '';
};

export const getEstadoEvaluacionBackground = (estado) => {

    const estadoStyles = {
        PENDIENTE: colorEstadoEvaluacion.PENDIENTE,
        APROBADA: colorEstadoEvaluacion.APROBADA,
        DESAPROBADA: colorEstadoEvaluacion.DESAPROBADA,
    };

    return estadoStyles[estado.toUpperCase()] || '';
};

//Lecciones 

export const getLeccionById = (id, lecciones) => {
    return lecciones.find(leccion => leccion.id == id);
}

// Themes
export const getThemeById = (id, content) => {
    return content.find(cont => cont.id == id);
}

export const getContentByLeccionId = (leccionId, data) => {
    return data.find(content => content.idLeccion == leccionId);
}

export const changeSidebarData = (id, data) => {

    if (id === 1) return data;

    var currentValue = data.map((topic) => topic.id === id
        ? { ...topic, enCurso: true, completado: false }
        : { ...topic }
    );


    var previousValue = currentValue.map((topic, i) => i + 1 === (id - 1)
        ? { ...topic, completado: true, enCurso: false }
        : { ...topic }
    );

    return previousValue;
}

export const getTopicLength = (leccionId, data) => {
    const theoricalContent = getContentByLeccionId(leccionId, data);
    return theoricalContent.contenidoTeorico.length;
}