import styled from "styled-components";

export const StyleStage = styled.div `

display: grid;
grid-gap: 1px;
max-width: 25vw;
background: #111;
grid-template-columns: repeat(${props => props.width}, 1fr);
grid-template-rows: repeat(
  ${props => props.height},
  calc(25vh / ${props => props.width})
);
border: solid 2px #333;
width: 100%;
height: 600px;

`