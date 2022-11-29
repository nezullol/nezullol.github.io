import React, { Component } from 'react';
import { StyledCell } from './styles/StyledCell';

import { TETROMINOS } from '../../tetrominos';


  const Cell = ({type}) => (

    <StyledCell type={type} color={TETROMINOS[type].color} >
      Cell
    </StyledCell> 
  )

export default Cell;