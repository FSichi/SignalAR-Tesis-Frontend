import { createSlice } from '@reduxjs/toolkit';

export const alumnosSlice = createSlice({
    name: 'alumnos',
    initialState: {
        alumnosList: [],
        alumnoSelected: {},
        isLoading: false,
        isAlumnoSelectedCharged: false,
    },
    reducers: {
        startLoadingAlumnosProcess: (state) => {
            state.isLoading = true;
        },
        setAlumnosData: (state, action) => {
            state.isLoading = false;
            state.alumnosList = action.payload?.alumnosList;
        },
        setAlumnoSelectedData: (state, action) => {
            state.isLoading = false;
            state.alumnoSelected = action.payload?.alumnoSelected;
            state.isAlumnoSelectedCharged = true;
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingAlumnosProcess, setAlumnosData, setAlumnoSelectedData } = alumnosSlice.actions;