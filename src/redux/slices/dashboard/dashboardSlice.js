import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        cards: [],
        isLoading: false,
    },
    reducers: {
        startLoadingDashboardProcess: (state) => {
            state.isLoading = true;
        },
        setDashboardData: (state, action) => {
            state.isLoading = false;
            state.cards = action.payload?.cards;
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingDashboardProcess, setDashboardData } = dashboardSlice.actions;