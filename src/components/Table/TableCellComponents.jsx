import { TableCell, Typography } from '@mui/material';
import { TypographyTitleComponent, TypographySubTitleComponent } from './TableTypographyComponents';
import { TableLinkAction } from '../Links/TableLinkAction';
import { TableActionButton } from '../Buttons/TableActionButtons';

export const TableCellComponent = ({ data, classNameCustom, centerTextCell = false }) => {
    return (
        <TableCell style={centerTextCell ? { textAlign: 'center' } : null}>
            <TypographyTitleComponent data={data} classNameCustom={classNameCustom} />
        </TableCell>
    )
}

export const TableCellBackgroundComponent = ({ data, customBackgroundStyles, customWidth }) => {
    return (
        <TableCell style={{ textAlign: 'center' }}>
            <Typography
                style={{
                    backgroundColor: customBackgroundStyles,
                    color: 'rgb(12 10 9)',
                    fontSize: '1.1rem',
                    borderRadius: 10,
                    padding: '7px 15px',
                    display: 'inline-block',
                    fontFamily: 'Josefin Sans',
                    width: customWidth,
                }}
            >
                <span>{data}</span>
            </Typography>
        </TableCell>
    )
}

export const TableCellMultiComponent = ({ dataTitle, dataSubTitle, classNameCustomTitle, classNameCustomSubTitle }) => {
    return (
        <TableCell>
            <TypographyTitleComponent data={dataTitle} classNameCustom={classNameCustomTitle} />
            <TypographySubTitleComponent data={dataSubTitle} classNameCustom={classNameCustomSubTitle} />
        </TableCell>
    )
}

export const TableCellActionComponent = ({ linkAction, title, color }) => {
    return (
        <TableCell className='text-center' style={{ textAlign: 'center', fontFamily: 'Josefin Sans' }}>
            <TableLinkAction title={title} linkAction={linkAction} color={color} />
        </TableCell>
    )
}

export const TableCellMultiActionComponent = ({ action1, action2, title1, title2, color1, color2, type1, type2 }) => {

    const renderAction = (title, action, color, type) => {
        if (type === 'link') {
            return <TableLinkAction title={title} linkAction={action} color={color} />;
        } else {
            return <TableActionButton title={title} color={color} action={action} />;
        }
    };

    return (
        <TableCell className='text-center' style={{ textAlign: 'center', fontFamily: 'Josefin Sans' }}>
            {renderAction(title1, action1, color1, type1)}
            {renderAction(title2, action2, color2, type2)}
        </TableCell>
    )
}
