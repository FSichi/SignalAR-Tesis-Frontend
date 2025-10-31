import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastToken } from '../utils/ToastSweetAlert';

export const ProtectedRoute = ({ children }) => {

    const navigate = useNavigate()
    const { authenticated } = useSelector(state => state.auth);

    useEffect(() => {
        if (authenticated !== true) {
            navigate('/');
            ToastToken.fire({ icon: 'warning', title: 'Error en la Sesion. Vuelva a Iniciar Sesion'});
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}
