import { TableCell, TableHead, TableRow } from '@mui/material';


export const TableHeaderComponent = ({ headerData, customClassName }) => {
    return (
        <TableHead className={customClassName}>
            <TableRow>
                {headerData.map((header, i) => (
                    <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }} key={i}>
                        <span className='text-gray-200 dark:text-indigo-400'> {header} </span>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}
