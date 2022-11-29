import React, { Component } from 'react';

import { StyleStage } from './styles/StyledStage';

import Cell from './Cell';

export default class Stage extends Component {
    constructor(props) {
        super(props)
        
       
    }
  render() {
    return (
      <div >
        <StyleStage 
        width = {this.props.stage[0].length}
        height = {this.props.stage.length}
        >

        {this.props.stage.map
        (row => row.map(
          (cell, x) => 
          <Cell key={x} type={cell[0]} />
          ))}
          </StyleStage>

      </div>
    )
  }
}
