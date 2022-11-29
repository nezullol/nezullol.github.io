import React, { Component } from 'react';
import { StyledDisplay } from './styles/StyledDisplay';



const Display = ({gameOver, text}) => (
<StyledDisplay>
  <div> {text} </div>
</StyledDisplay>
)

export default Display;
