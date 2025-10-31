import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import { Grid } from '@mui/material';

export function Draggable({children, id, divStyle, matchedIndex}) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'i'+id
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <Grid item xs={6} ref={setNodeRef} style={{...style, touchAction: 'none'}} {...listeners} {...attributes}>
      {children}
    </Grid>
  );
}