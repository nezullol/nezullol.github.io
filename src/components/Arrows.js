import React from "react";

import { StyledButton } from "./styles/StyledButton";

const Arrows = ({callback}) => (
    <StyledButton onClick={callback} > O  </StyledButton> 
);

export default Arrows;