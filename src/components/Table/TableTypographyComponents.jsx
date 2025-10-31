import { Typography } from '@mui/material';

export const TypographyTitleComponent = ({ classNameCustom, data }) => {
    return (
        <Typography>
            <span className={`${classNameCustom}`} style={{ fontFamily: 'Josefin Sans' }}>
                {data}
            </span>
        </Typography>
    )
}

export const TypographySubTitleComponent = ({ data, classNameCustom }) => {
    return (
        <Typography>
            <span className={`${classNameCustom}`} style={{ fontFamily: 'Josefin Sans' }}> {/* bg-cyan-500 px-3 py-2 rounded-lg  */}
                {data}
            </span>
        </Typography>
    )
}
