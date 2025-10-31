import React from 'react';
import {useDroppable} from '@dnd-kit/core';
import { Grid } from '@mui/material';

export function Droppable({children, id, divStyle}) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'p'+ id,
  });

  return (
    <Grid container ref={setNodeRef} style={divStyle}>
      {children}
    </Grid>
  );
}