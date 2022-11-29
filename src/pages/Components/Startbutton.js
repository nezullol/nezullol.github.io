import React, { Component } from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const Startbutton = ({callback}) => (
      <StyledStartButton onClick={callback}>

        <div className='play-button'>Startbutton</div>
      </StyledStartButton>
    
  
)


export default Startbutton;