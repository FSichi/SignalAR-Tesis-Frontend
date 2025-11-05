import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../slices/auth';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { alumnosSlice } from '../slices/alumnos/alumnosSlice';
import { dashboardSlice } from '../slices/dashboard/dashboardSlice';
import { progresoSlice } from '../slices/progreso';

const persistConfig = {
    key: 'auth',
    storage,
}

const authPersistedReducer = persistReducer(persistConfig, authSlice.reducer)

export const store = configureStore({
    reducer: {
        auth: authPersistedReducer,
        alumnos: alumnosSlice.reducer,
        dashboard: dashboardSlice.reducer,
        progreso: progresoSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});

export const persistor = persistStore(store)
