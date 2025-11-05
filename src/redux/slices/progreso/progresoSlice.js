import { createSlice } from '@reduxjs/toolkit';

export const progresoSlice = createSlice({
    name: 'progreso',
    initialState: {
        progresoAlumno: {},               // only contains IDs
        progresoLecciones: [],            // full objects
        progresoSecciones: [],
        progresoEvaluaciones: [],
        isLoading: false,
        isProgresoAlumnoLoaded: false,
        isProgresoLeccionesLoaded: false,
        isProgresoSeccionesLoaded: false,
        isProgresoEvaluacionesLoaded: false,
    },
    reducers: {
        // 🔹 Loading state
        startLoadingProgresoProcess: (state) => {
            state.isLoading = true;
        },

        // 🔹 Set the main progresoAlumno object (IDs only)
        setProgresoAlumnoData: (state, action) => {
            state.isLoading = false;
            state.progresoAlumno = action.payload?.progresoAlumno;
            state.isProgresoAlumnoLoaded = true;
        },

        // 🔹 Set full object arrays
        setProgresoLecciones: (state, action) => {
            state.progresoLecciones = action.payload;
            state.isProgresoLeccionesLoaded = true;
        },
        setProgresoSecciones: (state, action) => {
            state.progresoSecciones = action.payload;
            state.isProgresoSeccionesLoaded = true;
        },
        setProgresoEvaluaciones: (state, action) => {
            state.progresoEvaluaciones = action.payload;
            state.isProgresoEvaluacionesLoaded = true;
        },

        // 🔹 Add or update individual full objects
        addOrUpdateProgresoLeccion: (state, action) => {
            const index = state.progresoLecciones.findIndex(p => p._id === action.payload._id);
            if (index >= 0) {
                state.progresoLecciones[index] = action.payload;
            } else {
                state.progresoLecciones.push(action.payload);
            }
        },
        addOrUpdateProgresoSeccion: (state, action) => {
            const index = state.progresoSecciones.findIndex(p => p._id === action.payload._id);
            if (index >= 0) {
                state.progresoSecciones[index] = action.payload;
            } else {
                state.progresoSecciones.push(action.payload);
            }
        },
        addOrUpdateProgresoEvaluacion: (state, action) => {
            const index = state.progresoEvaluaciones.findIndex(p => p._id === action.payload._id);
            if (index >= 0) {
                state.progresoEvaluaciones[index] = action.payload;
            } else {
                state.progresoEvaluaciones.push(action.payload);
            }
        },
    },
});

export const { 
    startLoadingProgresoProcess, 
    setProgresoAlumnoData,
    setProgresoLecciones,
    setProgresoSecciones,
    setProgresoEvaluaciones,
    addOrUpdateProgresoLeccion,
    addOrUpdateProgresoSeccion,
    addOrUpdateProgresoEvaluacion,
} = progresoSlice.actions;

export default progresoSlice.reducer;
