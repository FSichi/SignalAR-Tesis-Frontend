/* eslint-disable no-unused-vars */

import { discapacidad } from "./Enums";


/* ---------- OPTIONS FOR SELECT ---------- */

export const ProfesionesOptions = [
    {
        label: "Fonoaudiologo",
        value: 'FONOAUDIOLOGO'
    },
    {
        label: "Psicologo",
        value: 'PSICOLOGO'
    },
    {
        label: "Terapista Ocupacional",
        value: 'TERAPISTA_OCUPACIONAL'
    },
    {
        label: "Otro",
        value: 'OTRO'
    }
];

export const DiscapacidadOptions = [
    {
        label: discapacidad.LEVE,
        value: 'LEVE'
    },
    {
        label: discapacidad.MODERADA,
        value: 'MODERADA'
    },
    {
        label: discapacidad.SEVERA,
        value: 'SEVERA'
    },
    {
        label: discapacidad.PROFUNDA,
        value: 'PROFUNDA'
    }
];

export const ParentescoOptions = [
    {
        label: 'Padre',
        value: 'PADRE'
    },
    {
        label: 'Madre',
        value: 'MADRE'
    },
    {
        label: 'Tutor Legal',
        value: 'TUTOR'
    }
];

export const AreaOptions = [
    {
        label: 'Todas',
        value: '1'
    },
    {
        label: 'Matematicas',
        value: '2'
    },
    {
        label: 'Lengua',
        value: '3'
    },
    {
        label: 'C. Sociales',
        value: '4'
    },
    {
        label: 'C. Naturales',
        value: '5'
    },
];


/* ---------- CUSTOM STYLES ---------- */

export const customStyles = {
    control: (provided, state) => ({
        ...provided,
        borderRadius: 7,
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'black' : 'black',
        padding: 12,
        minHeight: '46px',
        height: '46px',
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        height: '46px',
        padding: '0 6px',
    }),
    input: (provided, state) => ({
        ...provided,
        margin: '0px',
    }),
    indicatorSeparator: state => ({
        display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
        height: '46px',
    }),
}

export const customStylesArea = {
    control: (provided, state) => ({
        ...provided,
        borderRadius: 7,
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'black' : 'black',
        padding: 12,
        minHeight: '46px',
        height: '46px',
        width: '187px',
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        height: '46px',
        padding: '0 6px',
        width: '150px'
    }),
    input: (provided, state) => ({
        ...provided,
        margin: '0px',
        width: '150px',
    }),
    indicatorSeparator: state => ({
        display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
        height: '46px',
        
    }),
}

export const customStylesMulti = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'black' : 'black',
        padding: 12,
        minHeight: '44px',
        height: '44px',
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        padding: '0 6px',
        color: 'red'
    }),
    input: (provided, state) => ({
        ...provided,
        margin: '0px',
    }),
    indicatorSeparator: state => ({
        display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
        height: '44px',
    }),
}